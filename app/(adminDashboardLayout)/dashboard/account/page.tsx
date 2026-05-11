// app/settings/page.tsx

import { ChangePassword, ProfileInfo } from "./_components/SettingsSections";

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] p-8 md:p-12 font-sans">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header Section */}
        <div className="space-y-2 border-b border-gray-900 pb-8">
          <h1 className="text-white text-3xl font-bold tracking-tight">Account Settings</h1>
          <p className="text-gray-500 text-sm">Manage your profile and subscription</p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          <ProfileInfo />
          <ChangePassword />
        </div>

      </div>
    </div>
  );
}