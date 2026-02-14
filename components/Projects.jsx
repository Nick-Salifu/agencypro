import ProjectCard from "./ProjectCard"
import { FaIdCard, FaAppStore } from "react-icons/fa";
import { TbBrandAlpineJs } from "react-icons/tb";

const Projects = () => {
  return (
    <section className="bg-gray-50 px-4 md:px-12 py-8">       
        <h1 className="font-bold text-3xl text-center text-gray-700 mb-6">
            Our Recent Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <ProjectCard text="E-Commerce Solution" icon={<FaIdCard className="text-blue-700" />} image="/recent.jpg" />
            <ProjectCard text="App Development" icon={<FaAppStore className="text-blue-700" />} image="/laptop.jpg" />
            <ProjectCard text="Branding Design" icon={<TbBrandAlpineJs className="text-blue-700" />} image="/recent2.jpg" />
        </div>
    </section>
  )
}

export default Projects