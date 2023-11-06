import { useState } from 'react'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false); 

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between mx-11 my-3">
            {/* Logo shown on small devices */}
            <div className="block md:hidden lg:hidden">
                <img className="h-12" src="https://i.ibb.co/ZX9hbLV/logo-main.png" alt="" />
            </div>

            <div className="md:w-[58%]  lg:w-[53%] flex items-center justify-between">
                {/* Three main components for  users */}
                <div className="flex   gap-3 relative">
                    <Link to="/" className='hover:text-[#e27f5a]'>Home</Link>
                    <Link to="/services"  className='hover:text-[#e27f5a]'>Services</Link>

                    {/* Dashboard Dropdown */}
                    <div className="relative" onClick={toggleDropdown}>
                        <p className="cursor-pointer hover:text-[#e27f5a]">Dashboard</p>
                        {/* Dropdown Content */}
                        {dropdownOpen && (
                            <div className="absolute w-[130px]  top-full mt-1 py-2 bg-white text-gray-800 shadow-md rounded-lg">
                                <Link to="/dashboard-option1" className="block px-4 py-2 text-sm hover:bg-[#EF5C2B]">My Services</Link>
                                <Link to="/dashboard-option2" className="block px-4 py-2 text-sm hover:bg-[#EF5C2B]">Add Services</Link>
                                <Link to="/dashboard-option3" className="block px-4 py-2 text-sm hover:bg-[#EF5C2B]">My Schedules</Link>
                            </div>
                        )}
                    </div>
                </div>

                {/* Company Logo */}
                <div className="hidden md:block lg:block">
                    <img className="h-12 w-22" src="https://i.ibb.co/ZX9hbLV/logo-main.png" alt="" />
                </div>
            </div>

            {/* Login/Logout and user information */}
            <div className="flex gap-3">
                <button>photo</button>
                <h1>Sharif Rayhan</h1>
                <button>Login</button>
            </div>
        </div>
    );
};

export default Navbar;
