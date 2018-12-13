import React from 'react';
import { ResponsiveBarCanvas } from '@nivo/bar'

// make sure parent container have a defined height when using responsive component,
// otherwise height will be 0 and no chart will be rendered.
// website examples showcase many properties, you'll often use just a few of them.
class ChartOne extends React.Component{
    render = () => {
        return(
        <div>
        <ResponsiveBarCanvas
            data={[
                {
                  "country": "AD",
                  "hot dog": 38,
                  "hot dogColor": "hsl(22, 70%, 50%)",
                  "burger": 16,
                  "burgerColor": "hsl(249, 70%, 50%)"
                },
                {
                    "country": "AD",
                    "hot dog": 38,
                    "hot dogColor": "hsl(22, 70%, 50%)",
                    "burger": 16,
                    "burgerColor": "hsl(249, 70%, 50%)"
                },
                {
                    "country": "AD",
                    "hot dog": 38,
                    "hot dogColor": "hsl(22, 70%, 50%)",
                    "burger": 16,
                    "burgerColor": "hsl(249, 70%, 50%)"
                }
            ]}
            keys={[
                "hot dog",
                "burger"
            ]}
            indexBy="country"
            margin={{
                "top": 50,
                "right": 60,
                "bottom": 50,
                "left": 60
            }}
            pixelRatio={1.25}
            padding={0.15}
            innerPadding={0}
            minValue="auto"
            maxValue="auto"
            groupMode="stacked"
            layout="horizontal"
            reverse={false}
            colors="paired"
            colorBy="id"
            borderWidth={0}
            axisTop={{
                "tickSize": 5,
                "tickPadding": 5,
                "tickRotation": 0,
                "legend": "",
                "legendOffset": 36
            }}
            axisBottom={{
                "tickSize": 5,
                "tickPadding": 5,
                "tickRotation": 0,
                "legend": "country",
                "legendPosition": "center",
                "legendOffset": 36
            }}
            axisLeft={{
                "tickSize": 5,
                "tickPadding": 5,
                "tickRotation": 0,
                "legend": "food",
                "legendPosition": "center",
                "legendOffset": -40
            }}
            enableGridX={false}
            enableGridY={true}
            enableLabel={true}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor="inherit:darker(1.6)"
            isInteractive={true}
        /></div>)
    }
}

export default ChartOne;