import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import { runs } from "./data";

const aspectCounts = Object.values(
  runs.reduce((acc, obj) => {
    const key = obj.aspect;
    if (!acc[key]) {
      acc[key] = { name: key, length: 0 };
    }
    acc[key].length += 1;
    return acc;
  }, {})
);

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black text-white p-2 rounded shadow font-[Geist-Regular]">
        <p className="font-bold">{label}</p>
        <p>{`count: ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

export default function BarRechart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={aspectCounts} layout="vertical" margin={{ left: 20 }}>
        <Tooltip content={<CustomTooltip />} />
        <XAxis type="number" stroke="white" />
        <YAxis dataKey="name" type="category" stroke="white" />
        <Bar dataKey="length" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}
