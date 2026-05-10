"use client";

import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell,
  Line,
  ComposedChart,
  Legend
} from 'recharts';
import { presentationData } from '../data/presentationData';

const Funding = () => {
  const { funding } = presentationData;

  return (
    <section className="py-24 px-6 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{funding.title}</h2>
          <p className="text-white/70 max-w-3xl mx-auto">{funding.description}</p>
        </div>

        <div className="glass-card p-8 mb-12">
          <div className="h-[450px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={funding.chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                <XAxis 
                  dataKey="date" 
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
                  label={{ value: 'Saldo (US$ Bi)', angle: -90, position: 'insideLeft', fill: '#ffffff80', fontSize: 12 }}
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
                <Bar yAxisId="left" dataKey="balance" name="Saldo Vigente (Bi)" fill="#FCEB00" radius={[4, 4, 0, 0]} barSize={40} />
                <Line yAxisId="right" type="monotone" dataKey="clients" name="Clientes Ativos" stroke="#005aa5" strokeWidth={3} dot={{ r: 6, fill: '#005aa5', strokeWidth: 2, stroke: '#fff' }} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold text-white mb-6 uppercase tracking-wider text-sm opacity-60">Trading Companies</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
            {funding.clients.map((client, index) => (
              <span 
                key={index}
                className="px-6 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-200 hover:border-bb-yellow hover:text-bb-yellow transition-all duration-300"
              >
                {client}
              </span>
            ))}
          </div>
          <p className="text-white/40 text-xs mt-12 italic">
            {funding.note}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Funding;
