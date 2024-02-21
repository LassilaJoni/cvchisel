"use client";
import Image from "next/image";
import React from "react";

import { LayoutDashboard, LucideIcon, Settings } from "lucide-react";
import SidebarItem from "./item";
import SignOut from "../signout";

interface ISidebarItem {
  name: string;
  icon: LucideIcon;
  path: string;
}

const items: ISidebarItem[] = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard/resumes",
  },
  {
    name: "Settings",
    icon: Settings,
    path: "/dashboard/settings",
  },
];

export default function Sidebar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-10 p-4">
      <div className="flex flex-col space-y-10 h-full">
        <Image
          className="h-10 w-fit"
          width={50}
          height={50}
          src="/fhat-ari.png"
          alt="logo"
        />
        <div className="flex-grow">
          <div className="flex flex-col space-y-1">
            {items.map((item) => (
              <SidebarItem key={item.path} item={item} />
            ))}
          </div>
        </div>
        <SignOut />
      </div>
    </div>
  );
}
