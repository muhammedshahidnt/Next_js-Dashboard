"use client"
import React from 'react'
import styles from './chart.module.css'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const data = [
  {
    name: 'Page A',
    visit: 4000,
    click: 2400,
  },
  {
    name: 'Page B',
    visit: 3000,
    click: 1398,
  },
  {
    name: 'Page C',
    visit: 2000,
    click: 9800,
  },
  {
    name: 'Page D',
    visit: 2780,
    click: 3908,
  },
  {
    name: 'Page E',
    visit: 1890,
    click: 4800,
  },

];

const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weekly Rrcap</h2>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="visit" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="click" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart