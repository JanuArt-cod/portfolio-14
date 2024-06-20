"use client";

import Link from "next/link";
import { navigationItems } from "./Navbar";

export function Footer() {
  return (
    <footer>
      <ul className="flex flex-wrap justify-center">
        {navigationItems.map((item, index) => (
          <div key={index} className="px-5 py-2">
            <Link href={item.href} className="text-muted-foreground">
              {item.name}
            </Link>
          </div>
        ))}
      </ul>
      <p className="mt-5 text-center text-base text-muted-foreground">
        &copy; 2024 Januar Ramdhani. All Rights reserved.
      </p>
      <br/>
      <br />
    </footer>
  )
}