import type { Criterion, Scenario } from "@/lib/scoring";
import { rankScenarios } from "@/lib/scoring";

type Props = {
  criteria: Criterion[];
  scenarios: Scenario[];
};

// No "use client" here on purpose — this just renders data it's given,
// so it can stay a server component.
export default function ResultsTable({ criteria, scenarios }: Props) {
  if (scenarios.length === 0) {
    return (
      <div className="rounded-xl border border-gray-200 p-4 text-sm text-gray-500">
        Add scenarios to see results.
      </div>
    );
  }

  const ranked = rankScenarios(criteria, scenarios);

  return (
    <div className="rounded-xl border border-gray-200 p-4">
      <h2 className="font-semibold text-lg mb-3">Results</h2>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left border-b">
            <th className="py-2">Rank</th>
            <th>Scenario</th>
            <th>Weighted Score</th>
            <th>Risk (prob × impact)</th>
          </tr>
        </thead>
        <tbody>
          {ranked.map((r, i) => (
            <tr key={r.scenario.id} className="border-b last:border-0">
              <td className="py-2">{i + 1}</td>
              <td className="font-medium">{r.scenario.name}</td>
              <td>{r.score.toFixed(1)}</td>
              <td>{r.risk.toFixed(1)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}