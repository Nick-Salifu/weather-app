import { useState } from "react"

function Weather() {
    const [search, setSearch] = useState("")

    return (
        <div className="w-full h-screen bg-background bg-cover bg-center bg-no-repeat">
            <div className="container mx-auto py-10 px-4 xl:px-24">
                <div className="text-center">
                    <input
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        type="text"
                        placeholder="Enter City"
                        className="px-6 py-[6px] text-lg rounded-lg focus:outline-none md:w-96"
                    />
                </div>

                <div className="flex justify-between flex-col h-[33rem]">
                    {/* first part */}
                    <div className="flex items-center justify-between mt-20 text-white/80">
                        <div className="flex flex-col gap-4">
                            <p className="font-semibold text-2xl">City Name</p>
                            <h1 className="text-8xl font-bold">67°F</h1>
                        </div>
                        <p className="text-3xl tracking-widest font-semibold transform -rotate-90">Clear</p>
                    </div>

                    {/* second part */}
                    <div className="flex justify-around items-center bg-white/80 rounded-sm text-gray-800">
                        <div>
                            <p className="text-2xl font-semibold">20°F</p>
                            <h5 className="text-lg font-bold">Humidity</h5>
                        </div>

                        <div>
                            <p className="text-2xl font-semibold">40%</p>
                            <h5 className="text-lg font-bold">Wind Speed</h5>
                        </div>

                        <div>
                            <p className="text-2xl font-semibold">33Mph</p>
                            <h5 className="text-lg font-bold">Saturation</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather
