

const Partnerships = () => {
  // Sample partner logos (replace these with your actual logos)
  const partnerLogos = [
    "url_to_partner_logo_1.png",
    "url_to_partner_logo_2.png",
    "url_to_partner_logo_3.png",
    "url_to_partner_logo_4.png",
    "url_to_partner_logo_5.png",
    "url_to_partner_logo_6.png",
  ];

  return (
    <section className="bg-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">Our Partnerships</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {partnerLogos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <img src={logo} alt={`Partner ${index + 1}`} className="max-h-12 max-w-xs object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
