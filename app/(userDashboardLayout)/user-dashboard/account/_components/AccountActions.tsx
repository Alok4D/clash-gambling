
const AccountActions = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-full bg-[#111821] border border-gray-800/60 rounded-2xl p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        
        {/* Text Content */}
        <div className="space-y-3">
          <h2 className="text-xl font-medium text-gray-200">
            Account Actions
          </h2>
          <p className="text-gray-400 text-base">
            Deleting your account will permanently remove all your data.
          </p>
        </div>

        {/* Action Button */}
        <div>
          <button className="bg-[#3a161a] hover:bg-[#4a1c21] text-red-500 font-medium py-3 px-8 rounded-xl border border-red-900/30 transition-all duration-200">
            Delete Account
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default AccountActions;