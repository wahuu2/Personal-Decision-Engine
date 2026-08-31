"use client";

import { useState } from "react";
import type { Criterion, Scenario } from "@/lib/scoring";

type Props = {
  criteria: Criterion[];
  scenarios: Scenario[];
  onChange: (scenarios: Scenario[]) => void;
};

export default function ScenarioForm({ criteria, scenarios, onChange }: Props) {
  const [name, setName] = useState("");

  function addScenario() {
    if (!name.trim() || criteria.length === 0) return;
    const values: Record<string, number> = {};
    criteria.forEach((c) => (values[c.id] = 5)); // default mid score

    const newScenario: Scenario = {
      id: crypto.randomUUID(),
      name: name.trim(),
      values,
      probability: 0.5,
      impact: 5,
    };
    onChange([...scenarios, newScenario]);
    setName("");
  }

  function updateValue(scenarioId: string, criterionId: string, value: number) {
    onChange(
      scenarios.map((s) =>
        s.id === scenarioId
          ? { ...s, values: { ...s.values, [criterionId]: value } }
          : s
      )
    );
  }

  function updateRisk(scenarioId: string, field: "probability" | "impact", value: number) {
    onChange(
      scenarios.map((s) => (s.id === scenarioId ? { ...s, [field]: value } : s))
    );
  }

  function removeScenario(id: string) {
    onChange(scenarios.filter((s) => s.id !== id));
  }

  if (criteria.length === 0) {
    return (
      <div className="rounded-xl border border-gray-200 p-4 text-sm text-gray-500">
        Add at least one criterion first.
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-gray-200 p-4 space-y-4">
      <h2 className="font-semibold text-lg">Scenarios</h2>

      <div className="flex gap-2">
        <input
          className="flex-1 rounded-md border px-3 py-2"
          placeholder="e.g. Option A, Job Offer 1"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          onClick={addScenario}
          className="rounded-md bg-black px-4 py-2 text-white"
        >
          Add
        </button>
      </div>

      <div className="space-y-4">
        {scenarios.map((s) => (
          <div key={s.id} className="rounded-lg bg-gray-50 p-3 space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-medium">{s.name}</span>
              <button
                onClick={() => removeScenario(s.id)}
                className="text-red-500 text-sm hover:underline"
              >
                remove
              </button>
            </div>

            {criteria.map((c) => (
              <div key={c.id} className="flex items-center justify-between text-sm">
                <span>{c.name}</span>
                <input
                  type="range"
                  min={0}
                  max={10}
                  value={s.values[c.id] ?? 0}
                  onChange={(e) => updateValue(s.id, c.id, Number(e.target.value))}
                />
                <span className="w-6 text-right">{s.values[c.id] ?? 0}</span>
              </div>
            ))}

            <div className="flex gap-4 text-sm pt-2 border-t">
              <label className="flex items-center gap-2">
                Probability
                <input
                  type="number"
                  step={0.1}
                  min={0}
                  max={1}
                  value={s.probability ?? 0}
                  onChange={(e) => updateRisk(s.id, "probability", Number(e.target.value))}
                  className="w-16 rounded border px-1"
                />
              </label>
              <label className="flex items-center gap-2">
                Impact
                <input
                  type="number"
                  min={0}
                  max={10}
                  value={s.impact ?? 0}
                  onChange={(e) => updateRisk(s.id, "impact", Number(e.target.value))}
                  className="w-16 rounded border px-1"
                />
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}