import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertCircle, AlertTriangle, Info } from "lucide-react"

interface RecentAlertsProps {
  showAll?: boolean
}

export function RecentAlerts({ showAll = false }: RecentAlertsProps) {
  // Données simulées pour les alertes
  const alerts = [
    {
      id: 1,
      title: "Trafic suspect détecté",
      description: "Trafic suspect détecté sur VNET-PROD depuis l'adresse IP 203.0.113.45",
      severity: "high",
      time: "Il y a 35 minutes",
      status: "active",
    },
    {
      id: 2,
      title: "Latence élevée",
      description: "Latence anormalement élevée sur le subnet APP-SUBNET-1",
      severity: "medium",
      time: "Il y a 2 heures",
      status: "active",
    },
    {
      id: 3,
      title: "Règle NSG modifiée",
      description: "La règle NSG-PROD-SSH a été modifiée par admin@amsoft.fr",
      severity: "low",
      time: "Il y a 5 heures",
      status: "active",
    },
    {
      id: 4,
      title: "Tentative d'accès non autorisé",
      description: "Tentative d'accès non autorisé bloquée sur le port 22",
      severity: "high",
      time: "Hier, 18:45",
      status: "resolved",
    },
    {
      id: 5,
      title: "Mise à jour de sécurité disponible",
      description: "Nouvelle mise à jour de sécurité disponible pour votre infrastructure",
      severity: "info",
      time: "Hier, 14:30",
      status: "resolved",
    },
  ]

  // Filtrer les alertes si showAll est false
  const displayedAlerts = showAll ? alerts : alerts.filter((alert) => alert.status === "active")

  return (
    <div className="space-y-4">
      {displayedAlerts.map((alert) => (
        <div key={alert.id} className="flex items-start space-x-4 p-3 rounded-md border">
          <div className="flex-shrink-0 mt-0.5">
            {alert.severity === "high" && <AlertCircle className="h-5 w-5 text-red-500" />}
            {alert.severity === "medium" && <AlertTriangle className="h-5 w-5 text-amber-500" />}
            {alert.severity === "low" && <Info className="h-5 w-5 text-blue-500" />}
            {alert.severity === "info" && <Info className="h-5 w-5 text-gray-500" />}
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">{alert.title}</p>
              <Badge variant={alert.status === "active" ? "destructive" : "outline"}>
                {alert.status === "active" ? "Active" : "Résolue"}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">{alert.description}</p>
            <div className="flex items-center justify-between">
              <p className="text-xs text-muted-foreground">{alert.time}</p>
              {alert.status === "active" && (
                <Button variant="outline" size="sm">
                  Résoudre
                </Button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

