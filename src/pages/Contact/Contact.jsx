import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Contact = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center md:justify-between p-4">
      <div className="w-full md:w-1/2 md:mr-2">
        <div className=" rounded-lg p-4">
        <motion.div whileHover={{ scale: 1.1 }}> <h2 className=" mb-6 text-[#a55e3f] font-garamond uppercase font-semibold text-3xl">Contact Us</h2>   </motion.div>
          <p>Reach out to us for any queries or feedback!</p>
          <div className="mt-4">
            <motion.div whileHover={{ scale: 1.1 }}>
              <h4>Email</h4>
              <p>artvend@gmail.com</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <h4>Phone</h4>
              <p>+880 1711188899</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <h4>Address</h4>
              <p>345 Nilson Street, Khulna, Bangladesh</p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 mt-4 md:mt-0">
            <MapContainer center={[22.851623, 89.528647]} zoom={13} className="h-96 w-full md:min-w-1/2 rounded-lg">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[22.851623, 89.528647]}>
                <Popup>
                345 Nilson Street, Khulna, Bangladesh
                </Popup>
            </Marker>
            </MapContainer>
      </div>
    </section>
  );
};

export default Contact;
