"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"

export function AlertsSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Notifications</h3>
        <p className="text-sm text-muted-foreground">Configurez comment vous souhaitez recevoir les alertes</p>
      </div>
      <Separator />

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="email-alerts">Alertes par email</Label>
            <p className="text-sm text-muted-foreground">Recevoir les alertes par email</p>
          </div>
          <Switch id="email-alerts" defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="sms-alerts">Alertes par SMS</Label>
            <p className="text-sm text-muted-foreground">Recevoir les alertes par SMS</p>
          </div>
          <Switch id="sms-alerts" />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="dashboard-alerts">Alertes sur le tableau de bord</Label>
            <p className="text-sm text-muted-foreground">Afficher les alertes sur le tableau de bord</p>
          </div>
          <Switch id="dashboard-alerts" defaultChecked />
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Sévérité des alertes</h3>
        <p className="text-sm text-muted-foreground">Choisissez quels types d'alertes vous souhaitez recevoir</p>

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="high-severity" defaultChecked />
            <Label htmlFor="high-severity">Haute sévérité</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="medium-severity" defaultChecked />
            <Label htmlFor="medium-severity">Moyenne sévérité</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="low-severity" defaultChecked />
            <Label htmlFor="low-severity">Basse sévérité</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="info-severity" />
            <Label htmlFor="info-severity">Informations</Label>
          </div>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Fréquence des notifications</h3>

        <RadioGroup defaultValue="realtime">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="realtime" id="realtime" />
            <Label htmlFor="realtime">Temps réel</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="hourly" id="hourly" />
            <Label htmlFor="hourly">Résumé horaire</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="daily" id="daily" />
            <Label htmlFor="daily">Résumé quotidien</Label>
          </div>
        </RadioGroup>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Contacts</h3>

        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" defaultValue="admin@amsoft.fr" />
        </div>

        <div className="grid gap-3">
          <Label htmlFor="phone">Téléphone</Label>
          <Input id="phone" placeholder="+33 6 12 34 56 78" />
        </div>
      </div>

      <div className="flex justify-end">
        <Button>Enregistrer les paramètres</Button>
      </div>
    </div>
  )
}

