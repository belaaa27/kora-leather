export default function App() {
  return (
    <main className="min-h-screen bg-ivory px-6 py-20 text-brand-text">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cognac">
          Design Test
        </p>

        <h1 className="mt-6 font-serif text-5xl font-semibold text-espresso">
          Kora Leather
        </h1>

        <p className="mt-4 text-lg">Crafted for everyday elegance.</p>

        <p className="mx-auto mt-6 max-w-lg leading-7">
          This is a minimal test component to verify our colors, typography,
          spacing, and contrast.
        </p>

        <button
          type="button"
          className="mt-8 rounded-md bg-espresso px-6 py-3 font-medium text-white transition-colors hover:bg-cognac focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-espresso"
        >
          Sample Action
        </button>
      </div>
    </main>
  );
}
