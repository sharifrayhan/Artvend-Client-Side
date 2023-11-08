

const Partnerships = () => {
  // Sample partner logos (replace these with your actual logos)
  const partnerLogos = [
    "https://i.ibb.co/b2F8vcp/artio.png",
    "https://i.ibb.co/pvMKLwj/Humo.png",
    "https://i.ibb.co/FnRBMHF/olio.png",
    "https://i.ibb.co/3yC8W3g/tora.png",
    "https://i.ibb.co/nPhGvD2/windy.png",
  ];

  return (
    <section className=" py-12">
      <div className="max-w-6xl mx-auto px-4">
        <center><h2 className=" mb-6 text-[#a55e3f] font-garamond uppercase font-semibold text-3xl">Our Partners</h2></center>
        <div className="flex justify-between fles-wrap ">
          {partnerLogos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <img src={logo} className="max-h-[100px] max-w-xs object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
