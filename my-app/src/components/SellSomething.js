import React from 'react'
import './SellSomething.css'

export default function SellSomething() {
    return (
        <form>
            <label htmlFor="name">Name of the Object</label>
            <label htmlFor="category">Category of the Item you are trying to sell</label>
            <label htmlFor="price">Price of the object in pkr</label>
            <label htmlFor="pictures">Pictures of the object</label>
            <label htmlFor="description">Describe the object you are trying to sell</label>
        </form>
    )
}
