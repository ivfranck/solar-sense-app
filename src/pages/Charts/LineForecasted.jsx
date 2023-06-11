import React from 'react';
import {ChartsHeader, LineChart} from "../../components";
import LineChartForecasted from "../../components/Charts/LineChartForecasted";
import {NavLink} from "react-router-dom";

const LineForecasted = () => {
    let chartInstance = <LineChartForecasted />;
    function clickHandler() {
        chartInstance.exportModule.export('PNG', 'sample');
    }
    return (
        <div className="m-12">
            <div className="block p-6 bg-white rounded-lg ">

                <h5 className="mb-2 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">Discover Your Energy Future</h5>
                <br/>
                <p className="first-letter:text-8xl first-letter:font-bold first-letter:text-black dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left text-neutral-500">Take control of your energy consumption with our innovative Forecasted Electricity Consumption Chart.
                    <br/>This powerful tool provides you with valuable insights into your future electricity needs, helping you make informed decisions and optimize your energy usage.
                    <br/>Get ready to visualize your energy future and embark on a journey towards efficiency and sustainability. Explore our chart and unlock the potential to save money, reduce your environmental impact, and create a brighter future for generations to come.
                </p>

            </div>

            <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">

                <ChartsHeader category="" title="Electricity Usage Forecast" />
                <div className="w-full">
                    <LineChartForecasted />
                </div>
            </div>


            <div
                className="w-full p-4 text-center bg-white rounded-lg  sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Consumption higher than expected?</h5>
                <p className="mb-5 text-base text-neutral-500 sm:text-lg dark:text-gray-400">Check out how to change that by witching to solar and saving more.</p>

                <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                    <NavLink to={'/solarrecommendation'}>
                        <div
                           className="w-full sm:w-auto bg-black hover:text-green-300 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">

                            <div className="text-left">
                                <div className="-mt-1 font-sans text-sm font-semibold">SolarSense</div>
                                <div className="mb-1 text-xs">Pick</div>

                            </div>
                        </div>
                    </NavLink>
                    <button type="button" onClick={clickHandler}
                       className="w-full sm:w-auto bg-black hover:text-green-300 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">

                        <div className="text-left">

                            <div className="-mt-1 font-sans text-sm font-semibold">Download</div>
                            <div className="mb-1 text-xs">Forecasted Data</div>
                        </div>
                    </button>
                </div>
            </div>

        </div>

    );
};

export default LineForecasted;