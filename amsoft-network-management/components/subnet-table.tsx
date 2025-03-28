"use client"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Edit, Trash2, Eye } from "lucide-react"

export function SubnetTable() {
  // Données simulées pour les Subnets
  const subnets = [
    {
      id: "subnet-1",
      name: "APP-SUBNET-1",
      vnet: "VNET-PROD",
      addressRange: "10.0.1.0/24",
      status: "active",
      nsgAttached: true,
      createdAt: "16/02/2023",
    },
    {
      id: "subnet-2",
      name: "DB-SUBNET-1",
      vnet: "VNET-PROD",
      addressRange: "10.0.2.0/24",
      status: "active",
      nsgAttached: true,
      createdAt: "16/02/2023",
    },
    {
      id: "subnet-3",
      name: "WEB-SUBNET-1",
      vnet: "VNET-DEV",
      addressRange: "10.1.1.0/24",
      status: "active",
      nsgAttached: true,
      createdAt: "23/03/2023",
    },
    {
      id: "subnet-4",
      name: "MGMT-SUBNET-1",
      vnet: "VNET-TEST",
      addressRange: "10.2.1.0/24",
      status: "inactive",
      nsgAttached: false,
      createdAt: "06/05/2023",
    },
  ]

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nom</TableHead>
            <TableHead>VNET</TableHead>
            <TableHead>Plage d'adresses</TableHead>
            <TableHead>Statut</TableHead>
            <TableHead>NSG</TableHead>
            <TableHead>Créé le</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {subnets.map((subnet) => (
            <TableRow key={subnet.id}>
              <TableCell className="font-medium">{subnet.name}</TableCell>
              <TableCell>{subnet.vnet}</TableCell>
              <TableCell>{subnet.addressRange}</TableCell>
              <TableCell>
                <Badge variant={subnet.status === "active" ? "default" : "secondary"}>
                  {subnet.status === "active" ? "Actif" : "Inactif"}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge variant={subnet.nsgAttached ? "outline" : "destructive"}>
                  {subnet.nsgAttached ? "Attaché" : "Non attaché"}
                </Badge>
              </TableCell>
              <TableCell>{subnet.createdAt}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

