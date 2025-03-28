import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { NetworkStats } from "@/components/network-stats"
import { RecentAlerts } from "@/components/recent-alerts"
import { ResourcesOverview } from "@/components/resources-overview"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">Tableau de bord</h1>
      <p className="text-muted-foreground">Bienvenue sur votre interface de gestion de réseau Amsoft.</p>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
          <TabsTrigger value="analytics">Analytiques</TabsTrigger>
          <TabsTrigger value="alerts">Alertes</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">VNETs Actifs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">+2 depuis le mois dernier</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Subnets</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">36</div>
                <p className="text-xs text-muted-foreground">+8 depuis le mois dernier</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Groupes de Sécurité</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">+4 depuis le mois dernier</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Aperçu des ressources</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <ResourcesOverview />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Alertes récentes</CardTitle>
                <CardDescription>Vous avez 3 alertes non résolues</CardDescription>
              </CardHeader>
              <CardContent>
                <RecentAlerts />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Statistiques réseau</CardTitle>
              <CardDescription>Trafic et performance du réseau</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <NetworkStats />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="alerts" className="space-y-4">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Toutes les alertes</CardTitle>
              <CardDescription>Historique complet des alertes</CardDescription>
            </CardHeader>
            <CardContent>
              <RecentAlerts showAll />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

