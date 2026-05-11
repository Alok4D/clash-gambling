
import { Bookmark, Trash2, ArrowUpRight } from 'lucide-react';

const SavedResults = () => {
  const results = [
    { id: 1, title: "Lakers vs Warriors Analysis", league: "NBA", date: "Apr 15, 2026" },
    { id: 2, title: "Best ATS teams this season", league: "NFL", date: "Apr 14, 2026" },
    { id: 3, title: "Chiefs vs Bills Breakdown", league: "NBA", date: "Apr 13, 2026" },
    { id: 4, title: "Line movement patterns in playoff games", league: "NFL", date: "Apr 12, 2026" },
  ];

  return (
    <div className="min-h-screen text-white">
      <div className="max-w-full mx-auto space-y-6">
        
        {/* Header Section */}
        <header className="mb-10">
          <h1 className="text-3xl font-medium font-montserrat">Saved Results</h1>
          <p className="text-gray-400 mt-2">Your bookmarked games and queries</p>
        </header>

        {/* List of Saved Cards */}
        <div className="space-y-4">
          {results.map((item) => (
            <div 
              key={item.id} 
              className="group relative bg-[#111111] border border-gray-800/50 rounded-xl p-6 hover:border-gray-700 transition-all"
            >
              <div className="flex justify-between items-start">
                <div className="space-y-4">
                  {/* Title with Bookmark Icon */}
                  <div className="flex items-center gap-3">
                    <Bookmark className="w-5 h-5 text-emerald-500 fill-emerald-500/10" />
                    <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                  </div>

                  {/* Metadata Row */}
                  <div className="flex items-center gap-4">
                    <span className="bg-emerald-900/30 text-emerald-400 text-[10px] font-bold px-2 py-1 rounded border border-emerald-500/20 uppercase tracking-wider">
                      {item.league}
                    </span>
                    <span className="text-gray-500 text-sm">{item.date}</span>
                  </div>

                  {/* View Details Link */}
                  <button className="flex items-center gap-1 text-emerald-500 text-sm font-medium hover:text-emerald-400 transition-colors">
                    View details
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Delete Action */}
                <button className="p-2 text-gray-600 hover:text-red-500 transition-colors">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SavedResults;