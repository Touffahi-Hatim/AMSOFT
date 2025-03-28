"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "@/components/ui/chart"

export function ResourcesOverview() {
  // Données simulées pour les ressources
  const vnetData = [
    { name: "VNET-PROD", value: 4 },
    { name: "VNET-DEV", value: 3 },
    { name: "VNET-TEST", value: 2 },
    { name: "VNET-STAGING", value: 3 },
  ]

  const subnetData = [
    { name: "APP-SUBNET", value: 12 },
    { name: "DB-SUBNET", value: 8 },
    { name: "WEB-SUBNET", value: 10 },
    { name: "MGMT-SUBNET", value: 6 },
  ]

  const COLORS = ["#4E88C8", "#82ca9d", "#ffc658", "#8884d8", "#ff8042"]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="h-64">
        <h3 className="text-sm font-medium text-center mb-2">Distribution des VNETs</h3>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={vnetData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {vnetData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="h-64">
        <h3 className="text-sm font-medium text-center mb-2">Distribution des Subnets</h3>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={subnetData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {subnetData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

