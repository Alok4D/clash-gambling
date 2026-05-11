"use client";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function DashboardHeader() {
  return (
    <div className="w-full border-b border-[#00FF88]/20 py-4 px-6 z-40 bg-[#181818]">
      <div className="w-full mx-auto flex justify-between items-center gap-4">
        <div className="flex-1">
          <h1 className="text-xl sm:text-xl font-bold text-white">
            Dashboard
          </h1>
        </div>

        {/* Right side - User info */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden sm:block text-right">
            <p className="text-sm font-semibold text-white leading-tight">
              User
            </p>
            <p className="text-xs font-medium text-gray-400 capitalize">
              Administrator
            </p>
          </div>

          <Avatar className="h-9 w-9 sm:h-10 sm:w-10 ring-2 ring-[#00FF88]/40 ring-offset-2 ring-offset-[#181818] transition-transform hover:scale-105">
            <AvatarImage
              src="https://blog.hootsuite.com/wp-content/uploads/2020/02/Image-copyright.png"
              alt="User"
              className="object-cover"
            />
            <AvatarFallback className="bg-gradient-to-br from-[#00FF88]/20 to-[#00FF88]/10 text-white font-semibold text-sm sm:text-base">
              AD
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}
