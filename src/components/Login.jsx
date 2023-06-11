import Axios from "axios";
import React, {useEffect, useState} from "react";
import {useStateContext} from "../contexts/ContextProvider";
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import {Home} from "../pages";
import Registration from "./Registration";
import {SiShopware} from "react-icons/si";
import Streamline, {Wrangling} from "../contexts/Simplifier";
import logo from "../data/SolarSenseLogo.png";
import {Footer} from "./index";


const Login = () => {


    const {usernameReg, passwordReg, handleClick, regMessage, usernameCheck, passwordCheck, setloginstatus, setLoggedInUser, userBudget, setUserBudget, loggedInUser, setUsernameReg, setPasswordReg, setUsernameCheck, setPasswordCheck, loginstatus, isLoggedIn, setIsLoggedIn, setDataToDisplay, setAverageConsumption, setConsumptionCostTotal} = useStateContext();



    //Need this to see if session exists (frontend)
    Axios.defaults.withCredentials = true;

    //to send data to the backend (db)
    /*const register = () => {
        Axios.post("http://localhost:3307/register", {username: usernameReg, password: passwordReg})
            .then((response) => {
                if(response.data.message){
                    console.log(response.data.message);
                }

            })
    };*/

    const login = () => {
        Axios.post("http://localhost:3307/login", {username: usernameCheck, password: passwordCheck})
            .then((response) => {
                if(response.data.message){
                    setloginstatus(response.data.message);
                    console.log(loginstatus);
                }
                else {
                    //login successful
                    setloginstatus("Hi, " + response.data[0].username);
                    setIsLoggedIn(true);
                    console.log("User " + response.data[0].username + " logged in with id: " + response.data[0].id);
                    setLoggedInUser(response.data[0].firstname);
                    setUserBudget(response.data[0].budget);
                    console.log("this is the response: ");
                    console.log(response);
                    console.log("#########");
                    console.log(response.data.slice(1));
                    setDataToDisplay(response.data.slice(1));
                    Wrangling(response.data.slice(1), setAverageConsumption, setConsumptionCostTotal);




                    /*function RedirectToApp(){
                        const navigate = useNavigate();
                        navigate("/home");
                    }

                    RedirectToApp();*/

                    //window.location.replace("/home");
                    //setLoggedInUser(response.data[0].username);
                    //console.log(setLoggedInUser);

                }

            })

    };

    /*
    //Axios requesting to see if a user is logged in
    useEffect(() => {
        Axios.get("http://localhost:3307/login")
            .then((response) => {
                if(response.data.loggedIn == true){
                    setloginstatus(response.data.user[0].username + " is logged in.");
                    setLoggedInUser(response.data.user[0].username);
                    console.log(setLoggedInUser);

                }

            })
    }, [])
    */

    return (
        <div className="m-12">

            <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <img src={logo} className="mx-auto h-16 w-auto"/>

                            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-black">Sign in</h2>

                    </div>
                    <div className="mt-8 space-y-6">
                            <div className="-space-y-px rounded-md shadow-sm">
                                <div>
                                    <label className="sr-only">Username</label>
                                    <input id="username" name="username" type="text" required
                                           className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                           placeholder="Username" onChange={(e)=> {setUsernameCheck(e.target.value)}}/>
                                </div>
                                <br/>
                                <div>
                                    <label htmlFor="password" className="sr-only">Password</label>
                                    <input id="password" name="password" type="password" autoComplete="current-password"
                                           required
                                           className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                           placeholder="Password" onChange={(e)=> {setPasswordCheck(e.target.value)}}/>
                                </div>
                            </div>


                        <div className="text-sm text-red-400" >{loginstatus}</div>
                            <div>
                                <button onClick={login} className="group relative flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white hover:bg-grey focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                        <svg className="h-5 w-5 text-gray-500 group-hover:text-green-400" viewBox="0 0 20 20" fill="currentColor"
                                             aria-hidden="true">
                                          <path fillRule="evenodd"
                                                d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                                                clipRule="evenodd"/>
                                        </svg>
                                      </span>
                                    Sign in
                                </button>
                            </div>

                        <div className="flex items-center justify-between">

                            <div className="text-sm">
                                Don't have an account?
                                <a onClick={() => {window.location.replace("/registration")}} className="font-medium text-black hover:text-green-500"><u> Create a free account.</u> </a>
                            </div>
                            <div className="text-sm text-red-400" >{regMessage}</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;