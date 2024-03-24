// import "./App.css";
// import { useState, useEffect } from "react";
// import logo from './assets/logo.png';
// import { Route, Routes, navLink, Navigate } from "react-router-dom";
// import Home from "./Pages/Home";
// import Cart from "./Pages/Cart";
// function App() {
//   const data = {
//     state: ["Assam", "Bihar", "Punjab", "Himachal Pradesh"],
//     district: ["Dispur", "Patna", "Chandigarh", "Shimla"],
//     city: ["City1", "City2", "City3", "City4"],
//   };

//   const [printData, setPrintData] = useState([]);
//   const [item, setItem] = useState("state");
//   useEffect(() => {
//     setPrintData(data[item]);
//   }, [item]);

//   function clickHandler(value) {
//     setItem(value);
//   }

//   return (
//     <div className=" flex flex-col items-center">
//       <nav className=" flex mt-4 ">
//         <ul className=" flex gap-3">
//           <li
//             className=" border border-black p-1 bg-cyan-200 rounded-md cursor-pointer"
//             onClick={() => {
//               clickHandler("state");
//             }}
//           >
//             State
//           </li>
//           <li
//             className=" border border-black p-1 bg-cyan-200 rounded-md cursor-pointer"
//             onClick={() => {
//               clickHandler("district");
//             }}
//           >
//             District
//           </li>
//           <li
//             className=" border border-black p-1 bg-cyan-200 rounded-md cursor-pointer"
//             onClick={() => {
//               clickHandler("city");
//             }}
//           >
//             City
//           </li>
//         </ul>
//       </nav>
//       <div className=" mt-10 w-2/3 bg-cyan-200 h-[200px] border flex flex-col items-center">
//         <h1>{item}</h1>
//         <div className=" h-full flex justify-around flex-col">
//           {printData.map((element, index) => (
//             <p key={index}>{element}</p>
//           ))}
//         </div>





//       </div>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className=" w-screen h-screen">
//       <div>
//         {/* Nav Part */}
//         <nav className="w-screen h-20 flex bg-[#0F172A] p-3 justify-center">
//           <div className="flex items-center justify-between w-9/12">
//             <img className=" w-36 cursor-pointer" src={logo} alt="logo" />
//             <div className=" flex items-center w-24 justify-between">
//               <h1 className=" text-white flex justify-center hover:text-green-400 transition transform duration-200 cursor-pointer" navLink="/">Home</h1>
//               <div class="relative"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" class=" text-white text-2xl cursor-pointer hover:text-green-400 transition transform duration-200" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg></div>
//             </div>

//           </div>



//         </nav>
//         {/* Main Part */}
//         <Routes>
//           <Route path="/" element={Home}></Route>
//           <Route path="/cart" element={Cart}></Route>
//         </Routes>


//       </div>

//     </div>

//   )


// }

// export default App;
import "./App.css";
import { useState, useEffect } from "react";
import logo from './assets/logo.png';
import { Route, Routes, NavLink, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import { useSelector } from "react-redux";


function App() {

  const { cart } = useSelector((state) => state);
  console.log(cart.length);
  return (
    <div className=" w-screen h-screen overflow-x-hidden">
      <div>
        {/* Nav Part */}
        <nav className="w-screen h-20 flex bg-[#0F172A] p-3 justify-center">
          <div className="flex items-center justify-between w-10/12">
            <NavLink to="/">
              <img className=" w-36 cursor-pointer" src={logo} alt="logo" />
            </NavLink>
            <div className=" flex items-center w-24 justify-between">
              <NavLink to="/" className="text-white flex justify-center hover:text-green-400 transition transform duration-200 cursor-pointer">Home</NavLink>

              <div className="relative">
                <NavLink to="/cart">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className=" text-white text-2xl cursor-pointer hover:text-green-400 transition transform duration-200" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path>
                  </svg>
                </NavLink>
                {
                  cart.length > 0 ? (<div className="absolute bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce -top-1 -right-2 rounded-full top- text-white">
                    {cart.length}
                  </div>) : ""
                }

              </div>
            </div>
          </div>
        </nav>
        {/* Main Part */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
