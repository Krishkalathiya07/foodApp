// import axios from "axios";
import { useEffect, useState } from "react";

import axios from "axios";

const ProductCard = () => {
    const [recipeData, setRecipeData] = useState([]);
    const apiKey = 'c911a1789e0d4d3c9f0ff8db438eefda';
    const endpoint = 'https://api.spoonacular.com/recipes/complexSearch';
   
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(endpoint, {
                    params: {
                        apiKey: apiKey,
                        
                    },
                });
                setRecipeData(response.data.results);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
            {recipeData.map((recipes, i) => (
                <div key={i} className="rounded-md border">
                    <img
                        src={recipes?.image}
                        alt="Laptop"
                        className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
                    />
                    <div className="p-4">
                        <h1 className="inline-flex items-center text-lg font-semibold">{recipes?.title}</h1>
                    </div>
                </div>
            ))}
        </div>
    )

}

export default ProductCard