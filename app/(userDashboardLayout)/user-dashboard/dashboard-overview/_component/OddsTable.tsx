// components/OddsTable.tsx
const oddsData = [
  { book: "DraftKings", odds: "-4.5 (-110)", ev: "+4.2%" },
  { book: "FanDuel", odds: "-4.5 (-110)", ev: "+9.2%" },
  { book: "BetMGM", odds: "-4.5 (-110)", ev: "+9.2%" },
  { book: "Caesars Sportsbook", odds: "-4.5 (-110)", ev: "+9.2%" },
];

export const OddsTable = () => (
  <div className="bg-[#0D1117] border border-[#1F2937] rounded-xl p-6 h-full">
    <h3 className="text-white text-lg font-semibold mb-6">Odds Comparison</h3>
    <table className="w-full text-sm">
      <thead className="text-gray-500 border-b border-gray-800">
        <tr className="text-left">
          <th className="pb-4 font-medium">Sports book</th>
          <th className="pb-4 font-medium text-center">Odds</th>
          <th className="pb-4 font-medium text-right">EV</th>
        </tr>
      </thead>
      <tbody className="text-gray-300">
        {oddsData.map((row, i) => (
          <tr key={i} className="border-b border-gray-800/50 last:border-0">
            <td className="py-4">{row.book}</td>
            <td className="py-4 text-center">{row.odds}</td>
            <td className="py-4 text-right text-[#22C55E]">● {row.ev}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);