import React from 'react';
import {ChartsHeader, LineChart} from "../../components";
import LineChartRec from "../../components/Charts/LineChartRec";

const LineRec = () => {
    return (
        <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
            <ChartsHeader category="" title="" />
            <div className="w-full">
                <LineChartRec />
            </div>
        </div>
    );
};

export default LineRec;