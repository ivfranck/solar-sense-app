import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Export, Inject, LineSeries, DateTime, Legend, Tooltip } from '@syncfusion/ej2-react-charts';

import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis, lineChartForecastedData, tempData, tempData2, tempData3} from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const LineChart = () => {
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
            <Inject services={[LineSeries, DateTime, Legend, Tooltip, Export]} />
            <SeriesCollectionDirective>
                <SeriesDirective dataSource={lineChartForecastedData} xName='x' yName='y' width={2} type='Line'>
                </SeriesDirective>

                {/*<SeriesDirective dataSource={lineCustomSeries[0].dataSource} xName='x' yName='y' width={2} type='Line'>*/}
                <SeriesDirective dataSource={dataToDisplay} xName='x' yName='y' width={2} type='Line'>
                </SeriesDirective>
            </SeriesCollectionDirective>
        </ChartComponent>
    );
};

export default LineChart;