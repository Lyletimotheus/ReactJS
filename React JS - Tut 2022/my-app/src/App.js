// ------------------------------------ IMPORTS START ------------------------------------
// *** PROJECT 1 IMPORTS ***
// import './project_1/App.css';
// import Header from './project_1/components/Header';
// import Page from './project_1/components/Page';

// *** PROJECT 2 IMPORTS ***
// import Info from './project_2/components/Info';
// import About from './project_2/components/About';
// import Interests from './project_2/components/Interests';
// import Footer from './project_2/components/Footer';
// import './project_2/App.css';

// *** PROJECT 3 IMPORTS ***
// import Header from './project_3/components/Header';
// import Hero from './project_3/components/Hero';
// import Card from './project_3/components/Card';
// import './project_3/App.css';
// import cardImage1 from './project_3/assets/image_12.png';
// import cardImage2 from './project_3/assets/image_13.png';
// import cardImage3 from './project_3/assets/image_14.png';
// import cardImage4 from './project_3/assets/image_15.jpg';
// import cardImage5 from './project_3/assets/image_16.jpg';
// import data from './project_3/data';
// ------------------------------------ IMPORTS END --------------------------------------



// PROJECT 1 FUNCTION
// function App() {
//   return (
//     <div>
//       <Header />
//       <Page />
//     </div>
//   );
// }

// PROJECT 2 FUNCTION
// function App() {
//   return (
//     <div className="card-container">
//       <main>
//         < Info />
//         < About />
//         < Interests />
//         < Footer />
//       </main>
//     </div>
//   );
// }

// PROJECT 3 FUNCTION
/*function App() {
  const cards = data.map(dataProperty => {
    return <Card
              key = {dataProperty.id} 
              // text={dataProperty.title} 
              // rating={dataProperty.stats.rating} 
              // ratingTotal={dataProperty.stats.ratingTotal}
              // country={dataProperty.country}
              // amount ={dataProperty.price}
              // img = {dataProperty.coverImg}
              // status = {dataProperty.openSpots}
              // location = {dataProperty.location}

              // ******* INSTEAD OF FETCHING PROPS INDIVIDUALLY WE PASS IT IN AS A OBJECT LIKE WE DO BELOW ***** 
              // dataProperty = {dataProperty}

              // ******* OR WE CAN USE THE SPREAD OPERATOR TO DO THIS *****
              {...dataProperty}
              
                THE ABOVE IS JUST DOING THE FOLLOWING:(MUCH MORE ELEGANT WAY OF WRITING CODE)
                id = {dataProperty.id}
                title = {dataProperty.title}
                description = {dataProperty.description}
              
            />
  });
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <section className='cards'>
          {cards}
         </section>
       </main>
    </div>
  );
}
*/

// function App() {
//   return (
//     <div>
//       <Header />
//       <main>
//         <Hero />
//         <section className='cards'>
//           <Card 
//             isSoldOut = {true}
//             img = {cardImage1}
//             rating = {5.0}
//             ratingTotal = {6}
//             country = "USA"
//             text = "Life lessons with Katie Zaferes"
//             amount = {136}
//           />
//           <Card 
//             status  = {true}
//             img = {cardImage2}
//             rating = {5.0}
//             ratingTotal = {30}
//             country = "USA"
//             text = "Learn wedding photography"
//             amount = {125}
//           />
//           <Card
//             img = {cardImage3}
//             rating = {4.8}
//             ratingTotal = {2}
//             country = "USA"
//             text = "Group Mountain Biking"
//             amount = {50}
//           />
//           <Card
//             img = {cardImage4}
//             rating = {3.5}
//             ratingTotal = {19}
//             country = "USA"
//             text = "Group Coffee Mastery"
//             amount = {150}
//           />
//           <Card 
//             img = {cardImage5}
//             rating = {5.0}
//             ratingTotal = {209}
//             country = "USA"
//             text = "Skydiving"
//             amount = {240}
//           />
//         </section>
//       </main>
//     </div>
//   );
// }

// PROJECT 4 FUNCTION
function App() {
  return (
    <div>App</div>
  );
}

export default App;
