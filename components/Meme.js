import React from "react"

function logUrl() {
    console.log("url")
}

export default function Meme() {
    return (
        <main>
            <form className="form">
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
            </form>
        </main>
    )
}