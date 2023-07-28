import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        else setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                // setCategories={setCategories}
                onNewCategory={value => onAddCategory(value)}
            />
            {
                categories.map((category) => {
                    return (
                        <GifGrid key={category} category={category} />
                    )
                })
            }
        </>
    )
};

export default GifExpertApp;