import Navbar from "../components/Navbar";
import heroImage from "../assets/hero.jpg";

function Home() {
  return (
    <div>
      <section
        className="relative min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <Navbar />

        <div className="relative z-10 flex min-h-screen items-center justify-center text-center px-6">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Michelle Homes
            </h1>

            <p className="text-lg md:text-xl text-stone-100 max-w-2xl mx-auto">
              Elegant and comfortable Airbnb stays in Thika.
              Your perfect home away from home.
            </p>

            <a
              href="#apartments"
              className="inline-block mt-8 bg-white text-stone-900 px-8 py-3 rounded-xl font-semibold hover:bg-stone-100 transition"
            >
              View Apartments
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;