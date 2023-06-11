import React from 'react';
import Axios from "axios";

const endSession = () => {
    Axios.post("http://localhost:3307/logout")
        .then((response) => {
            console.log(response);
        });
    //window.location.reload(false);

    //redirect to login page
    window.location.href = "http://localhost:3000/";

};
const LogOut = () => {
    return (
        endSession()
    );
};

export default LogOut;