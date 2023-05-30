import { useState } from 'react'
import { BsArrowLeftShort } from "react-icons/bs";
// import { VscHome } from "react-icons/vsc";


function App() {

  const [open, setOpen] = useState(true)
  
  //fyi: ALEX used a regular side nav bar using something similar to tailwind css 
  //or regular css, i don't know...

  return (

    <div className="flex">
      <div 
        className={`bg-dark-purple h-screen p-5 pt-8 ${open ? "w-72" : "width:5rem"} duration-300 relative`}>
        <BsArrowLeftShort 
          className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${!open && "rotate-180"}`} 
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex">
          <h1 className="bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2">ks</h1>
          <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && "scale-0"}`}>{!open ? "" : "Kevin Salinas"}</h1>
        </div>
      </div>
      <div className="p-7"><h1 className="text-2xl font-semibold">Home Page</h1></div>

    </div>
    
  );
}

export default App;
