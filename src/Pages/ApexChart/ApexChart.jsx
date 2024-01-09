import React from 'react'
import Chart from "react-apexcharts";
import Style from "../ApexChart/ApexChart.module.css"

const ApexChart = () => {
  return (
    <>
     <h3 className={Style.h3}>Bar Graph</h3>
    <div className={`container ${Style.apexBox}`}>
        <Chart type='bar' width={700} height={500} series={[
            {
                name:"Social Media Suscriber",
                data:[23,34,56,43,12,21,78]
            }
        ]}
        options={{
            title:{
                text:"Bar Details",
                style:{fontSize:30,fontWeight:100}
            },
            colors:['#f90000'],
            xaxis:{
                categories:["Facbook","Instagram","Twiter","YouTube","LinkedIn","Githup","Indeed"],
                title:{
                    text:"Social Media user",
                    style:{fontSize:30,fontWeight:100}
                }
            },
            yaxis:{
                labels:{
                    formatter:(val)=>{return `$${val}`},
                },
                title:{
                    text:"User in (K)",
                    style:{fontSize:20,fontWeight:600}
                }
            },  
            legend:{
                show:true,
                position:'left'    
            },
            dataLabels:{
                formatter:(val)=>{return `$${val}`}
            },
        }}
        >
            
        </Chart>
    </div>
    </>
  )
}

export default ApexChart
