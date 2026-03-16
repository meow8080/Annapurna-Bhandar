function WhyChooseUs() {
  const points = [
    "Fresh and quality products",
    "Affordable pricing",
    "Trusted local shop",
    "Fast delivery",
  ];

  return (
    <section className="py-12 px-6 bg-slate-50">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Why Choose Us?
      </h2>

      <div className="max-w-3xl mx-auto grid grid-cols-2 gap-4 text-gray-700">
        {points.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center bg-green-100 border border-gray-300 px-1 py-2 rounded-full shadow-sm text-center gap-3"
          >
            <span className="text-green-600 font-bold mb-1">✔</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;