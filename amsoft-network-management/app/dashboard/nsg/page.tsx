import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { NsgTable } from "@/components/nsg-table"
import { PlusCircle } from "lucide-react"
import Link from "next/link"

export default function NsgPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Groupes de Sécurité Réseau (NSG)</h1>
        <Link href="/dashboard/nsg/create">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Créer un NSG
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Vos groupes de sécurité</CardTitle>
          <CardDescription>Gérez vos groupes de sécurité réseau et leurs règles</CardDescription>
        </CardHeader>
        <CardContent>
          <NsgTable />
        </CardContent>
      </Card>
    </div>
  )
}

