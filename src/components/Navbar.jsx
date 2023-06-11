import React, {useEffect} from 'react';
import {AiOutlineMenu, AiOutlineLogout} from "react-icons/ai";
import {FiShoppingCart} from "react-icons/fi";
import {BsChatLeft} from "react-icons/bs";
import {RiNotification3Line} from "react-icons/ri";
import {MdClose, MdKeyboardArrowDown, MdMenu, MdOutlineArrowBack} from "react-icons/md";

import {TooltipComponent} from "@syncfusion/ej2-react-popups";

import avatar1 from "../data/avatar1.png";

import {UserProfile, LogOut} from "./index";
import {useStateContext} from "../contexts/ContextProvider";
import {NavLink} from "react-router-dom";

const NavButton = ({title, customFunc, icon, color, dotColor}) => (
    <TooltipComponent content={title} position="BottomCenter">
        <button type="button" onClick={customFunc} style={{color}} className="relative text-xl rounded-full p-3 hover:bg-light-gray">
            <span style={{background: dotColor}} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"/>
            {icon}
        </button>
    </TooltipComponent>
)

const Navbar = () => {
    const {activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize, loggedInUser} = useStateContext();


    {/* for small screens to show or hide sidebar*/}
    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    useEffect(() => {
        if (screenSize <= 900){
            setActiveMenu(false);
        }
        else {
            setActiveMenu(true)
        }
    }, [screenSize]);


    return (
        <div className="flex justify-between p-2 md:mx-6 relative">
            <NavButton title="Menu" customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} color="black" icon={<MdMenu/>}/>
            {/*div for icons top right*/}
            <div className="flex">
                <TooltipComponent content="Profile" children="BottomCenter">
                    <NavLink to={"/profile"}>
                    <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-gray-100 rounded-lg hover:scale-110 ">
                        <img className="rounded-full w-8 h-8" src={avatar1}/>
                        <p><span className="text-gray-800 text-14"></span>{" "}<span className="text-gray-800 font-bold ml-1 text-14">{loggedInUser}</span></p>
                    </div>
                    </NavLink>
                </TooltipComponent>
                <div><a className="text-3xl">│</a></div>
                <div className="flex items-center gap-2 cursor-pointer bg-black p-1 w-24 h-9 text-white hover:text-green-300 rounded-lg" onClick={() => handleClick("logOut")}>
                    <AiOutlineLogout className="text-xl"/>
                    <p className="text-14">Log Out</p>

                </div>
                {isClicked.logOut && <LogOut/>}
            </div>
        </div>
    );
};

export default Navbar;