

const TopSellers = () => {

  const topSellersData = [
    {
      id: '6548c507b6454146f146f6e9',
      name: "Arabella Sophia Parker",
      service: "Candle Artwork Designer",
      image: "https://i.ibb.co/hDqXzCD/Arabella-Sophia-Parker.jpg",
    },
    {
      id: "6548c507b6454146f146f6ea",
      name: "Aurora Evengella Grace",
      service: "Patch Artist",
      image: "https://i.ibb.co/TRVRyBL/Aurora-Evengella-Grace.jpg",
    },
    {
      id: "6548c507b6454146f146f6f4",
      name: "Sharif Rayhaan Naafi",
      service: "Product Photographer",
      image: "https://i.ibb.co/yY78KNj/Sharif-Rayhan-Nafi.jpg",
    },

  ];

  return (
    <section className="py-12 ">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold font-garamond text-center mb-8 text-[#a55e3f] uppercase">Artists of The Month</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topSellersData.map((seller) => (
            <div key={seller.id} className="bg-[#D7CBA3] rounded-lg flex flex-grow flex-col  shadow-md">
              <img src={seller.image} alt={seller.name} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-2xl font-garamond font-semibold text-gray-800 mb-2">{seller.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{seller.service}</p>
                <a href={`/Details/${seller.id}`} className="bg-[#a55e3f] text-white py-2 px-4 rounded-md block text-center">
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopSellers;
