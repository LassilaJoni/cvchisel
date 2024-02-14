"use client";
import React, { useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import { LucideIcon } from "lucide-react";

interface ISidebarItem {
  name: string;
  icon: LucideIcon;
  path: string;
}
const SidebarItem = ({ item }: { item: ISidebarItem }) => {
  const { name, icon: Icon, path } = item;

  const router = useRouter();
  const pathname = usePathname();

  const onClick = () => {
    router.push(path);
  };

  const isActive = useMemo(() => {
    return path === pathname;
  }, [path, pathname]);

  return (
    <div
      className={`flex items-center p-3 rounded-lg hover:bg-sidebar-background cursor-pointer hover:text-sidebar-active justify-between text-sidebar-iconColor ${
        isActive && "text-sidebar-active bg-sidebar-background"
      }`}
      onClick={onClick}
    >
      <div className="flex items-center space-x-2">
        <Icon />
        <p className="text-sm font-semibold">{name}</p>
      </div>
    </div>
  );
};

export default SidebarItem;
