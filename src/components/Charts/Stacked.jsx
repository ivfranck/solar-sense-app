import React from "react";
import {ChartComponent, DateTime, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip} from "@syncfusion/ej2-react-charts";
import {stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis} from "../../data/dummy";

const Stacked = ({width, height}) => {
    const palette = ["#3ea73e", "#000000"];
    return(
        <ChartComponent width={width} height={height} id="charts" primaryXAxis={stackedPrimaryXAxis} primaryYAxis={stackedPrimaryYAxis} palettes={palette} chartArea={{border: {width: 0}}} tooltip={{enable: true}} legendSettings={{background: "white"}}>
            <Inject services={[Legend, Category, StackingColumnSeries, Tooltip, DateTime]}/>
            <SeriesCollectionDirective>
                {stackedCustomSeries.map((item, index) => <SeriesDirective key={index} {...item}/>)}
            </SeriesCollectionDirective>
        </ChartComponent>
    )
}

export default Stacked
