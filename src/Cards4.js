import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

// Hardcoded data as per requirements
const barData1 = [
  { date: '01-01-2025', Mobile: 80, Desktop: 100 },
  { date: '01-02-2025', Mobile: 70, Desktop: 90 },
  { date: '01-03-2025', Mobile: 60, Desktop: 70 },
  { date: '01-04-2025', Mobile: 85, Desktop: 95 },
  { date: '01-05-2025', Mobile: 80, Desktop: 100 }
];

const barData2 = [
  { date: '01-01-2025', Mobile: 80, Desktop: 100 },
  { date: '01-02-2025', Mobile: 70, Desktop: 90 },
  { date: '01-03-2025', Mobile: 60, Desktop: 70 },
  { date: '01-04-2025', Mobile: 85, Desktop: 95 },
  { date: '01-05-2025', Mobile: 80, Desktop: 100 }
];

const pieData1 = [
  { name: 'Jan', value: 18000 },
  { name: 'Feb', value: 28000 },
  { name: 'Mar', value: 12000 },
  { name: 'Apr', value: 22000 },
  { name: 'May', value: 20000 }
];

const pieData2 = [
  { name: 'Jan', value: 18000 },
  { name: 'Feb', value: 28000 },
  { name: 'Mar', value: 12000 },
  { name: 'Apr', value: 22000 },
  { name: 'May', value: 20000 }
];

// Colors for pie chart slices (shades of purple to match design)
const PIE_COLORS = ['#A5B4FC', '#818CF8', '#6366F1', '#4F46E5', '#4338CA'];

const Cards4 = () => {
  return (
    <div style={{
      padding: '60px',
      backgroundColor: '#ffffff'
    }}>
      <div style={{ marginBottom: '30px' }}>
        <h1 style={{ 
          fontSize: '24px', 
          fontWeight: '600', 
          color: '#000000', 
          marginBottom: '8px' 
        }}>
          Sales Analytics
        </h1>
        <p style={{ 
          fontSize: '14px', 
          color: '#666666' 
        }}>
          Overview of sales performance by device and revenue distribution
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr 1fr',
        gap: '40px',
        alignItems: 'start'
      }}>
        {/* Top Left - Sale By Device (Bar Chart) */}
        <div style={{
          backgroundColor: '#ffffff',
          padding: '20px',
          borderRadius: '8px',
          border: '1px solid #e0e0e0'
        }}>
          <h2 style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#000000',
            marginBottom: '20px'
          }}>
            Sale By Device
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={barData1}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              barSize={20}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="date" 
                tick={{ fontSize: 12, fill: '#666' }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis 
                tick={{ fontSize: 12, fill: '#666' }}
                axisLine={false}
                tickLine={false}
                domain={[0, 120]}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e0e0e0',
                  borderRadius: '4px',
                  padding: '8px',
                  fontSize: '12px'
                }}
                formatter={(value) => `${value}`}
              />
              <Legend 
                verticalAlign="top" 
                align="right"
                iconType="circle"
                iconSize={8}
                wrapperStyle={{ fontSize: '12px', color: '#666' }}
              />
              <Bar 
                dataKey="Mobile" 
                fill="#A5B4FC" 
                radius={[4, 4, 0, 0]} 
              />
              <Bar 
                dataKey="Desktop" 
                fill="#6366F1" 
                radius={[4, 4, 0, 0]} 
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Top Right - Sale By Device (Bar Chart) */}
        <div style={{
          backgroundColor: '#ffffff',
          padding: '20px',
          borderRadius: '8px',
          border: '1px solid #e0e0e0'
        }}>
          <h2 style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#000000',
            marginBottom: '20px'
          }}>
            Sale By Device
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={barData2}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              barSize={20}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="date" 
                tick={{ fontSize: 12, fill: '#666' }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis 
                tick={{ fontSize: 12, fill: '#666' }}
                axisLine={false}
                tickLine={false}
                domain={[0, 120]}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e0e0e0',
                  borderRadius: '4px',
                  padding: '8px',
                  fontSize: '12px'
                }}
                formatter={(value) => `${value}`}
              />
              <Legend 
                verticalAlign="top" 
                align="right"
                iconType="circle"
                iconSize={8}
                wrapperStyle={{ fontSize: '12px', color: '#666' }}
              />
              <Bar 
                dataKey="Mobile" 
                fill="#A5B4FC" 
                radius={[4, 4, 0, 0]} 
              />
              <Bar 
                dataKey="Desktop" 
                fill="#6366F1" 
                radius={[4, 4, 0, 0]} 
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Bottom Left - Revenue Contribution (Pie Chart) */}
        <div style={{
          backgroundColor: '#ffffff',
          padding: '20px',
          borderRadius: '8px',
          border: '1px solid #e0e0e0'
        }}>
          <h2 style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#000000',
            marginBottom: '20px'
          }}>
            Revenue Contribution
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData1}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={0}
                dataKey="value"
              >
                {pieData1.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e0e0e0',
                  borderRadius: '4px',
                  padding: '8px',
                  fontSize: '12px'
                }}
                formatter={(value) => `₹${value.toLocaleString('en-IN')}`}
              />
              <Legend 
                verticalAlign="top" 
                align="right"
                iconType="circle"
                iconSize={8}
                wrapperStyle={{ fontSize: '12px', color: '#666' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bottom Right - Revenue Contribution (Pie Chart) */}
        <div style={{
          backgroundColor: '#ffffff',
          padding: '20px',
          borderRadius: '8px',
          border: '1px solid #e0e0e0'
        }}>
          <h2 style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#000000',
            marginBottom: '20px'
          }}>
            Revenue Contribution
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData2}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={0}
                dataKey="value"
              >
                {pieData2.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e0e0e0',
                  borderRadius: '4px',
                  padding: '8px',
                  fontSize: '12px'
                }}
                formatter={(value) => `₹${value.toLocaleString('en-IN')}`}
              />
              <Legend 
                verticalAlign="top" 
                align="right"
                iconType="circle"
                iconSize={8}
                wrapperStyle={{ fontSize: '12px', color: '#666' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Cards4;