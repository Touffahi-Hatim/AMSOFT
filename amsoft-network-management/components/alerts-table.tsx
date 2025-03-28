"use client"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, AlertTriangle, Info, Eye } from "lucide-react"

interface AlertsTableProps {
  status?: "active" | "resolved" | "all"
  type?: "alerts" | "logs"
}

export function AlertsTable({ status = "all", type = "alerts" }: AlertsTableProps) {
  // Données simulées pour les alertes
  const alerts = [
    {
      id: 1,
      title: "Trafic suspect détecté",
      resource: "VNET-PROD",
      severity: "high",
      time: "28/03/2023 14:25",
      status: "active",
    },
    {
      id: 2,
      title: "Latence élevée",
      resource: "APP-SUBNET-1",
      severity: "medium",
      time: "28/03/2023 12:45",
      status: "active",
    },
    {
      id: 3,
      title: "Règle NSG modifiée",
      resource: "NSG-PROD-SSH",
      severity: "low",
      time: "28/03/2023 09:30",
      status: "active",
    },
    {
      id: 4,
      title: "Tentative d'accès non autorisé",
      resource: "VNET-PROD",
      severity: "high",
      time: "27/03/2023 18:45",
      status: "resolved",
    },
    {
      id: 5,
      title: "Mise à jour de sécurité disponible",
      resource: "Système",
      severity: "info",
      time: "27/03/2023 14:30",
      status: "resolved",
    },
  ]

  // Données simulées pour les logs
  const logs = [
    {
      id: 1,
      message: "Connexion utilisateur admin@amsoft.fr",
      resource: "Système",
      type: "info",
      time: "28/03/2023 15:05",
    },
    {
      id: 2,
      message: "Création de subnet APP-SUBNET-2",
      resource: "VNET-PROD",
      type: "info",
      time: "28/03/2023 14:50",
    },
    {
      id: 3,
      message: "Modification règle NSG-PROD-HTTP",
      resource: "NSG-PROD-APP",
      type: "warning",
      time: "28/03/2023 13:25",
    },
    {
      id: 4,
      message: "Tentative d'accès bloquée port 22",
      resource: "VNET-PROD",
      type: "error",
      time: "28/03/2023 11:15",
    },
    {
      id: 5,
      message: "Sauvegarde automatique effectuée",
      resource: "Système",
      type: "info",
      time: "28/03/2023 00:00",
    },
  ]

  // Filtrer les alertes selon le statut
  const filteredAlerts = status === "all" ? alerts : alerts.filter((alert) => alert.status === status)

  if (type === "logs") {
    return (
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Message</TableHead>
              <TableHead>Ressource</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Date/Heure</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {logs.map((log) => (
              <TableRow key={log.id}>
                <TableCell className="font-medium">{log.message}</TableCell>
                <TableCell>{log.resource}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    {log.type === "error" && <AlertCircle className="h-4 w-4 text-red-500 mr-2" />}
                    {log.type === "warning" && <AlertTriangle className="h-4 w-4 text-amber-500 mr-2" />}
                    {log.type === "info" && <Info className="h-4 w-4 text-blue-500 mr-2" />}
                    {log.type}
                  </div>
                </TableCell>
                <TableCell>{log.time}</TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Alerte</TableHead>
            <TableHead>Ressource</TableHead>
            <TableHead>Sévérité</TableHead>
            <TableHead>Date/Heure</TableHead>
            <TableHead>Statut</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredAlerts.map((alert) => (
            <TableRow key={alert.id}>
              <TableCell className="font-medium">{alert.title}</TableCell>
              <TableCell>{alert.resource}</TableCell>
              <TableCell>
                <div className="flex items-center">
                  {alert.severity === "high" && <AlertCircle className="h-4 w-4 text-red-500 mr-2" />}
                  {alert.severity === "medium" && <AlertTriangle className="h-4 w-4 text-amber-500 mr-2" />}
                  {alert.severity === "low" && <Info className="h-4 w-4 text-blue-500 mr-2" />}
                  {alert.severity === "info" && <Info className="h-4 w-4 text-gray-500 mr-2" />}
                  {alert.severity}
                </div>
              </TableCell>
              <TableCell>{alert.time}</TableCell>
              <TableCell>
                <Badge variant={alert.status === "active" ? "destructive" : "outline"}>
                  {alert.status === "active" ? "Active" : "Résolue"}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                  {alert.status === "active" && (
                    <Button variant="outline" size="sm">
                      Résoudre
                    </Button>
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

