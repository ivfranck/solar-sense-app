import React, {createContext, useContext, useState} from "react";

const StateContext = createContext();
const initialState = {
    userProfile: false,
    logOut: false
}


export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked]:true});
    }
    const [screenSize, setScreenSize] = useState(undefined);

    {/* for theme*/}
    const [currentColor, setCurrentColor] = useState("#03C9D7");
    const [currentMode, setCurrentMode] = useState("Light");
    const [themeSettings, setThemeSettings] = useState(false);

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem("themeMode", e.target.value);
        setThemeSettings(false)
    }
    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem("colorMode", color);
        setThemeSettings(false)
    }


    /*to store input data from form*/
    const [firstnameReg, setFirstnameReg] = useState('');
    const [lastnameReg, setLastnameReg] = useState('');

    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');
    const [providerReg, setProviderReg] = useState('');
    const [consentReg, setConsentReg] = useState('');
    const [regMessage, setRegMessage] = useState('');
    const [budgetReg, setBudgetReg] = useState('');

    const [usernameCheck, setUsernameCheck] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');

    //TODO: see if needed to be removed
    const [loginstatus, setloginstatus] = useState('');

    const [loggedInUser, setLoggedInUser] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);
    const [userBudget, setUserBudget] = useState('');
    const [averageConsumption, setAverageConsumption] = useState('');
    const [consumptionCostTotal, setConsumptionCostTotal] = useState('');

    const [dataToDisplay, setDataToDisplay] = useState();

    return(
        <StateContext.Provider value={{activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize, currentColor, setMode, setColor, currentMode, themeSettings, setThemeSettings,
            usernameReg, passwordReg, budgetReg, setBudgetReg, firstnameReg, setFirstnameReg, lastnameReg, setLastnameReg, usernameCheck, passwordCheck, setloginstatus, setLoggedInUser, loggedInUser, setUsernameReg, setPasswordReg, providerReg, setProviderReg, consentReg, setConsentReg, regMessage, setRegMessage, setUsernameCheck, setPasswordCheck, loginstatus,
            isLoggedIn, setIsLoggedIn, userBudget, setUserBudget, isRegistered, setIsRegistered,
            dataToDisplay,setDataToDisplay, averageConsumption, setAverageConsumption, consumptionCostTotal, setConsumptionCostTotal}}>
            {children}
        </StateContext.Provider>
    )
}


export const useStateContext = () => useContext(StateContext);