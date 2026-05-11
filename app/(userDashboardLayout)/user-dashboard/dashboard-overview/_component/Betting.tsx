import React from 'react';
import { TrendingUp } from 'lucide-react';

export const Betting = () => {
  return (
    <div className=" text-white">
      <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left Column: Data Visualization */}
        <div className="space-y-8">
          <h2 className="text-xl font-semibold mb-6">Public vs Sharp Money</h2>
          
          {/* Public Money Bar */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm text-gray-400">
              <span>Public Money</span>
              <span className="font-bold text-white text-base">35%</span>
            </div>
            <div className="w-full bg-[#1e1e1e] rounded-full h-3">
              <div 
                className="bg-blue-600 h-3 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]" 
                style={{ width: '35%' }}
              ></div>
            </div>
          </div>

          {/* Sharp Money Bar */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm text-gray-400">
              <span>Sharp Money</span>
              <span className="font-bold text-white text-base">78%</span>
            </div>
            <div className="w-full bg-[#1e1e1e] rounded-full h-3">
              <div 
                className="bg-emerald-500 h-3 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]" 
                style={{ width: '78%' }}
              ></div>
            </div>
          </div>

          {/* Line Movement Card */}
          <div className="mt-12 bg-[#181818] border border-gray-800 rounded-xl p-6 relative">
            <span className="text-gray-400 text-sm font-medium">Line Movement</span>
            
            <div className="flex justify-between items-end mt-4">
              <div className="space-y-1">
                <p className="text-gray-500 text-xs uppercase tracking-wider">Opening</p>
                <p className="text-2xl font-bold">LAL +6</p>
              </div>

              {/* Icon in Center */}
              <div className="pb-1">
                <TrendingUp className="text-emerald-500 w-6 h-6" />
              </div>

              <div className="space-y-1 text-right">
                <p className="text-gray-500 text-xs uppercase tracking-wider">Current</p>
                <p className="text-2xl font-bold text-emerald-500">LAL +4.5</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Reasoning & Factors */}
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">Key Reasoning</h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              Heavy sharp action moved the line from +6 to +4.5 despite majority public 
              money on Warriors. This reverse line movement indicates strong professional 
              betting interest on the Lakers.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium mb-4">Key Factors</h2>
            <ul className="space-y-3">
              {[
                "Sharp money at 78% on Lakers despite being underdogs",
                "Line moved 1.5 points against public perception",
                "Historical edge in similar reverse line movement scenarios",
                "Key player matchup advantages favor Lakers rotation"
              ].map((factor, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-300">
                  <span className="text-emerald-500 mt-1.5 text-[10px]">●</span>
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

      </div>
    </div>
  );
};

export default Betting;