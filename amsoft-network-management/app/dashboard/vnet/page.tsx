import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { VnetTable } from "@/components/vnet-table"
import { PlusCircle } from "lucide-react"
import Link from "next/link"

export default function VnetPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Réseaux Virtuels (VNET)</h1>
        <Link href="/dashboard/vnet/create">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Créer un VNET
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Vos réseaux virtuels</CardTitle>
          <CardDescription>Gérez vos réseaux virtuels et leurs configurations</CardDescription>
        </CardHeader>
        <CardContent>
          <VnetTable />
        </CardContent>
      </Card>
    </div>
  )
}

