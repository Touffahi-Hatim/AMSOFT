"use client"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Edit, Trash2, Eye } from "lucide-react"

export function VnetTable() {
  // Données simulées pour les VNETs
  const vnets = [
    {
      id: "vnet-1",
      name: "VNET-PROD",
      addressSpace: "10.0.0.0/16",
      region: "Europe Ouest (Paris)",
      status: "active",
      subnets: 8,
      createdAt: "15/02/2023",
    },
    {
      id: "vnet-2",
      name: "VNET-DEV",
      addressSpace: "10.1.0.0/16",
      region: "Europe Ouest (Paris)",
      status: "active",
      subnets: 6,
      createdAt: "22/03/2023",
    },
    {
      id: "vnet-3",
      name: "VNET-TEST",
      addressSpace: "10.2.0.0/16",
      region: "Europe Nord (Dublin)",
      status: "active",
      subnets: 4,
      createdAt: "05/05/2023",
    },
    {
      id: "vnet-4",
      name: "VNET-STAGING",
      addressSpace: "10.3.0.0/16",
      region: "France Centre",
      status: "inactive",
      subnets: 2,
      createdAt: "12/07/2023",
    },
  ]

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nom</TableHead>
            <TableHead>Espace d'adressage</TableHead>
            <TableHead>Région</TableHead>
            <TableHead>Statut</TableHead>
            <TableHead>Subnets</TableHead>
            <TableHead>Créé le</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {vnets.map((vnet) => (
            <TableRow key={vnet.id}>
              <TableCell className="font-medium">{vnet.name}</TableCell>
              <TableCell>{vnet.addressSpace}</TableCell>
              <TableCell>{vnet.region}</TableCell>
              <TableCell>
                <Badge variant={vnet.status === "active" ? "default" : "secondary"}>
                  {vnet.status === "active" ? "Actif" : "Inactif"}
                </Badge>
              </TableCell>
              <TableCell>{vnet.subnets}</TableCell>
              <TableCell>{vnet.createdAt}</TableCell>
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

