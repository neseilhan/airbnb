import React from "react"
import Navbar from "./Navbar"
import Hero from "./Hero"
import Card from "./Card"
import data from "./data"
/*
Challenge: Build the Hero component.
Check the Figma file for the design specifics.
*/

export default function App() {

    const cards = data.map(item =>{
    return (
        <Card
        key={item.id}
        {...item}
        />
    )
})
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
      
        </div>
    )
}