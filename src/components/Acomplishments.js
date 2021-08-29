import React from 'react'

function Acomplishments() {
    return (
        <div className="pb-10">
            <div className="mb-5 border-b-4 border-red-400 rounded-full w-28 " />
            <p className="mb-5 text-3xl font-medium">Personal Acomplishments </p>

            <div className="grid grid-cols-1  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-7">

                <div className="pt-10 text-center h-36 bg-background rounded-3xl">
                    <p className="text-4xl font-medium">5+</p>
                    <p className="text-gray-400">Open Source Projects</p>

                </div>
                <div className="pt-10 text-center h-36 bg-background rounded-3xl">
                <p className="text-4xl font-medium">15+</p>
                    <p className="text-gray-400"> React js project</p>

                </div>
                <div className="pt-10 text-center h-36 bg-background rounded-3xl">
                <p className="text-4xl font-medium">50+</p>
                    <p className="text-gray-400">Github Followers</p>

                </div>
                <div className="pt-10 text-center h-36 bg-background rounded-3xl">
                <p className="text-4xl font-medium">10+</p>
                    <p className="text-gray-400">Github Start</p>

                </div>
            </div>

        </div>
    )
}

export default Acomplishments