import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto';
import Style from '../Charts/PieChart.module.css'
const PieChart = () => {
  const chartRef= useRef(null);
  const chartInstance= useRef(null);
  useEffect (()=>{
    if (chartInstance.current){
      chartInstance.current.destroy()
    }
    const myChartRef= chartRef.current.getContext('2d');
    chartInstance.current = new Chart(myChartRef,{
      type: 'pie',
      data:{
        labels:['Label 1','Label 2','Label 3'],
        datasets:[
          {
            data:[300,50,100],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
            ]
          }
        ]
      }
    })
    return()=>{
      if (chartInstance.current){
        chartInstance.current.destroy()
      }
    }
  },[])
  return (
  <>
  <div className={`container ${Style.box}`}>
  <h1 className={Style.h1}>PieChart</h1>
  <div className={Style.piechart}>
     <canvas  ref={chartRef} />
    </div>
  </div>
  </>
  )
}

export default PieChart
