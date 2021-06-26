import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = e => {
        setInputValue(e.target.value);
    }
    
    const handdleSubmit = e => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        } else {
            alert('Coloca una categoria real como: Anime, League Of Legends; etc.')
        }
        // console.log('Submit Hecho');
        
    }
    
    return (
        <form onSubmit={handdleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
