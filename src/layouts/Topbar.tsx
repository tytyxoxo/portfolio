"use client";

import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Menu from "@/json/menu.json";
import type { FileTreeItem } from "@/types/filetree";
import { Link } from "react-router-dom";
const MenuData = Menu as FileTreeItem[];

export function Topbar() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        {MenuData?.map((item) =>
          item.children && item.children.length > 0 ? (
            <NavigationMenuItem key={item.name}>
              <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-1 w-[150px] max-h-[200px] overflow-y-auto">
                  {item.children.map((child) => (
                    <ListItem
                      key={child.name}
                      href={child.url}
                      title={child.name}
                    >
                      <span className="text-[12px]">{child?.desc}</span>
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={item.name}>
              <NavigationMenuLink
                className="p-2 text-sm font-medium"
                href={item.url}
              >
                {item.name}
              </NavigationMenuLink>
            </NavigationMenuItem>
          )
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link to={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
