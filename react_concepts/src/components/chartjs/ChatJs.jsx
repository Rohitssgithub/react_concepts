import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from "axios";
import { Pie, Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import { Line } from 'react-chartjs-2';


const ChatJs = () => {
    const [chartData, setChartData] = useState([]);

    let getData = async () => {
        let data = await axios.get('https://api.coinranking.com/v2/coins')
        console.log('data', data)
        setChartData(data.data.data.coins)
    }
    console.log('chartData', chartData)
    useEffect(() => {
        getData()
    }, [])

    const state = {
        labels: chartData.map((ele) => ele.name),
        datasets: [
            {
                label: 'Coins',
                data: chartData.map((ele) => ele.price),
                backgroundColor: [
                    '#B21F00',
                    '#C9DE00',
                    '#2FDE00',
                    '#00A6B4',
                    '#6800B4'
                ],
                hoverBackgroundColor: [
                    '#501800',
                    '#4B5000',
                    '#175000',
                    '#003350',
                    '#35014F'
                ],
            }
        ]
    }


    return (
        <>
            <Bar data={state} options={{
                title: {
                    display: true,
                    text: 'Coins Data',
                    fontSize: 20
                },
                legend: {
                    display: true,
                    position: 'right'
                },
                scales: {
                    y: {
                        beginAtZero: true, // Start the y-axis scale at 0
                        max: 100, // Set the maximum value of the y-axis
                        stepSize: 10, // Define the step size between ticks
                    },
                },
            }} />
            <Line
                data={state} options={{
                    title: {
                        display: true,
                        text: 'Coins Data',
                        fontSize: 20
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    },
                    scales: {
                        y: {
                          beginAtZero: true, // Start the y-axis scale at 0
                          max: 500, // Set the maximum value of the y-axis
                          stepSize: 10, // Define the step size between ticks
                        },
                      },
                }}
            />
            {/* <Pie
                data={state}
                options={{
                    title: {
                        display: true,
                        text: 'Average Rainfall per month',
                        fontSize: 20
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                }}
            /> */}

        </>
    )
}

export default ChatJs