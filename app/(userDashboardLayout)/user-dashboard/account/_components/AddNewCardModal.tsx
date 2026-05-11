import { ChevronDown, CreditCard, X } from "lucide-react";

interface AddNewCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddNewCardModal = ({ isOpen, onClose }: AddNewCardModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all duration-300">
      {/* Backdrop Click area */}
      <div className="absolute inset-0" onClick={onClose} />

      <div 
        className="w-full max-w-[440px] bg-[#0d1117] border border-emerald-500/20 rounded-2xl p-8 shadow-2xl relative z-10 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-100">Add new card</h2>
          <button 
            onClick={onClose}
            className="p-1 text-gray-500 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form className="space-y-5">
          {/* Email Section */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">Email</label>
            <input 
              type="text" 
              placeholder="Email address" 
              className="w-full bg-[#161b22] border border-gray-700 rounded-lg py-2.5 px-4 text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-emerald-500/50 transition-colors"
            />
          </div>

          {/* Card Information Group */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">Card information</label>
            <div className="rounded-lg border border-gray-700 bg-[#161b22] overflow-hidden">
              {/* Card Number */}
              <div className="relative flex items-center border-b border-gray-700">
                <input 
                  type="text" 
                  placeholder="1234 1234 1234 1234" 
                  className="w-full bg-transparent py-3 px-4 text-gray-200 placeholder:text-gray-600 focus:outline-none"
                />
                <div className="flex gap-1 pr-3 opacity-80">
                   <div className="w-6 h-4 bg-blue-600 rounded-sm"></div>
                   <div className="w-6 h-4 bg-orange-500 rounded-sm"></div>
                   <div className="w-6 h-4 bg-blue-400 rounded-sm"></div>
                </div>
              </div>
              {/* Expiry & CVC */}
              <div className="flex">
                <input 
                  type="text" 
                  placeholder="MM / YY" 
                  className="w-1/2 bg-transparent py-3 px-4 text-gray-200 border-r border-gray-700 placeholder:text-gray-600 focus:outline-none"
                />
                <div className="w-1/2 relative flex items-center">
                  <input 
                    type="text" 
                    placeholder="CVC" 
                    className="w-full bg-transparent py-3 px-4 text-gray-200 placeholder:text-gray-600 focus:outline-none"
                  />
                  <CreditCard className="absolute right-3 w-5 h-5 text-gray-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Cardholder Name */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">Cardholder name</label>
            <input 
              type="text" 
              placeholder="Full name on card" 
              className="w-full bg-[#161b22] border border-gray-700 rounded-lg py-2.5 px-4 text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-emerald-500/50 transition-colors"
            />
          </div>

          {/* Country/Region Group */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">Country or region</label>
            <div className="rounded-lg border border-gray-700 bg-[#161b22] overflow-hidden">
              <div className="relative flex items-center border-b border-gray-700">
                <select className="w-full bg-transparent py-3 px-4 text-gray-200 appearance-none focus:outline-none cursor-pointer">
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Canada</option>
                </select>
                <ChevronDown className="absolute right-3 w-4 h-4 text-gray-500 pointer-events-none" />
              </div>
              <input 
                type="text" 
                placeholder="ZIP" 
                className="w-full bg-transparent py-3 px-4 text-gray-200 placeholder:text-gray-600 focus:outline-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="button"
            onClick={onClose}
            className="w-full bg-[#00ff95] hover:bg-[#00e686] text-black font-bold py-3.5 rounded-xl transition-all shadow-[0_0_20px_rgba(0,255,149,0.2)] mt-4"
          >
            Add New Card
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewCardModal;