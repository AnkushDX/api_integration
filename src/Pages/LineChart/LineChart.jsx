import React from "react";
import Chart from "react-apexcharts";
import Style from "../LineChart/LineChart.module.css"
const LineChart = () => {
  return (
    <>
      <h3 className={Style.H3}>Line Chart</h3>
      <div className={`container ${Style.lineBox}`}>
        <Chart className={Style.charbox}
          type="area"
         
          series={[
            {
              name: "I-phone",
              data: [0, 10,20,14,30,35,25,40,43,38],
            },
            {
              name: "Sumsung",
              data: [15,20,30,24,40,45,35,50,53,48],
            },
          ]}
          options={{
            title: {
              text: "Product sell in 2024",
              style: { fontSize: 20, fontWeight: "bold" },
            },
            stroke: {
              width: 2,
              curve: "smooth",
            },
            xaxis: {
              categories: [
                "Jan","Feb","Mar","Apr","May","Jun",
                "Jul","Aug","Sep","Oct","Nov","Dec",
              ],
            },
            yaxis: {
                labels:{
                    formatter:(val)=>{return `$${val}`},
                },
              title: {
                text: "Product sell in (k)",
              },
            },
            dataLabels: {
                enabled: false,
              },
            fill: {
                type: 'gradient',
                gradient: {
                  opacityFrom: 0.6,
                  opacityTo: 0.2,
                }
              },
          }}
        ></Chart>
      </div>
    </>
  );
};

export default LineChart;
