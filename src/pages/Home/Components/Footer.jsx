const Footer = () => {
    return (
      <footer className="bg-[#272727] text-gray-300">
        <div className="container mx-auto py-8 px-5 gap-2 flex flex-wrap items-center justify-center md:justify-between lg:justify-between">
          <div className="flex flex-wrap items-center">
            <img src="https://i.ibb.co/sV98Qj6/logo-on-black.png" className=" h-12 " />
          </div>
          <div className="flex flex-wrap items-center space-x-4">
            <a href="#" className="text-gray-300 text-sm lg:text-base hover:text-gray-400">Home</a>
            <a href="/AboutUs" className="text-gray-300 text-sm lg:text-base hover:text-gray-400">About Us</a>
            <a href="/Services" className="text-gray-300 text-sm lg:text-base hover:text-gray-400">Services</a>
            <a href="/Contact" className="text-gray-300 text-sm lg:text-base hover:text-gray-400">Contact</a>
          </div>
          <div className="flex flex-wrap items-center space-x-4">
            <a href="#" ><img className="h-5" src="https://i.ibb.co/NKgBCQP/fb-white.png" alt="" /></a>
            <a href="#" ><img className="h-5" src="https://i.ibb.co/4tSfSfp/insta-white.png" alt="" /></a>
            <a href="#" ><img className="h-5" src="https://i.ibb.co/jk9J84V/twitter-white.png" alt="" /></a>
          </div>
        </div>
        <div className="bg-[#2d2d2d]">
          <div className="container mx-auto py-2 text-center text-gray-400 text-sm">
            <p>&copy; 2023 Artvend. All rights reserved.</p>
            <p>Terms of Service | Privacy Policy</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  