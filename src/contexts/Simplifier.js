import React from 'react';
import {MdCalculate, MdEco, MdOfflineBolt} from "react-icons/md";
import {useStateContext} from "./ContextProvider";

import {
    AiOutlineArrowsAlt,
    AiOutlineAudit,
    AiOutlineHome,
    AiOutlineProfile,
} from "react-icons/ai";

export let userQuickData;
export let user;
export let sidebarHeaders;
export let totalExpense;
export let budget;

const Streamline = () => {

    const {userBudget, loggedInUser, averageConsumption, consumptionCostTotal} = useStateContext();

    totalExpense = consumptionCostTotal;
    user = loggedInUser;
    budget = userBudget;

    userQuickData = [
        {
            title: 'Average Consumption MWH',
            description: "Average consumption for current year",
            amount: averageConsumption + ' kWh',
            percentage: '-4%',
            state: "Good",
            link: "#",
            logo: <MdOfflineBolt className="w-20 h-20 mb-3" style={{color: "orange"}}/>,
            color: 'orange'
        },
        {
            title: 'Carbon Footprint',
            description: "Estimated greenhouse gases generated based on your usage",
            amount: '16 t',
            percentage: '-4%',
            state: "Good",
            link: "#",
            logo: <MdEco className="w-20 h-20 mb-3" style={{color: "green"}}/>,
            color: 'green'
        },
        {
            title: 'Budget Status',
            description: "Amount spent versus your given budget of: €" + userBudget,
            amount: '€ ' + consumptionCostTotal,
            percentage: '-4%',
            state: "Good",
            link: "#",
            logo: <MdCalculate className="w-20 h-20 mb-3" style={{color: "gray"}}/>,
            color: 'black'
        },
    ];

    sidebarHeaders = [
        {
            title: 'Dashboard',
            links: [
                {
                    name: 'home',
                    link: 'home',
                    icon: <AiOutlineHome/>,
                },
            ],
        },

        {
            title: 'Services',
            links: [
                {
                    name: 'Forecast',
                    link: 'forecast',
                    icon: <AiOutlineArrowsAlt/>,
                },
                {
                    name: 'Our pick',
                    link: 'solarrecommendation',
                    icon: <AiOutlineAudit/>,
                },

            ],
        },

        {
            title: 'Account',
            links: [
                {
                    name: 'Profile',
                    link: 'profile',
                    icon: <AiOutlineProfile/>,
                }
            ],
        },

    ];



}

export const Wrangling = (dataToDisplay, setAverageConsumption, setConsumptionCostTotal) => {



    const costPerKwh = 0.480;

    let consumptionTotal = 0;
    let costTotal = 0;
    let averageConsumption;


    dataToDisplay.forEach((item) => {
        consumptionTotal += item.y;
        costTotal += item.cost;
    });


    averageConsumption = (consumptionTotal / dataToDisplay.length).toFixed(3);

    setAverageConsumption(averageConsumption);
    setConsumptionCostTotal(costTotal);



}
export default Streamline;
