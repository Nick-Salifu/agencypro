
const Hero = () => {
  return (
    <section className="w-full px-4 md:px-6 bg-blue-50 flex items-center justify-center py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
                <h1 className="text-5xl font-bold mb-4 capitalize">
                    Grow your business with our {" "}
                    <span className="text-blue-600">digital solutions.</span>
                </h1> 
                <p className="text-md mb-6 md:w-[90%] w-full">We help you achieve your goals with tailored digital marketing strategies. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, accusantium.</p>
                <div className="flex space-x-4 items-center">
                    <button className="px-6 py-2 bg-blue-800 text-sm text-white rounded-md hover:bg-blue-900 transition-all">
                        Get Started
                    </button>
                    <button className="px-6 py-2 bg-gray-300 border border-gray-600 text-gray-800 text-sm rounded-md hover:bg-gray-600 hover:text-white transition-all">
                        View Our Work
                    </button>
                </div>
            </div>
            
            <div>
                <img src="/hero.jpg" alt="hero image" />
            </div>
        </div>
    </section>
  )
}

export default Hero