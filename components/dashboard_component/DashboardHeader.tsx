"use client";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function DashboardHeader() {
  return (
    <div className="w-full bg-[#2E3374]/5 border-b border-[#EBEBF4] py-4 px-6 z-40">
      <div className="w-full mx-auto flex justify-between items-center gap-4">
        <div className="flex-1">
          <h1 className="text-xl sm:text-xl font-bold text-gray-900">
            Dashboard
          </h1>
        </div>

        {/* Right side - User info */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden sm:block text-right">

            <>
              <p className="text-sm font-semibold text-gray-900 leading-tight">
                {"User"}
              </p>
              <p className="text-xs font-medium text-gray-500 capitalize">
                {"User"}
              </p>
            </>

          </div>

          <Avatar className="h-9 w-9 sm:h-10 sm:w-10 ring-2 ring-[#314B79] ring-offset-2 transition-transform hover:scale-105">
            <AvatarImage
              src={"https://blog.hootsuite.com/wp-content/uploads/2020/02/Image-copyright.png"}
              alt={"User"}
              className="object-cover"
            />
            <AvatarFallback className="bg-gradient-to-br from-[#314B79] to-[#4A6FA5] text-white font-semibold text-sm sm:text-base">
              {"User"}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}
