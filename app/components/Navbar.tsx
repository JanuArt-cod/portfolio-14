"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileMenu } from "./MobileMenu";



export const navigationItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Guestbook",
    href: "/guestbook",
  },
  {
    name: "Certificate",
    href: "/certificate",
  }
];

export function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="max-w-7xl max-auto px-4 md:px-8 py-5 grid grid-cols-12">
      <div className="col-span-6 flex md:col-span-3">
        <Link href="/">
          <h1 className="text-3xl font-semibold">Janu<span className="text-orange-600">art<span className="text-xl font-normal">👋</span></span></h1>
        </Link>
      </div>
      <div className="hidden sm:flex justify-center items-center col-span-6">
        <NavigationMenu>
          <NavigationMenuList>
            {navigationItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink active={pathname === item.href} className={navigationMenuTriggerStyle()}>
                    {item.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex items-center justify-end md:col-span-3 col-span-6">
        <Button className="hidden sm:flex bg-orange-600" asChild><a href="mailto:raffasyafawwazrahmani@gmail.com">Contact Me</a></Button>
        <div className="sm:hidden">
          <MobileMenu/>
        </div>
      </div>
    </nav>
  );
}