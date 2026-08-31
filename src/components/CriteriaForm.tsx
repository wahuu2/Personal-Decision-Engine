"use client";

import { useState } from "react";
import type { Criterion } from "@/lib/scoring";

type Props = {
  criteria: Criterion[];
  onChange: (criteria: Criterion[]) => void;
};

export default function CriteriaForm({ criteria, onChange }: Props) {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState(5);

  function addCriterion() {
    if (!name.trim()) return;
    const newCriterion: Criterion = {
      id: crypto.randomUUID(),
      name: name.trim(),
      weight,
    };
    onChange([...criteria, newCriterion]);
    setName("");
    setWeight(5);
  }

  function removeCriterion(id: string) {
    onChange(criteria.filter((c) => c.id !== id));
  }

  return (
    <div className="rounded-xl border border-gray-200 p-4 space-y-4">
      <h2 className="font-semibold text-lg">Criteria</h2>

      <div className="flex gap-2">
        <input
          className="flex-1 rounded-md border px-3 py-2"
          placeholder="e.g. Cost, Commute time, Growth potential"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          min={1}
          max={10}
          className="w-20 rounded-md border px-3 py-2"
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
        />
        <button
          onClick={addCriterion}
          className="rounded-md bg-black px-4 py-2 text-white"
        >
          Add
        </button>
      </div>

      <ul className="space-y-1">
        {criteria.map((c) => (
          <li key={c.id} className="flex justify-between text-sm">
            <span>{c.name} (weight: {c.weight})</span>
            <button
              onClick={() => removeCriterion(c.id)}
              className="text-red-500 hover:underline"
            >
              remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}