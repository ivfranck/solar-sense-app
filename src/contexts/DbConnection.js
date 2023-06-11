const express = require("express");
const mysql = require("mysql");

//for http transfers
const cors = require("cors");

//for encryption
const bcrypt = require("bcrypt");
const saltRounds = 10

//for cookies and sessions
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

//for accessing data in S3
const AWS = require('aws-sdk');
const parquet = require('parquetjs-lite');

const app = express();

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));

//initialize session
app.use(session({
    //key is the name of the cookie
    key: "userId",
    secret: "superconfidentialsecret",
    resave: false,
    saveUninitialized: false,
    cookie: {expires: 60 * 60 * 24}
}));

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",//private
    database: ""//private
});

//add user to db
app.post("/register", (req, res) => {

    const firstname = req.body.firstname
    const firstnameCapitalized = firstname.charAt(0).toUpperCase() + firstname.slice(1)

    const lastname = req.body.lastname
    const lastnameCapitalized = lastname.charAt(0).toUpperCase() + lastname.slice(1)

    const username = req.body.username
    const password = req.body.password
    const provider = req.body.provider
    const budget = req.body.budget

    bcrypt.hash(password, saltRounds, (err, hash) => {
        if(err){console.log(err)}

        db.query("INSERT INTO users (firstname, lastname, username, password, provider, budget) VALUES (?,?,?,?,?,?);",
            [firstnameCapitalized, lastnameCapitalized, username, hash, provider, budget],
            (err, result) => {
            if(err){console.log(err);}
            if(result){res.send({message: "User registered successfully"});}

        })
    })


});

app.get("/login", (req, res) => {
    if(req.session.user){
        //send a personalised object
        res.send({loggedIn: true, user: req.session.user})
    }
    else{
        res.send({loggedIn: false})
    }
})

let retVal;
app.post("/login", (req, res) => {

    const username = req.body.username
    const password = req.body.password

    //Test S3 conn
    console.log("AWS Conn Test")
    // Configure AWS credentials
    AWS.config.update({
        accessKeyId: '',//private
        secretAccessKey: '',//private
        region: 'eu-central-1'
    });

// Create an S3 client
    const s3 = new AWS.S3();

    const bucketName = 'solar-sense-data';const filePathJson = 'engie/accepted/qB7sRfK5Zn-user/aggregated-time/web/hourly/part-00000-2e4bbd65-1499-462d-bd72-d8259ca2c9aa-c000.json';

    function getObjectFromS3(bucketName, filePathJson) {
        return new Promise((resolve, reject) => {
            s3.getObject({ Bucket: bucketName, Key: filePathJson }, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data.Body.toString());
                }
            });
        });
    }


    let elecdata;


    db.query("SELECT * FROM users WHERE username = ?;",
        username,
        (err, result) => {
            if (err){res.send({err: err})}

            if (result.length > 0){
                bcrypt.compare(password, result[0].password, (error, response) => {

                    if(response){
                        //create a session
                        req.session.user = result;
                        const userId = req.session.user[0].id;

                        //console.log(req.session.user);

                        getObjectFromS3(bucketName, filePathJson)
                            .then(jsonData => {
                                elecdata = jsonData;

                                console.log(elecdata);
                                let tempResult = result;
                                //let parsedData = JSON.parse(elecdata);
                                //parsedData.forEach((item) => {tempResult.push(item)});
                                console.log(typeof elecdata)
                                console.log(tempResult)
                                res.send(tempResult);

                            })
                            .catch(err => {
                                console.error('Error retrieving JSON file:', err);
                            });

                    }
                    else {
                        res.send({message: "Wrong combination"})
                    }
                })
            }
            else{
                res.send({message: "User does not exist"})
            }
        })
});

const GetUserData = (userId) => {
 //console.log("logged in with this : "+ parseInt(userId));
    //let retVal;
    db.query("SELECT * FROM data WHERE id = ?;", parseInt(userId),
        (err, result) => {
            if(result.length > 0){

                //console.log(result);
                retVal = result;
            }
        }
    );

    //console.log(retVal);

}

app.post("/logout", (req, res) => {
    req.session.destroy();
    console.log(res);
});
app.listen(3307, () => {
    console.log("running server");
});