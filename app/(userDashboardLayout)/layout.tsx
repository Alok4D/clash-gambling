
import { UserDashboardHeader } from "@/components/dashboard_component/UserDashboardHeader";
import { UserDashboardSidebar } from "@/components/dashboard_component/UserDashboardSidebar";
import type React from "react";

export default function UserDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden w-full max-w-full">
      <UserDashboardSidebar />
      <div className="flex flex-col flex-1 overflow-hidden min-w-0">
        <UserDashboardHeader />
        <main className="flex-1 p-8 overflow-y-auto bg-[#181818]">{children}</main>
      </div>
    </div>
  );
}
