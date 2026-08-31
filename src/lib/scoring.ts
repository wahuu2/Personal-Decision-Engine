// lib/scoring.ts
// Pure functions only — no React, no state. Easy to test on their own.

export type Criterion = {
  id: string;
  name: string;
  weight: number; // e.g. 1-10, how important this factor is
};

export type Scenario = {
  id: string;
  name: string;
  values: Record<string, number>; // criterionId -> score the user gives (e.g. 1-10)
  probability?: number; // 0-1, optional, used for risk analysis
  impact?: number; // 0-10, optional, used for risk analysis
};

/**
 * Weighted sum: for each criterion, multiply the scenario's value by the
 * criterion's weight, then add them all up.
 */
export function calculateScore(criteria: Criterion[], scenario: Scenario): number {
  return criteria.reduce((total, c) => {
    const value = scenario.values[c.id] ?? 0;
    return total + c.weight * value;
  }, 0);
}

/**
 * Very simple risk model: probability x impact.
 * Returns 0 if either field is missing.
 */
export function calculateRisk(scenario: Scenario): number {
  const probability = scenario.probability ?? 0;
  const impact = scenario.impact ?? 0;
  return probability * impact;
}

/**
 * Ranks scenarios best-to-worst by weighted score.
 * Handy for the results table and for feeding into an AI prompt later.
 */
export function rankScenarios(criteria: Criterion[], scenarios: Scenario[]) {
  return scenarios
    .map((scenario) => ({
      scenario,
      score: calculateScore(criteria, scenario),
      risk: calculateRisk(scenario),
    }))
    .sort((a, b) => b.score - a.score);
}