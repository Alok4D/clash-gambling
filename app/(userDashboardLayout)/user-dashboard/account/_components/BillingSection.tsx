"use client";
import { useState } from 'react';
import { Plus, CreditCard } from 'lucide-react';
import AddNewCardModal from './AddNewCardModal';

const BillingSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className=" text-white">
      <div className="max-w-full mx-auto space-y-8">
        
        {/* Section Title */}
        <h2 className="text-2xl font-semibold tracking-tight">Subscription & Billing</h2>

        {/* Current Plan Card */}
        <div className="bg-[#0d2a26] border border-emerald-900/30 rounded-2xl p-8 relative overflow-hidden">
          <div className="flex justify-between items-start">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-100">Current Plan</h3>
                <p className="text-gray-400 text-sm">Monthly Subscription</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="bg-[#143d37] text-emerald-400 text-xs px-3 py-1 rounded-full border border-emerald-500/20">
                  Monthly
                </span>
                <span className="text-gray-400 text-sm">Next billing: May 15, 2026</span>
              </div>

              <button className="bg-[#e11d48] hover:bg-red-600 text-white font-medium py-2.5 px-6 rounded-md transition-colors shadow-lg">
                Cancel Subscription
              </button>
            </div>

            {/* Price Tag */}
            <div className="text-right">
              <div className="text-4xl font-bold">$49</div>
              <div className="text-gray-400 text-xs mt-1">per month</div>
            </div>
          </div>
        </div>

        {/* Payment Method Section */}
        <div className="space-y-4 pt-4">
          <div className="flex justify-between items-center px-1">
            <h3 className="text-sm font-medium text-gray-300">Payment Method</h3>
       
            <button 
              onClick={() => setIsModalOpen(true)}
              className="text-emerald-400 hover:text-emerald-300 text-sm font-medium flex items-center gap-1 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Add New Card
            </button>
          
          </div>

          {/* Card Item */}
          <div className="bg-[#0d1117] border border-gray-800 rounded-xl p-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-gray-800/50 p-2 rounded-lg">
                <CreditCard className="w-5 h-5 text-gray-400" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium tracking-widest text-gray-200">
                  •••• •••• •••• 4242
                </p>
                <p className="text-xs text-gray-500">Expires 12/2027</p>
              </div>
            </div>
            
            <button className="text-red-500/80 hover:text-red-500 text-sm font-medium transition-colors">
              Remove
            </button>
          </div>
        </div>

      </div>

      <AddNewCardModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default BillingSection;