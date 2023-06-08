import React from "react";


function Home() {

    return (
    
        <div name="home" className="h-screen w-full bg-gradient-to-b from-white via-white to-gray-400">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl sm:text-7xl font-bold">Hi there! I'm Kevin Salinas</h2>
                    <p className="py-4 max-w-md"> A Full-Stack Web Developer That Enjoys Transforming Ideas Into Tangible, Real-World Applications.</p>
                    <div className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                        <button>Resume</button>
                    </div>
                </div>
                <div>
                    <img className="rounded-2xl mx-auto w-2/6 md:w-full" src="/salinas_kevin.jpeg" alt="salinas_kevin_picture"/>
                </div>

            </div>
        </div>
  
    )
}

export default Home;

