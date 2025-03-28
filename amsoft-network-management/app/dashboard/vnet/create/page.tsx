import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CreateVnetPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Link href="/dashboard/vnet">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Créer un Réseau Virtuel</h1>
      </div>

      <Card className="max-w-3xl">
        <CardHeader>
          <CardTitle>Nouveau VNET</CardTitle>
          <CardDescription>Configurez les paramètres de votre nouveau réseau virtuel</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="grid gap-3">
              <Label htmlFor="name">Nom du VNET</Label>
              <Input id="name" placeholder="mon-vnet" />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="region">Région</Label>
              <Select>
                <SelectTrigger id="region">
                  <SelectValue placeholder="Sélectionnez une région" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="westeurope">Europe Ouest (Paris)</SelectItem>
                  <SelectItem value="northeurope">Europe Nord (Dublin)</SelectItem>
                  <SelectItem value="francecentral">France Centre</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-3">
              <Label htmlFor="address-space">Espace d'adressage</Label>
              <Input id="address-space" placeholder="10.0.0.0/16" />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Description du réseau virtuel" />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-end space-x-2">
          <Link href="/dashboard/vnet">
            <Button variant="outline">Annuler</Button>
          </Link>
          <Button>Créer le VNET</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

