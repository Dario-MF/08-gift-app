import React, { useState } from 'react'
import AddCategory from './Components/AddCategory'
import GridCategory from './Components/GridCategory'

const GiftExpertApp = () => {


    const [categories, setCategories] = useState(['One punch'])

    return (
        <>
            <h2>GiftExpertApp</h2>
            <hr></hr>
            <AddCategory setCategories={setCategories} />
            <ol>
                {
                    categories.map(category => (
                        <GridCategory category={category} key={category} />
                    ))
                }
            </ol>
        </>
    )
}

export default GiftExpertApp
