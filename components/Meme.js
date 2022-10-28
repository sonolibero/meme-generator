import React from "react"
import memesData from "./memesData"

export default function Meme() {
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={logUrl}
                >
                    Get a new meme image 🖼
                </button>
            </div>
        </main>
    )
}

function logUrl() {
    console.log(memesData.data.memes[Math.floor(Math.random()*memesData.data.memes.length)].url)
}