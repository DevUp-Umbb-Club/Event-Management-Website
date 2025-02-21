import './Effectifstat.css';
import {
    RadialBarChart,
    RadialBar,
    Legend,
    PolarRadiusAxis,
    PolarAngleAxis,
    ResponsiveContainer,
  } from "recharts";

  const data = [
    { name: "Design Team", effectif: 20, fill: "#4879F5" },
    { name: "Dev Team", effectif: 40, fill: "#44D2F1" },
    { name: "HR Team", effectif: 15, fill: "#20C745" },
    { name: "O&O Team", effectif: 25, fill: "#F4A74B" },
    { name: "Marketing Team", effectif: 15, fill: "#F45252" },
  ];
  

const style = {
  top: 100,
  left: 150,
  lineHeight: "35px",
};

const Effectifstat = () => {
  return (
    <div class='effstat'>
    <RadialBarChart
    width={700}
    height={300}
    cx="70%"
    cy="60%"
    innerRadius="20%"
    outerRadius="70%"
    barSize={7}
    data={data}
  >
    <RadialBar
 
      background
      clockWise
      cornerRadius={10}
      dataKey="effectif"
    />
    <text class='center'
        x="70%"
        y="60%" 
        textAnchor="middle" 
        dominantBaseline="middle" 
        fontSize={14}
        fill="#808191" 
      >
        100%
      </text>

      <text class='title'
        x="31%" 
        y="28%" 
        textAnchor="middle" 
        fontSize={19} 
        fill="#333" 
      >
        Club Effectif
      </text>
      
    <Legend
      iconSize={10}
      layout="vertical"
      verticalAlign="middle"
      wrapperStyle={style}
      iconType="circle"
    />
  </RadialBarChart>
  </div>
    );
  }

export default Effectifstat;
