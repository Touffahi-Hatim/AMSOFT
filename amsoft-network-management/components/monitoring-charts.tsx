"use client"

import { Card } from "@/components/ui/card"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "@/components/ui/chart"

export function MonitoringCharts() {
  // Données simulées pour les graphiques
  const cpuData = [
    { time: "00:00", vnet1: 30, vnet2: 20, vnet3: 15 },
    { time: "04:00", vnet1: 25, vnet2: 18, vnet3: 12 },
    { time: "08:00", vnet1: 45, vnet2: 35, vnet3: 28 },
    { time: "12:00", vnet1: 65, vnet2: 55, vnet3: 48 },
    { time: "16:00", vnet1: 70, vnet2: 60, vnet3: 52 },
    { time: "20:00", vnet1: 50, vnet2: 40, vnet3: 32 },
    { time: "24:00", vnet1: 35, vnet2: 25, vnet3: 18 },
  ]

  const memoryData = [
    { time: "00:00", vnet1: 40, vnet2: 30, vnet3: 25 },
    { time: "04:00", vnet1: 35, vnet2: 28, vnet3: 22 },
    { time: "08:00", vnet1: 55, vnet2: 45, vnet3: 38 },
    { time: "12:00", vnet1: 75, vnet2: 65, vnet3: 58 },
    { time: "16:00", vnet1: 80, vnet2: 70, vnet3: 62 },
    { time: "20:00", vnet1: 60, vnet2: 50, vnet3: 42 },
    { time: "24:00", vnet1: 45, vnet2: 35, vnet3: 28 },
  ]

  return (
    <div className="space-y-6">
      <Card className="p-4">
        <h3 className="text-lg font-medium mb-4">Utilisation CPU (%)</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={cpuData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="vnet1" stroke="#4E88C8" name="VNET-PROD" />
              <Line type="monotone" dataKey="vnet2" stroke="#82ca9d" name="VNET-DEV" />
              <Line type="monotone" dataKey="vnet3" stroke="#ffc658" name="VNET-TEST" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card className="p-4">
        <h3 className="text-lg font-medium mb-4">Utilisation Mémoire (%)</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={memoryData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="vnet1" stroke="#4E88C8" name="VNET-PROD" />
              <Line type="monotone" dataKey="vnet2" stroke="#82ca9d" name="VNET-DEV" />
              <Line type="monotone" dataKey="vnet3" stroke="#ffc658" name="VNET-TEST" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  )
}

