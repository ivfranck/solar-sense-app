import React from 'react';
import {
    ChartComponent,
    SeriesCollectionDirective,
    SeriesDirective,
    Inject,
    LineSeries,
    DateTime,
    Legend,
    Tooltip,
    Category
} from '@syncfusion/ej2-react-charts';

import {
    lineCustomSeries,
    LinePrimaryXAxis,
    LinePrimaryYAxis,
    lineChartForecastedData,
    tempData,
    tempData2,
    tempData3,
    lineChartForecastedDataRec, stackedCustomSeries, lineCustomSeriesRec
} from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import {DataLabel} from "@syncfusion/ej2-maps";

const LineChartRec = () => {
    const { currentMode, dataToDisplay } = useStateContext();

    return (
        <ChartComponent
            id="line-chart"
            height="420px"
            primaryXAxis={LinePrimaryXAxis}
            primaryYAxis={LinePrimaryYAxis}
            chartArea={{ border: { width: 0 } }}
            tooltip={{ enable: true }}
            background={currentMode === 'Dark' ? '#33373E' : '#fff'}
            legendSettings={{ background: 'white' }}
        >
            <Inject services={[LineSeries, DateTime, Legend, Category, Tooltip, DataLabel]} />
            <SeriesCollectionDirective>

                <SeriesDirective dataSource={dataToDisplay} xName='x' yName='y' width={2} type='Line' name="Actual">
                </SeriesDirective>

                <SeriesDirective dataSource={lineChartForecastedData} xName='x' yName='y' width={2} type='Line' name="Forecasted">
                </SeriesDirective>

                <SeriesDirective dataSource={lineChartForecastedDataRec} xName='x' yName='y' width={2} type='Line' name="Our pick">
                </SeriesDirective>
            </SeriesCollectionDirective>
        </ChartComponent>
    );
};

export default LineChartRec;