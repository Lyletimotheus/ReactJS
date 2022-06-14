import React from 'react';
// import memesData from '../memesData'

function Meme() {

    const [meme, setMeme] = React.useState(
      {
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
      }
    );

    const [allMemes, setAllMemes] =  React.useState([]);

    // **** USING .then syntax to resolve a promise, with UseEffect ****

    // React.useEffect(() => {
    //   return fetch('https://api.imgflip.com/get_memes')
    //     .then(res => res.json())
    //     .then(data => setAllMemes(data.data.memes))
    // }, []);

    // **** USING ASYNC AWAIT WITH USEEFFECT ****
    
    React.useEffect(() => {
      async function getMemes() {
        const res = await fetch('https://api.imgflip.com/get_memes');
        const data = await res.json();
        setAllMemes(data.data.memes)
      }
      // Calling the above async function
      getMemes();

      // Provide a cleanup function if needed
      // return () => {

      // }
    }, [])

    console.log(allMemes) 

    function newImage() {

        const memeArray = allMemes;
        // console.log(allMemes);
        const randomObject = memeArray[Math.floor(Math.random() * memeArray.length)];
        const url = randomObject.url;
        
        setMeme((prevMemeImage) => {
          return {
            ...prevMemeImage,
            randomImage: url
          }
        })
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMemeState => {
          return {
            ...prevMemeState,
            // COMPUTED VALUE
            [name] : value
          }
        })
    }

  return (
    <section className="form--section">
        <div className="form">
            <input 
                type="text"
                placeholder='please enter top text'
                className="form--input"
                onChange={handleChange}
                name="topText"
                value={meme.topText}
            />
            <input 
                type="text" 
                placeholder='please enter bottom text' 
                className="form--input"
                onChange={handleChange}
                name="bottomText"
                value={meme.bottomText}
            />
            <button onClick={newImage}>Get a new meme image 🖼</button> 
        </div>
        <div className='meme'>
          <img src={meme.randomImage} alt="" className="memeImage"/>
          <h2 className='meme--text top'>{meme.topText}</h2>
          <h2 className='meme--text bottom'>{meme.bottomText}</h2>
        </div>
        
    </section>
  )
}

export default Meme