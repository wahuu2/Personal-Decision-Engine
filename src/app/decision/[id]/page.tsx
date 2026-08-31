"use client";

import { useState } from "react";
import CriteriaForm from "@/components/CriteriaForm";
import ScenarioForm from "@/components/ScenarioForm";
import ResultsTable from "@/components/Resultstable";
import type { Criterion, Scenario } from "@/lib/scoring";

// This whole page is a client component for now because state lives here.
// Later, once you add PostgreSQL, this page can become a server component
// that fetches the decision by params.id and passes data down.
export default function DecisionPage() {
  const [criteria, setCriteria] = useState<Criterion[]>([]);
  const [scenarios, setScenarios] = useState<Scenario[]>([]);

  return (
    <main className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">New Decision</h1>

      <CriteriaForm criteria={criteria} onChange={setCriteria} />
      <ScenarioForm criteria={criteria} scenarios={scenarios} onChange={setScenarios} />
      <ResultsTable criteria={criteria} scenarios={scenarios} />
    </main>
  );
}