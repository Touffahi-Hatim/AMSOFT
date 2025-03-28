import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { NetworkStats } from "@/components/network-stats"
import { MonitoringCharts } from "@/components/monitoring-charts"

export default function MonitoringPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">Monitoring</h1>
      <p className="text-muted-foreground">Visualisez les statistiques et performances de votre réseau</p>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
          <TabsTrigger value="traffic">Trafic</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="security">Sécurité</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Aperçu du monitoring</CardTitle>
              <CardDescription>Statistiques générales de votre réseau</CardDescription>
            </CardHeader>
            <CardContent>
              <MonitoringCharts />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="traffic" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Analyse du trafic</CardTitle>
              <CardDescription>Détails du trafic réseau par VNET et Subnet</CardDescription>
            </CardHeader>
            <CardContent>
              <NetworkStats type="traffic" />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Métriques de performance</CardTitle>
              <CardDescription>Latence, bande passante et autres métriques</CardDescription>
            </CardHeader>
            <CardContent>
              <NetworkStats type="performance" />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Métriques de sécurité</CardTitle>
              <CardDescription>Tentatives de connexion, trafic bloqué et autres métriques</CardDescription>
            </CardHeader>
            <CardContent>
              <NetworkStats type="security" />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

