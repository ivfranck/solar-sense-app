import React from 'react';
import {Stacked, Pie, Button, SparkLine} from "../components";

import notionsketch from "../data/notionsketch2.png";
import {user, userQuickData, budget, totalExpense} from "../contexts/Simplifier";

import {Line} from "./index";
import {NavLink} from "react-router-dom";


const Home = () => {
    return (
        <div className="mt-12">
            <div className="m-12">
                <h5 className="font-bold text-3xl">{user}'s</h5>
                <h5 className="font-bold text-7xl">Dashboard</h5>
                <br/>
                <p className="text-neutral-500">Discover how much electricity you're using, track your progress towards energy-saving goals, and reduce your carbon <br/>footprint with ease.
                Access data on your current electricity usage, average consumption, carbon footprint, and even determine<br/> if you've exceeded your budget.
                    Gain valuable insights into your energy habits and take control of your environmental impact.</p>
            </div>


            <div className="flex flex-wrap lg:flex-nowrap justify-center">
                {userQuickData.map((item) => (
            <div key={item.title}
                className="w-full m-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                <div className="flex flex-col items-center m-12">

                    {item.logo}
                    <h5 className="mb-1 text-4xl text-gray-900 dark:text-white font-bold">{item.amount}</h5>
                    <span className="text-sm text-neutral-500 dark:text-gray-400 font-medium">{item.description}</span>

                </div>
            </div>
                ))}
            </div>


            <Line/>


            <div className="flex gap-24 flex-wrap justify-center">
                <div className="bg-white dark:text-gray-200  dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-700">
                    <div className="flex justify-between">
                        <p className="font-semibold text-4xl">Consumption Updates</p>


                    </div>

                    <div className="mt-10 flex gap-10 flex-wrap ">

                        <div className="border-r-1 border-color m-4 pr-10">

                            <div>
                                <p>
                                    <span className="text-3xl font-semibold">€{budget}</span>
                                </p>
                                <p className="text-gray-500 mt-1">Budget</p>
                            </div>
                            <div className="mt-8">
                                <p>
                                    <span className="text-3xl font-semibold">€{totalExpense}</span>
                                </p>
                                <p className="text-gray-500 mt-1">Expense</p>
                            </div>
                        </div>

                        <div className="">
                            <Stacked width="320px" height="360px"/>
                        </div>
                    </div>

                </div>



                <div key="solar" className="flex m-3 flex-wrap lg:flex-nowrap justify-center gap-10">


                    <div
                        className="max-w-sm bg-white">

                        <img className="rounded-t-lg" src={notionsketch} alt=""/>

                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Let's Go Solar!</h5>
                            </a>
                            <p className="mb-3 font-normal text-neutral-500 dark:text-gray-400">View our personalised solar panel recommendation</p>
                            <NavLink to={'/solarrecommendation'}>
                                <p className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:text-green-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Consult Choices
                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor"
                                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                          clipRule="evenodd"></path>
                                </svg>
                            </p>
                            </NavLink>

                        </div>
                    </div>


                </div>



            </div>



        </div>
    );
};

export default Home;