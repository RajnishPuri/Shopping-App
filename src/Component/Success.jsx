import { useNavigate } from "react-router-dom";

export default function Success() {
    const Navigate = useNavigate();
    return (
        <div className="flex justify-center items-center" style={{ minHeight: `calc(100vh - 80px)` }}>
            <div className="flex flex-col justify-center">
                <h1 className="text-gray-700 font-semibold text-xl mb-2">Your Payment is Successful!</h1>
                <button className="bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider" onClick={() => {
                    Navigate('/');
                }}>SHOP NOW</button>
            </div>
        </div>
    );
}