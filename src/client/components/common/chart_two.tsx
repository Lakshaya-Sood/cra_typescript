import React, { Component } from 'react';

import { ResponsivePie, PieDatum } from '@nivo/pie';

const data = [
  {
    "id": "haskell",
    "label": "haskell",
    "value": 68,
    "color": "hsl(81, 70%, 50%)"
  },
  {
    "id": "make",
    "label": "make",
    "value": 306,
    "color": "hsl(114, 70%, 50%)"
  },
  {
    "id": "ruby",
    "label": "ruby",
    "value": 580,
    "color": "hsl(330, 70%, 50%)"
  },
  {
    "id": "python",
    "label": "python",
    "value": 318,
    "color": "hsl(179, 70%, 50%)"
  },
  {
    "id": "stylus",
    "label": "stylus",
    "value": 440,
    "color": "hsl(193, 70%, 50%)"
  }
],
defs = [
  {
      "id": "dots",
      "type": "patternDots",
      "background": "inherit",
      "color": "rgba(255, 255, 255, 0.3)",
      "size": 4,
      "padding": 1,
      "stagger": true
  },
  {
      "id": "lines",
      "type": "patternLines",
      "background": "inherit",
      "color": "rgba(255, 255, 255, 0.3)",
      "rotation": -45,
      "lineWidth": 6,
      "spacing": 10
  }
],
fill = [
  {
      "match": {
          "id": "ruby"
      },
      "id": "dots"
  },
  {
      "match": {
          "id": "c"
      },
      "id": "dots"
  },
  {
      "match": {
          "id": "go"
      },
      "id": "dots"
  },
  {
      "match": {
          "id": "python"
      },
      "id": "dots"
  },
  {
      "match": {
          "id": "scala"
      },
      "id": "lines"
  },
  {
      "match": {
          "id": "lisp"
      },
      "id": "lines"
  },
  {
      "match": {
          "id": "elixir"
      },
      "id": "lines"
  },
  {
      "match": {
          "id": "javascript"
      },
      "id": "lines"
  }
];

class ChartTwo extends React.Component {
    render = () => {
        console.log("hello")
        return(
            <div className={'drill-down '}>
            <ResponsivePie
                data={data}
                margin={{
                "top": 40,
                "right": 80,
                "bottom": 80,
                "left": 80
                }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                colors="nivo"
                colorBy="id"
                borderWidth={1}
                borderColor="inherit:darker(0.2)"
                radialLabelsSkipAngle={10}
                radialLabelsTextXOffset={6}
                radialLabelsTextColor="#333333"
                radialLabelsLinkOffset={0}
                radialLabelsLinkDiagonalLength={16}
                radialLabelsLinkHorizontalLength={24}
                radialLabelsLinkStrokeWidth={1}
                radialLabelsLinkColor="inherit"
                slicesLabelsSkipAngle={10}
                slicesLabelsTextColor="#333333"
                animate={true}
                motionStiffness={90}
                motionDamping={15}
                defs={defs}
                fill={fill}
                legends={[
                {
                    "anchor": "bottom",
                    "direction": "row",
                    "translateY": 56,
                    "itemWidth": 100,
                    "itemHeight": 18,
                    "itemTextColor": "#999",
                    "symbolSize": 18,
                    "symbolShape": "circle",
                    "effects": [
                        {
                            "on": "hover",
                            "style": {
                                "itemTextColor": "#000"
                            }
                        }
                    ]
                }
                ]}
                isInteractive = {true}
            />
            </div>
        )
    }
}

export default ChartTwo; 