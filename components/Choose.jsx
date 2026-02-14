import Card from "./Card"

const Choose = () => {
  return (
    <section className="px-4 md:px-12 my-8 py-10">
        <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-11/12">
                <img src="/choose.jpg" alt="office" />
            </div>
            <div>     
                <h1 className="text-3xl font-bold mb-8 text-center text-gray-700">Why Choose Us?</h1>
                {/* <span className="border hidden md:block border-gray-300 w-full ml-4"></span> */}
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card bgColor="bg-gray-200" display="block" arrow="hidden" />
                    <Card bgColor="bg-gray-200" display="block" arrow="hidden" />
                    <Card bgColor="bg-gray-200" display="block" arrow="hidden" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Choose