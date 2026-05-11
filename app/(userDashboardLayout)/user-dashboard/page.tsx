import { FilterOptions } from "./dashboard-overview/_component/FilterOptions";
import { MarketTable } from "./dashboard-overview/_component/MarketTable";
import { OpportunityCard } from "./dashboard-overview/_component/OpportunityCard";

export default function OpportunitiesPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-full mx-auto space-y-12">
        <section>
          <h2 className="text-white text-2xl font-semibold mb-6">Top Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <OpportunityCard variant="green" title="Sharp Money" tag="Sharp Money" percentage="+8.7%" confidence={92} description="Heavy sharp action on Lakers +4.5. Line moved from +6 with reverse line movement." />
            <OpportunityCard variant="blue" title="Celtics vs Heat" tag="Market Support" percentage="+6.2%" confidence={92} description="Public heavy on Heat, but money percentages favor Celtics. Value on underdog." />
            <OpportunityCard variant="red" title="Nuggets vs Suns" tag="Market Resistance" percentage="-2.1%" confidence={92} description="Line movement against sharp money. Potential trap game with injury concerns." />
          </div>
        </section>

        <section>
          <FilterOptions />
          <MarketTable />
        </section>
      </div>
    </div>
  );
}