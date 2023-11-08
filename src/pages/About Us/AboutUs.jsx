import Navbar from "../Home/Components/Navbar";


const AboutUs = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div className="my-6 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-3xl p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold font-garamond mb-6  text-[#a55e3f] text-center">Welcome to Artvend</h1>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          At Artvend, we are dedicated to fostering a vibrant marketplace connecting diverse artists with individuals seeking handcrafted artistry and creativity.
        </p>

        <h2 className="text-3xl font-semibold  font-garamond mb-4 text-gray-800">Our Mission</h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Artvend was conceived with a clear vision: to empower artists by providing them with a platform to showcase their talent while offering art enthusiasts a space to explore and acquire unique, one-of-a-kind pieces.
        </p>

        <h2 className="text-3xl font-semibold mb-4  font-garamond text-gray-800">Connecting Creators and Connoisseurs</h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          For Artists: Artvend offers a supportive environment for creators to exhibit their portfolios, manage bookings, and connect with a community that appreciates their distinctive craftsmanship.
        </p>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          For Clients: Our platform is designed for those seeking bespoke t-shirts, embroidery, woodworking, photography, candles, or stone art. At Artvend, you'll discover and book the perfect artist for your needs.
        </p>

        <h2 className="text-3xl font-semibold mb-4  font-garamond text-gray-800">Join Our Creative Community</h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Whether you're an artist looking to showcase your creations or an art enthusiast passionate about supporting unique craftsmanship, we invite you to join our vibrant community.
        </p>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Celebrate the diversity of art with Artvend and become part of a community that values originality, creativity, and the beauty of handmade creations.
        </p>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
