import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300">
          Decision Support Made Simple
        </div>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">
          Make Better Decisions.
          <span className="block text-blue-500">
            With Data, Not Guesswork.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          Evaluate your options using weighted criteria, risk analysis,
          scenario comparison, and AI-powered recommendations.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
  href="/decision"
  className="rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700"
>
  Create a Decision
</Link>

          <button className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-slate-300 transition hover:bg-slate-900">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-slate-800 bg-slate-900/50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-500">
              Core Features
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Turn complex decisions into clear insights.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              Personal Decision Engine gives you a structured way to evaluate
              your options and understand the trade-offs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/10 text-2xl">
                ⚖️
              </div>

              <h3 className="text-xl font-semibold">Weighted Criteria</h3>

              <p className="mt-3 leading-7 text-slate-400">
                Define what matters most and assign weights to each criterion
                to calculate objective scenario scores.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/10 text-2xl">
                📊
              </div>

              <h3 className="text-xl font-semibold">Risk Analysis</h3>

              <p className="mt-3 leading-7 text-slate-400">
                Identify potential risks by evaluating their probability and
                impact before making your final decision.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/10 text-2xl">
                ✨
              </div>

              <h3 className="text-xl font-semibold">AI Recommendations</h3>

              <p className="mt-3 leading-7 text-slate-400">
                Get AI-powered insights that explain your results, highlight
                trade-offs, and suggest alternatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-500">
              How It Works
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Five simple steps.
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              {
                number: "01",
                title: "Define",
                description: "Describe the decision you need to make.",
              },
              {
                number: "02",
                title: "Set Criteria",
                description: "Choose the factors that matter.",
              },
              {
                number: "03",
                title: "Compare",
                description: "Evaluate your available options.",
              },
              {
                number: "04",
                title: "Analyze",
                description: "Review scores and potential risks.",
              },
              {
                number: "05",
                title: "Decide",
                description: "Use the insights to make your decision.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-xl border border-slate-800 bg-slate-900 p-6"
              >
                <span className="text-sm font-bold text-blue-500">
                  {step.number}
                </span>

                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-800 px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-2xl border border-slate-800 bg-slate-900 p-10 text-center sm:p-16">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to make a smarter decision?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Define your decision, compare your options, and discover which
            choice makes the most sense.
          </p>

         <Link
  href="/decision"
  className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700"
>
  Create Your First Decision
</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 px-6 py-8">
        <div className="mx-auto max-w-6xl text-center text-sm text-slate-500">
          © 2026 Personal Decision Engine. Built with Next.js.
        </div>
      </footer>
    </main>
  );
}