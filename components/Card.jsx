import { FaArrowRightLong } from "react-icons/fa6";
import { FaAngleDoubleRight } from "react-icons/fa";

const Card = ({heading, icon, iconColor}) => {
  return (
    <div className="rounded-lg shadow-lg p-4 bg-white">
        <div className="flex items-center justify-between gap-5 mb-3">
            <div className="flex items-center gap-3">
                <div className={`rounded-full ${iconColor} p-1.5 text-white`}>
                    {icon}
                </div>
                <p className="font-semibold text-lg md:text-blue-600">
                    {heading}
                </p>
            </div>
            <div className="md:hidden">
                <FaAngleDoubleRight />
            </div>
        </div>
        <p className="text-sm max-w-2xl hidden md:block mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit esse distinctio est? Perspiciatis voluptate impedit sunt non, porro
        </p>  
      
        <button className="md:flex items-center gap-1.5 cursor-pointer hover:text-blue-500 text-blue-700 hidden">
            Learn more
            <FaArrowRightLong />
        </button>
    </div>
  )
}

export default Card