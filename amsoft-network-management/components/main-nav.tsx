"use client"

import type React from "react"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname()

  const routes = [
    {
      href: "/dashboard",
      label: "Tableau de bord",
      active: pathname === "/dashboard",
    },
    {
      href: "/dashboard/vnet",
      label: "VNET",
      active: pathname.startsWith("/dashboard/vnet"),
    },
    {
      href: "/dashboard/subnet",
      label: "Subnet",
      active: pathname.startsWith("/dashboard/subnet"),
    },
    {
      href: "/dashboard/nsg",
      label: "NSG",
      active: pathname.startsWith("/dashboard/nsg"),
    },
    {
      href: "/dashboard/monitoring",
      label: "Monitoring",
      active: pathname.startsWith("/dashboard/monitoring"),
    },
    {
      href: "/dashboard/alerts",
      label: "Alertes & Logs",
      active: pathname.startsWith("/dashboard/alerts"),
    },
  ]

  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)} {...props}>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            route.active ? "text-primary" : "text-muted-foreground",
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  )
}

