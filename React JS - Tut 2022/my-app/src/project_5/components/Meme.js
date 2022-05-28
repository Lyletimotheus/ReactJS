import React from 'react';
import memesData from '../memesData'

function Meme() {
    const [memeImage, setMemeImage] = React.useState("");
    // console.log(memeImage);

    function newImage() {
        const memeArray = memesData.data.memes;
        const randomImage = memeArray[Math.floor(Math.random() * memeArray.length)];
        // console.log(randomImage.url);       
        
        return setMemeImage(randomImage.url);

    }

    
  return (
    <section className="form--section">
        <div className="form">
            <input type="text" placeholder='please enter top text' className="form--input"/>
            <input type="text" placeholder='please enter bottom text' className="form--input"/>
        </div>
        <button onClick={newImage}>Get a new meme image 🖼</button> 

        <img src={memeImage} alt="" className="memeImage"/>
        
    </section>
  )
}

export default Meme