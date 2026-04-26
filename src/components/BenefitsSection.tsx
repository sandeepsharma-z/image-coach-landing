const benefits = [
  "You are being judged.",
  "In the first seven seconds.",
  "Every single time.",
];

const BenefitsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-5xl mx-auto text-center px-4 md:px-0 space-y-4 md:space-y-6">
        {benefits.map((line) => (
          <p
            key={line}
            className="text-2xl md:text-5xl lg:text-7xl font-display leading-tight text-black"
          >
            {line}
          </p>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
