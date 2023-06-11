import React, {useEffect} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import {Navbar, Footer, Sidebar, ThemeSettings} from "./components";
import {Home, Stacked, Bar, Pie, Line, LineForecasted} from "./pages";

import {useStateContext} from "./contexts/ContextProvider";

import "./App.css";
import Login from "./components/Login";
import Axios from "axios";
import Registration from "./components/Registration";
import Profile from "./pages/Profile";
import Streamline from "./contexts/Simplifier";
import SolarRec from "./pages/SolarRec";
import SolarInfo from "./pages/SolarInfo";
import ScrollToTop from "./contexts/scrollToTop";


const App = () => {

    const {activeMenu, themeSettings, setThemeSettings, currentMode, isLoggedIn, setloginstatus, setLoggedInUser, isRegistered} = useStateContext();
    Streamline();

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

    return(
        <div className={currentMode === "Dark" ? "dark" : ""}>
            <BrowserRouter>
                <ScrollToTop/>
                {isLoggedIn ? (
                    <div className="flex relative dark:bg-main-dark-bg">
                        {activeMenu ? (
                            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg">
                                <Sidebar/>
                            </div>
                        ) : (
                            <div className="w-0 dark:bg-secondary-dark-bg">
                                <Sidebar/>
                            </div>
                        )}
                        <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
                            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                                <Navbar/>
                            </div>

                            <div>
                                {themeSettings && <ThemeSettings/>}

                                <Routes>
                                    <Route path="/" element= {<Home/>}/>
                                    <Route path="/home" element= {<Home/>}/>

                                    <Route path="/line" element={<Line/>}/>
                                    <Route path="/forecast" element={<LineForecasted/>}/>
                                    <Route path="/profile" element={<Profile/>}/>
                                    <Route path="/solarrecommendation" element={<SolarRec/>}/>
                                    <Route path="/solarinfo" element={<SolarInfo/>}/>


                                </Routes>
                            </div>
                            <Footer/>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div>
                            <div>
                                <Routes>
                                    <Route path="/" element= {<Login/>}/>
                                    <Route path="/registration" element= {<Registration/>}/>
                                </Routes>
                            </div>
                        </div>
                    </div>
                )}

            </BrowserRouter>
        </div>

    )
}

export default App