"use client"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Edit, Trash2, Eye, Shield } from "lucide-react"

export function NsgTable() {
  // Données simulées pour les NSGs
  const nsgs = [
    {
      id: "nsg-1",
      name: "NSG-PROD-APP",
      associatedTo: "APP-SUBNET-1",
      rulesCount: 12,
      status: "active",
      lastModified: "28/02/2023",
      createdAt: "16/02/2023",
    },
    {
      id: "nsg-2",
      name: "NSG-PROD-DB",
      associatedTo: "DB-SUBNET-1",
      rulesCount: 8,
      status: "active",
      lastModified: "15/03/2023",
      createdAt: "16/02/2023",
    },
    {
      id: "nsg-3",
      name: "NSG-DEV-WEB",
      associatedTo: "WEB-SUBNET-1",
      rulesCount: 10,
      status: "active",
      lastModified: "25/03/2023",
      createdAt: "23/03/2023",
    },
    {
      id: "nsg-4",
      name: "NSG-TEST-MGMT",
      associatedTo: "Non associé",
      rulesCount: 6,
      status: "inactive",
      lastModified: "06/05/2023",
      createdAt: "06/05/2023",
    },
  ]

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nom</TableHead>
            <TableHead>Associé à</TableHead>
            <TableHead>Règles</TableHead>
            <TableHead>Statut</TableHead>
            <TableHead>Dernière modification</TableHead>
            <TableHead>Créé le</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {nsgs.map((nsg) => (
            <TableRow key={nsg.id}>
              <TableCell className="font-medium">{nsg.name}</TableCell>
              <TableCell>{nsg.associatedTo}</TableCell>
              <TableCell>{nsg.rulesCount}</TableCell>
              <TableCell>
                <Badge variant={nsg.status === "active" ? "default" : "secondary"}>
                  {nsg.status === "active" ? "Actif" : "Inactif"}
                </Badge>
              </TableCell>
              <TableCell>{nsg.lastModified}</TableCell>
              <TableCell>{nsg.createdAt}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Shield className="h-4 w-4" />
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

