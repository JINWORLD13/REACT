import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const datahigh = [
  {name: "강남구" , 행복지수: 6.53}, {name: "송파구" , 행복지수: 6.45}, {name: "광진구" , 행복지수: 6.38},
  {name: "노원구" , 행복지수: 6.38}, {name: "서초구" , 행복지수: 6.38}
];

export default function HappinessHigh() {
  return (
    <BarChart
      width={500}
      height={300}
      data={datahigh}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="2 1" />
      <XAxis dataKey="name" stroke = "black"/>
      <YAxis/>
      <Tooltip />
      <Legend />
      <Bar dataKey="행복지수" fill="Purple" barsize = {100} />
    </BarChart>
  );
}
