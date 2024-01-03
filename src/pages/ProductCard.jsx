// import axios from "axios";
import { useEffect, useState } from "react";
import food from "../assets/foods.webp"
import axios from "axios";
import { Select } from "antd";



const ProductCard = () => {
    const [recipeData, setRecipeData] = useState([]);
    const apiKey = '14345fed4a3c4e33b6240b254623580d';
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

    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    console.log(searchResults);

    console.log("value");
    const handleSearchChange = (value) => {
        setSearchQuery(value);
        console.log(searchQuery, "searchQuery");
        console.log(searchResults, "searchResults");
    };

    const endpoint2 = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${searchQuery}`;


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(endpoint2, {
                    params: {
                        apiKey: apiKey,
                        query: searchQuery,
                    },
                });
                setSearchResults(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if (searchQuery.trim() !== '') {
            fetchData();
        } else {
            setSearchResults([]);
        }
    }, [searchQuery]);

    return (
        <>
            <div className="w-full relative">
                <img style={{ width: "100%", minWidth: "1100px", height: "400px", objectFit: "cover" }} src={food}></img>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Select
                        style={{ width: "250px" }}
                        size='large'
                        placeholder="Search recipe here..."
                        showSearch
                        allowClear
                        onSearch={handleSearchChange}
                    />
                </div>
            </div>
            <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
                {searchResults &&
                    searchResults.results &&
                    searchResults.results.map((recipes, i) => (
                        <div key={i} className={`rounded-md border card-animation-${i + 1}`}>
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
        </>
    )

}

export default ProductCard