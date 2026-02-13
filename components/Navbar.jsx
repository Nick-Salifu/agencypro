import { FaBars } from "react-icons/fa";

const navLinks = [
    {
        id: 1,
        label: "Home"
    },
    {
        id: 2,
        label: "Services"
    },
    {
        id: 3,
        label: "Portfolio"
    },
    {
        id: 4,
        label: "About"
    },
    {
        id: 5,
        label: "Contact"
    },
]

const Navbar = () => {
  return (
    <nav className="px-4 md:px-12 bg-white">
        <div className="flex items-center justify-between p-3">
            <div className="flex items-center gap-2">
                <img src="/logo.jpg" alt="project image" className="w-9 h-9" />
                <span className="md:text-3xl text-xl font-semibold text-gray-700">AgencyPro</span>
            </div>
            
            {/* NavLinks */}
            <ul className="hidden md:flex gap-5">
              {navLinks.map((link) => (
                    <li 
                        key={link.id} 
                        className="font-medium text-gray-500">
                            {link.label}
                    </li>
              ))} 
            </ul>
            
            <div className="hidden md:block">
                <button className="px-6 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900 transition-all">Get A Quote</button>
            </div>
            
            {/* Mobile menu */}
            <div className="md:hidden">
                <FaBars className="w-7 h-7" />
            </div>
        </div>
    </nav>
  )
}

export default Navbar