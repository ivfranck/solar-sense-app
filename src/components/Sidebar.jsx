import React from 'react';

// helps to switch between pages
import {Link, NavLink} from "react-router-dom";
//icons
import {SiShopware} from "react-icons/si";
import {MdOutlineArrowBack, MdOutlineCancel} from "react-icons/md";
//tooltip
import {TooltipComponent} from "@syncfusion/ej2-react-popups";
import logo from "../data/SolarSenseLogo.png";

import {links} from "../data/dummy";
import {sidebarHeaders} from "../contexts/Simplifier";

import {useStateContext} from "../contexts/ContextProvider";

const Sidebar = () => {
    const {activeMenu, setActiveMenu, screenSize} = useStateContext();
    const handleCloseSideBar = () => {
        if (activeMenu && screenSize <= 900){
            setActiveMenu(false)
        }
    }
    const activeLink = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2"
    const normalLink = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black border border-transparent hover:border-green-200 m-2"

    return (
        <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 shadow shadow-xl shadow-gray-300">
            {activeMenu && (<>
                <div className="flex justify-between items-center">
                    <Link to="/" onClick={handleCloseSideBar}>
                        {/*<SiShopware/><span>SolarSense</span>*/}
                        <img src={logo} alt="solarsenselogo" className="p-6"/>
                    </Link>
                    <TooltipComponent content="Menu" position="BottomCenter">
                        <button type="button" onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden">
                            <MdOutlineArrowBack/>
                        </button>
                    </TooltipComponent>
                </div>
                {/* div for all the elements below icon*/}
                <div className="mt-10">
                    {/* loop through all */}
                    <div className="">
                    {sidebarHeaders.map((item) => (
                        <div key={item.title}>
                            {item.links.map((link) => (
                                <NavLink to={`/${link.link}`} key={link.name} onClick={handleCloseSideBar} style={({isActive}) => ({backgroundColor: isActive ? "black" : ''})} className={({isActive}) => isActive ? activeLink : normalLink}>
                                    {link.icon}
                                    <span className="capitalize p-4">{link.name}</span>
                                </NavLink>
                            ))}
                        </div>
                    ))}
                    </div>
                </div>
            </>)}
        </div>
    );
};

export default Sidebar;