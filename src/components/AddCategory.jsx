import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        const newValue = inputValue.trim();
        if (newValue.length <= 1) return;

        // setCategories(categories => [inputValue, ...categories])

        onNewCategory(newValue);
        setInputValue('')
    }

    return (
        <form onSubmit={e => onSubmit(e)}>
            <input type="text"
                placeholder='Buscar gifs'
                value={inputValue}
                onChange={(e) => onInputChange(e)}
            />
        </form>
    )
};