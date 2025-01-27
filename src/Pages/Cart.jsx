// Cart.js
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItem from "../Component/CartItem";
import { useDispatch } from "react-redux";
import EmptyCart from "../Component/EmptyCart";
import {loadStripe} from '@stripe/stripe-js';


export default function Cart() {
    const Navigate = useNavigate();
    const { cart } = useSelector((state) => state);

    const [items, setItems] = useState(cart.length);
    const [email, setEmail] = useState("");

    async function checkoutHandler(){
        const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

        const body = {
            products:cart,
            email:email
        }

        const headers = {
            "Content-Type":"application/json"
        }

        const response = await fetch("http://localhost:3000/create-checkout-session", {
            method:"POST",
            headers:headers,
            body:JSON.stringify(body)
        })

        const session = await response.json();

        const result = stripe.redirectToCheckout({
            sessionId:session.id
        })

        if(result.error){
            console.log(result.error)
        }

    }

    if (items === 0) {
        return (
            <EmptyCart />
        )
    }

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setTotalPrice(cart.reduce((acc, curr) => acc + curr.price, 0));
    }, [cart]);

    return (
        <div>
            {
                cart.length > 0 ? <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">
                    <div className="w-[100%] md:w-[60%] flex flex-col p-2">
                        {cart.map((element, index) => (
                            <CartItem key={element.id} element={element} />
                        ))}
                    </div>
                    <div className="w-[100%] md:w-[40%] mt-5  flex flex-col">
                        <div className="flex flex-col p-5 gap-5 my-14  h-[100%] justify-between">
                            <div className="flex flex-col gap-5 ">
                                <div className="font-semibold text-xl text-green-800 ">Your Cart</div>
                                <div className="font-semibold text-5xl text-green-700  -mt-5">Summary</div>
                                <div className="text-gray-700 font-semibold text-xl">Total Item : {cart.length}</div>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-xl font-bold">Total Amount : ${totalPrice}</p>
                                <input type="email" placeholder="Enter your email" className="p-2 border-2 border-gray-400 rounded-lg" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl" onClick={checkoutHandler}>CHECKOUT NOW</button>
                            </div>

                        </div>

                    </div>

                </div>
                    :
                    (<EmptyCart />)

            }
        </div>


    );
}
