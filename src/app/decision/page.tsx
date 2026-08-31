"use client";

import { useState } from "react";

export default function DecisionPage() {

  const [criteria, setCriteria] = useState([
  {
    id: 1,
    name: "",
    weight: 0,
  },
]);

const addCriterion = () => {
  setCriteria([
    ...criteria,
    {
      id: Date.now(),
      name: "",
      weight: 0,
    },
  ]);
};

const removeCriterion = (id: number) => {
  setCriteria(criteria.filter((criterion) => criterion.id !== id));
};

const updateCriterionName = (id: number, name: string) => {
  setCriteria(
    criteria.map((criterion) =>
      criterion.id === id
        ? { ...criterion, name }
        : criterion
    )
  );
};

const updateCriterionWeight = (id: number, weight: number) => {
  setCriteria(
    criteria.map((criterion) =>
      criterion.id === id
        ? { ...criterion, weight }
        : criterion
    )
  );
};

const totalWeight = criteria.reduce(
  (total, criterion) => total + criterion.weight,
  0
);


  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-500">
            Step 1
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            Define Your Decision
          </h1>

          <p className="mt-3 text-slate-400">
            Start by telling us what decision you need to make.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-8">
  {/* Decision Title */}
  <div>
    <label
      htmlFor="title"
      className="mb-2 block text-sm font-medium text-slate-200"
    >
      Decision Title
    </label>

    <input
      id="title"
      type="text"
      placeholder="e.g. Which job should I take?"
      className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
    />
  </div>

  {/* Decision Description */}
  <div>
    <label
      htmlFor="description"
      className="mb-2 block text-sm font-medium text-slate-200"
    >
      Description
    </label>

    <textarea
      id="description"
      rows={4}
      placeholder="Describe the decision you are trying to make..."
      className="w-full resize-none rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
    />
  </div>

  {/* Criteria */}
  <div className="border-t border-slate-800 pt-8">
    <div className="mb-5">
      <h2 className="text-xl font-semibold">Decision Criteria</h2>

      <p className="mt-1 text-sm text-slate-400">
        Add the factors that matter when making this decision.
      </p>
    </div>

    <div className="space-y-4">
      {criteria.map((criterion, index) => (
        <div
          key={criterion.id}
          className="rounded-xl border border-slate-800 bg-slate-950 p-5"
        >
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-medium text-slate-400">
              Criterion {index + 1}
            </span>

            {criteria.length > 1 && (
              <button
                type="button"
                onClick={() => removeCriterion(criterion.id)}
                className="text-sm text-red-400 transition hover:text-red-300"
              >
                Remove
              </button>
            )}
          </div>

          <div className="grid gap-4 sm:grid-cols-[1fr_140px]">
            {/* Criterion Name */}
            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Name
              </label>

              <input
                type="text"
                value={criterion.name}
                onChange={(e) =>
                  updateCriterionName(
                    criterion.id,
                    e.target.value
                  )
                }
                placeholder="e.g. Salary"
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
              />
            </div>

            {/* Weight */}
            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Weight (%)
              </label>

              <input
                type="number"
                min="0"
                max="100"
                value={criterion.weight}
                onChange={(e) =>
                  updateCriterionWeight(
                    criterion.id,
                    Number(e.target.value)
                  )
                }
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Add Criterion */}
    <button
      type="button"
      onClick={addCriterion}
      className="mt-4 rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800"
    >
      + Add Criterion
    </button>

    {/* Total Weight */}
    <div className="mt-6 flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950 px-5 py-4">
      <span className="font-medium">Total Weight</span>

      <span
        className={`font-bold ${
          totalWeight === 100
            ? "text-green-400"
            : "text-yellow-400"
        }`}
      >
        {totalWeight}%
      </span>
    </div>
  </div>

  {/* Continue */}
  <button
    type="submit"
    className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700"
  >
    Continue to Scenarios
  </button>
</form>

        {/* Example */}
        <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <h2 className="font-semibold">Example</h2>

          <div className="mt-4 space-y-2 text-sm text-slate-400">
            <p>
              <span className="text-slate-200">Decision:</span> Which job
              should I take?
            </p>

            <p>
              <span className="text-slate-200">Criteria:</span> Salary,
              growth, work-life balance, commute
            </p>

            <p>
              <span className="text-slate-200">Options:</span> Company A,
              Company B, Company C
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}