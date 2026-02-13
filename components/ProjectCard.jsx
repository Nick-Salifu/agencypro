

const ProjectCard = ({image, icon, text}) => {
  return (
    <div className="rounded-lg shadow-lg bg-white flex flex-col items-center hover:scale-105 transition-all duration-300">
        <img src={image} alt="lady and lapi" className="rounded-t-lg" />
        <div className="flex items-center gap-2 my-2">
            {icon}
            <span className="font-medium">{text}</span>
        </div>    
    </div>
  )
}

export default ProjectCard