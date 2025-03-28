import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertsTable } from "@/components/alerts-table"
import { AlertsSettings } from "@/components/alerts-settings"

export default function AlertsPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">Alertes & Logs</h1>
      <p className="text-muted-foreground">Gérez les alertes et consultez les logs de votre réseau</p>

      <Tabs defaultValue="active" className="space-y-4">
        <TabsList>
          <TabsTrigger value="active">Alertes actives</TabsTrigger>
          <TabsTrigger value="history">Historique</TabsTrigger>
          <TabsTrigger value="logs">Logs</TabsTrigger>
          <TabsTrigger value="settings">Paramètres</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Alertes actives</CardTitle>
                <CardDescription>Alertes nécessitant votre attention</CardDescription>
              </div>
              <Button variant="outline">Tout marquer comme lu</Button>
            </CardHeader>
            <CardContent>
              <AlertsTable status="active" />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Historique des alertes</CardTitle>
              <CardDescription>Toutes les alertes des 30 derniers jours</CardDescription>
            </CardHeader>
            <CardContent>
              <AlertsTable status="all" />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="logs" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Logs système</CardTitle>
              <CardDescription>Logs détaillés de votre infrastructure réseau</CardDescription>
            </CardHeader>
            <CardContent>
              <AlertsTable type="logs" />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Paramètres d'alertes</CardTitle>
              <CardDescription>Configurez vos préférences de notification</CardDescription>
            </CardHeader>
            <CardContent>
              <AlertsSettings />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

