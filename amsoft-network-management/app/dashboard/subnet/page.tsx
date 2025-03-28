import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SubnetTable } from "@/components/subnet-table"
import { PlusCircle } from "lucide-react"
import Link from "next/link"

export default function SubnetPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Sous-réseaux (Subnet)</h1>
        <Link href="/dashboard/subnet/create">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Créer un Subnet
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Vos sous-réseaux</CardTitle>
          <CardDescription>Gérez vos sous-réseaux et leurs configurations</CardDescription>
        </CardHeader>
        <CardContent>
          <SubnetTable />
        </CardContent>
      </Card>
    </div>
  )
}

