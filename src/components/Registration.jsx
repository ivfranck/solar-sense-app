import React from "react";
import Axios from "axios";
import {useStateContext} from "../contexts/ContextProvider";
import {SiShopware} from "react-icons/si";
import logo from "../data/SolarSenseLogo.png";

const Registration = () => {

    const {firstnameReg, setFirstnameReg, lastnameReg, setLastnameReg, usernameReg, passwordReg, providerReg, setProviderReg, consentReg, setConsentReg, regMessage, budgetReg, setBudgetReg, setRegMessage, usernameCheck, passwordCheck, setloginstatus, setLoggedInUser, isRegistered, setIsRegistered, loggedInUser, setUsernameReg, setPasswordReg, setUsernameCheck, setPasswordCheck, loginstatus, isLoggedIn, setIsLoggedIn} = useStateContext();

    //Need this to see if session exists (frontend)
    Axios.defaults.withCredentials = true;

    //to send data to the backend (db)
    const register = () => {
        Axios.post("http://localhost:3307/register", {firstname: firstnameReg, lastname: lastnameReg, username: usernameReg, password: passwordReg, provider: providerReg, budget: budgetReg})
            .then((response) => {
                if(response.data.message){
                    console.log(response.data.message);
                    setIsRegistered(true);

                    window.alert("Registration successful. You will be redirected to the Sign in page...")

                    window.location.href = "http://localhost:3000/";
                }

            })
    };

    const check = () => {
        if(usernameReg.length > 0 && passwordReg.length > 0 && providerReg.length > 0 && budgetReg.length > 0 && firstnameReg.length > 0 && lastnameReg.length > 0){
            if (consentReg.length > 0){
                register();
            }
            else {
                setRegMessage("Accept data usage");
                console.log("Accept data usage");
            }
        }
        else {
            setRegMessage("Fill in all fields");
            console.log("Fill in all fields");
        }

    }


    return (
        <div className="App">

            <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <img src={logo} className="mx-auto h-16 w-auto"/>
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Create an account</h2>

                    </div>
                    <div className="mt-8 space-y-6">
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="first-name"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name *</label>
                                <input id="first-name" name="firstname" type="text" required
                                       className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                       placeholder="First name" onChange={(e)=> {setFirstnameReg(e.target.value)}}/>
                            </div>
                            <br/>
                            <div>
                                <label htmlFor="last-name"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name *</label>
                                <input id="last-name" name="lastname" type="text" required
                                       className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                       placeholder="Last name" onChange={(e)=> {setLastnameReg(e.target.value)}}/>
                            </div>
                            <br/>
                            <div>
                                <label htmlFor="username"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username *</label>
                                <input id="username" name="username" type="text" required
                                       className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                       placeholder="Username" onChange={(e)=> {setUsernameReg(e.target.value)}}/>
                            </div>
                            <br/>
                            <div>
                                <label htmlFor="password"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password *</label>
                                <input id="password" name="password" type="password" autoComplete="current-password"
                                       required
                                       className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                       placeholder="Password" onChange={(e)=> {setPasswordReg(e.target.value)}}/>
                            </div>
                            <div>
                                <br/>
                                <label htmlFor="provider"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your provider: *</label>
                                <select id="provider"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        onChange={(e)=> {setProviderReg(e.target.value)}}>
                                    <option value="null">Choose provider</option>
                                    <option value="Engie">Engie</option>
                                    <option value="Luminus">Luminus</option>
                                </select>

                            </div>
                            <br/>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">What is your yearly budget? *</label>
                                <input id="budget" name="budget" type="number" required
                                       className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                       placeholder="Budget (€)" onChange={(e)=> {setBudgetReg(e.target.value)}}/>
                            </div>

                        </div>

                        <div className="flex items-start mb-6">
                            <div className="flex items-center h-5">
                                <input id="consent" type="checkbox" onChange={(e)=> {setConsentReg(e.target.value)}}
                                       className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                       required/>
                            </div>
                            <label htmlFor="consent"
                                   className="ml-2 text-sm font-medium text-gray-500">I accept for my data to be used.</label>
                        </div>


                        <div className="text-sm text-red-400" >{regMessage}</div>
                        <div>
                            <button onClick={check} className="group relative flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
                                      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                        <svg className="h-5 w-5 text-gray-500 group-hover:text-green-400" viewBox="0 0 20 20" fill="currentColor"
                                             aria-hidden="true">
                                          <path fillRule="evenodd"
                                                d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                                                clipRule="evenodd"/>
                                        </svg>
                                      </span>
                                Sign up
                            </button>
                        </div>

                        <div className="flex items-center justify-between">

                            <div className="text-sm">
                                <a onClick={() => {window.location.replace("/")}} className="font-medium text-black hover:text-green-500">Back to Sign in</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Registration;