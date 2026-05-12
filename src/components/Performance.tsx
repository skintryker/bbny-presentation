"use client";

import { presentationData } from "@/data/presentationData";
import { 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line, Bar, ComposedChart
} from "recharts";

export default function Performance() {
  const { performance } = presentationData;

  return (
    <section className="py-24 px-6 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{performance.title}</h2>
          <p className="text-white/70 max-w-3xl mx-auto">{performance.description}</p>
        </div>

        <div className="h-[280px] sm:h-[350px] md:h-[500px] w-full glass-card p-3 sm:p-4 md:p-8">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart 
              data={performance.chartData} 
              margin={{ top: 30, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
              <XAxis 
                dataKey="period" 
                stroke="#ffffff80" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                yAxisId="left"
                stroke="#ffffff80" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
                label={{ value: 'Investimentos (US$ Mi)', angle: -90, position: 'insideLeft', fill: '#ffffff80', fontSize: 12 }}
              />
              <YAxis 
                yAxisId="right" 
                orientation="right" 
                stroke="#ffffff80" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
                label={{ value: 'Clientes Ativos', angle: 90, position: 'insideRight', fill: '#ffffff80', fontSize: 12 }}
              />
              <Tooltip 
                contentStyle={{ backgroundColor: '#002d72', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                itemStyle={{ color: '#fff' }}
              />
              <Legend verticalAlign="top" height={36}/>
              <Bar 
                yAxisId="left" 
                dataKey="investments" 
                name="Volume Investimentos (Mi)" 
                fill="#FCEB00" 
                radius={[4, 4, 0, 0]} 
                barSize={40}
              />
              <Line 
                yAxisId="right" 
                type="monotone" 
                dataKey="clients" 
                name="Clientes Ativos" 
                stroke="#005aa5" 
                strokeWidth={3} 
                dot={{ r: 6, fill: '#005aa5', strokeWidth: 2, stroke: '#fff' }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        
        <p className="text-white/40 text-xs mt-8 text-center italic">
          {performance.note}
        </p>
      </div>
    </section>
  );
}
