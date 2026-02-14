import Card from "./Card"
import { BiWorld } from "react-icons/bi";
import { FaLaptop, FaCode } from "react-icons/fa";

const Service = () => {
  return (
    <section className="px-4 md:px-12 my-8">        
        <h1 className="font-bold text-3xl text-center text-gray-700 mb-6">
            Our Services
        </h1>
        
        <div className="flex flex-col md:flex-row gap-4">
            <Card heading="SEO Optimization" icon={<BiWorld />} iconColor="bg-blue-500" />
            <Card heading="Social Media Marketing" icon={<FaLaptop />} iconColor="bg-red-500" />
            <Card heading="Web Development" icon={<FaCode />} iconColor="bg-green-500" />
        </div>
    </section>
  )
}

export default Service