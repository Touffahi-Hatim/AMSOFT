"use client"

import { Card } from "@/components/ui/card"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "@/components/ui/chart"

interface NetworkStatsProps {
  type?: "traffic" | "performance" | "security"
}

export function NetworkStats({ type = "traffic" }: NetworkStatsProps) {
  // Données simulées pour les graphiques
  const trafficData = [
    { name: "00:00", inbound: 4000, outbound: 2400 },
    { name: "04:00", inbound: 3000, outbound: 1398 },
    { name: "08:00", inbound: 2000, outbound: 9800 },
    { name: "12:00", inbound: 2780, outbound: 3908 },
    { name: "16:00", inbound: 1890, outbound: 4800 },
    { name: "20:00", inbound: 2390, outbound: 3800 },
    { name: "24:00", inbound: 3490, outbound: 4300 },
  ]

  const performanceData = [
    { name: "VNET1", latency: 15, bandwidth: 85 },
    { name: "VNET2", latency: 12, bandwidth: 92 },
    { name: "VNET3", latency: 25, bandwidth: 78 },
    { name: "VNET4", latency: 8, bandwidth: 95 },
  ]

  const securityData = [
    { name: "Lun", blocked: 120, suspicious: 45, allowed: 980 },
    { name: "Mar", blocked: 85, suspicious: 32, allowed: 1020 },
    { name: "Mer", blocked: 95, suspicious: 28, allowed: 1150 },
    { name: "Jeu", blocked: 130, suspicious: 52, allowed: 990 },
    { name: "Ven", blocked: 75, suspicious: 25, allowed: 1050 },
    { name: "Sam", blocked: 45, suspicious: 12, allowed: 780 },
    { name: "Dim", blocked: 30, suspicious: 8, allowed: 650 },
  ]

  if (type === "traffic") {
    return (
      <div className="space-y-4">
        <Card className="p-4">
          <h3 className="text-lg font-medium mb-4">Trafic réseau (24h)</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trafficData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="inbound"
                  stackId="1"
                  stroke="#4E88C8"
                  fill="#4E88C8"
                  name="Trafic entrant (MB)"
                />
                <Area
                  type="monotone"
                  dataKey="outbound"
                  stackId="1"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                  name="Trafic sortant (MB)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    )
  }

  if (type === "performance") {
    return (
      <div className="space-y-4">
        <Card className="p-4">
          <h3 className="text-lg font-medium mb-4">Performance par VNET</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="latency" fill="#ff8042" name="Latence (ms)" />
                <Bar dataKey="bandwidth" fill="#4E88C8" name="Bande passante (Mbps)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    )
  }

  if (type === "security") {
    return (
      <div className="space-y-4">
        <Card className="p-4">
          <h3 className="text-lg font-medium mb-4">Statistiques de sécurité (7 jours)</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={securityData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="blocked" stackId="a" fill="#ff0000" name="Trafic bloqué" />
                <Bar dataKey="suspicious" stackId="a" fill="#ffcc00" name="Trafic suspect" />
                <Bar dataKey="allowed" stackId="a" fill="#00cc00" name="Trafic autorisé" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    )
  }

  return null
}

