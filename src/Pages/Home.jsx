import { useEffect, useState } from "react";
import Card from "../Component/Card";
import Spinner from "../Component/Spinner";
// import { Await } from "react-router-dom";


export default function Home() {
    const url = "https://fakestoreapi.com/products";

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    async function itemData() {
        setLoading(true);

        try {
            let response = await fetch(url);
            let data = await response.json();
            setData(data);
        }
        catch (e) {
            console.log("Got An Error While Fetching");
            setData([]);
        }
        finally {
            setLoading(false);
        }


        // console.log(data);
    }

    useEffect(() => {
        itemData();
    }, [])


    return (
        <div className="grid-cols-4 min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-2 mb-12">
            {loading ? (
                <Spinner />
            ) : (
                data.map((element) => <Card key={element.id} element={element} />)
            )}
        </div>
    );

}