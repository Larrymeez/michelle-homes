function Home() {
  return (
    <div className="min-h-screen bg-stone-100">
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h1 className="text-5xl font-bold text-stone-800 mb-4">
          Michelle Homes
        </h1>

        <p className="text-lg text-stone-600 max-w-2xl">
          Elegant and comfortable stays in Thika. Your home away from home.
        </p>

        <button className="mt-8 bg-stone-800 text-white px-6 py-3 rounded-xl hover:bg-stone-700 transition">
          View Apartments
        </button>
      </section>
    </div>
  );
}

export default Home;