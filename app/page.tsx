export default function Home() {
  return (
    <section className="text-center">
      <h1 className="text-3xl font-bold mb-4">
        Welcome to <span className="text-blue-600">Battery Tracker</span>{" "}
      </h1>

      <p className="text-gray-600 max-w-xl mx-auto mb-6">
        Track your battery performance, health, and history with ease.
      </p>

      <div className="flex justify-center gap-4">
        <a
          href="/dashboard"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Go to Dashboard
        </a>
        <a
          href="/login"
          className="  px-6 py-3 border border-gray-300 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Login
        </a>
      </div>
    </section>
  );
}
