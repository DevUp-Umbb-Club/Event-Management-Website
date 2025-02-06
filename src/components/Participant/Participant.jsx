import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';

function Participant() {
  const data = [
    { name: 'DevUp Hackathon', value: 25 },
    { name: 'Open Day', value: 45 }, 
    { name: 'DevLab', value: 30 },
  ];

  const COLORS = ['#00C49F',  '#7209b7' , '#4cc9f0'];

  
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, index }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) / 2; // Position inside the slice
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="12"
      >
        {` ${data[index].value}%`} 
      </text>
    );
  };

  return (
    <div >
      <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Event with Most Participants</h2>
      <PieChart width={400} height={500}>
       
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel} 
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
       
        <Legend
          layout="vertical" 
          verticalAlign="middle" 
          align="right" 
          iconType="square" 
          payload={data.map((entry, index) => ({
            id: entry.name,
            type: 'square',
            value: `${entry.name}`,
            color: COLORS[index % COLORS.length],
          }))}
        />
      </PieChart>
    </div>
  );
}

export default Participant;
