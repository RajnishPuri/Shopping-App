import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from '../Redux/slice/CartSlice';


export default function Card(props) {
    const { element } = props;
    const { title } = element;
    const titleNew = title.slice(0, 15) + "...";
    const { price } = element;
    const { description } = element;
    const desc = description.slice(0, 50) + "...";
    const { image } = element;
    // console.log(title);

    const { cart } = useSelector((state) => state);
    const dispatch = useDispatch();

    function addFromCart() {
        console.log("Added");
        console.log(element.id);
        dispatch(add(element));
    }

    function removeFromCart() {
        dispatch(remove(element.id));
    }


    return (
        <div className="group hover:scale-110 transition duration-300 ease-in flex flex-col items-center justify-between shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024] gap-3 p-4 mt-10 ml-5  rounded-xl">
            <p className=" truncate w-40 mt-1 text-gray-700 font-semibold text-lg  text-left">{titleNew}</p>
            <p className="  w-40 text-gray-400 font-normal text-[10px] text-left">{desc}</p>
            <div className=" h-[180px]">
                <img className="h-full w-full object-contain" src={image} alt="Item Image" />
            </div>
            <div className="flex justify-between w-full">
                <p className="text-green-600 font-semibold">$ {price}</p>

                {
                    cart.some((p) => p.id == element.id) ?
                        <button onClick={() => { removeFromCart(element) }} className="group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide">
                            REMOVE FROM CART
                        </button>
                        :
                        <button onClick={() => { addFromCart(element) }} className="group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide">
                            ADD TO CART
                        </button>
                }


            </div>
        </div>



    );
}
