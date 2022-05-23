// ------------------------------------ IMPORTS START ------------------------------------
// *** PROJECT 1 IMPORTS ***
// import './project_1/App.css';
// import Header from './project_1/components/Header';
// import Page from './project_1/components/Page';

// *** PROJECT 2 IMPORTS ***
import Info from './project_2/components/Info';
import About from './project_2/components/About';
import Interests from './project_2/components/Interests';
import Footer from './project_2/components/Footer';
import './project_2/App.css';
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
function App() {
  return (
    <div className="card-container">
      <main>
        < Info />
        < About />
        < Interests />
        < Footer />
      </main>
    </div>
  );
}

export default App;
