// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend
// } from "recharts";
// import { hospitalsApi } from "../../../api/api";


// let hospitalsData = hospitalsApi.getData('../../../data.json');
// let hospitalsHigh = [];
// for (let key in hospitalsData) {
//   const name = key;
//   const 병원수 = hospitalsData[key].병원수;
//   hospitalsHigh.push({name, 병원수});
// }
// hospitalsHigh.sort((b, a) => a.병원수 - b.병원수)
// hospitalsHigh = hospitalsHigh.slice(0, 5);
// console.log(HospitalHigh)

// export default function HospitalHigh() {
//   return (
//       <BarChart
//         width={500}
//         height={300}
//         data={hospitalsHigh}
//         margin={{
//           top: 5,
//           right: 30,
//           left: 20,
//           bottom: 5
//         }}
//       >
//         <CartesianGrid strokeDasharray="2 1" />
//         <XAxis dataKey="name" stroke = "black"/>
//         <YAxis dataKey="병원수"/>
//         <Tooltip />
//         <Legend />
//         <Bar dataKey="병원수" fill="Purple" barsize = {10}/>
//       </BarChart>
//   );
// }
