import React from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Features from "./Pages/Features";
import Pricing from "./Pages/Pricing";
import Contact from "./Pages/Contact";
import PageNotFound from "./Pages/PageNotFound";
import UserDisplay from "./components/UserDisplay";

function App() {
  return(
    <> 
      <BrowserRouter>
       <Navbar/>
       <div className="page_view">
        <div className="container">
          <Routes>
            <Route path='/index' element={<Home/>}/>
             <Route path='/features' element={<Features/>}/>
              <Route path='/pricing' element={<Pricing/>}/>
               <Route path='/contact' element={<Contact/>}/>
               <Route  path='team' element={<UserDisplay/>}/>
               <Route path='/*' element={<PageNotFound/>}/>
          </Routes>
        </div>
       </div>
      </BrowserRouter>

    </>
  )
}

export default App;









































  {/* <Cards />
      <Cards /> */}
      {/* <Table/>
      <TernaryOperator/> */}
      {/* <UserDisplay/>
      <UserDisplay/> */}
      {/* <Title/>
      <ShowsDisplay/>
   */}
       {/* <div  className="parent">
        <Props user="MOON"  img="https://images.unsplash.com/photo-1770723963275-d7644b1e6e6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D"/>
        <Props user="SUN" img="https://plus.unsplash.com/premium_photo-1681488104322-8bd081b57509?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHN1bnxlbnwwfHwwfHx8MA%3D%3D"/>
       </div> */}
    






// import Cards from "./components/Cards";
// import Table from "./components/Table";
// import TernaryOperator from "./components/TernaryOprator";
// import UserDisplay from "./components/UserDisplay";
// import UserCard from "./components/UserCard"
// import ShowsCard from "./Mini Project/ShowsCard";
// import ShowsDisplay from "./Mini Project/ShowsDisplay";
// import Title from "./Mini Project/Title";
// import Props from './Props/Props'



























































// import React from "react";

// const Head = () => {
//     const name = "Munendra Yaduvanshi";
//     const styleCSS = {
//         textAlign: 'center',
//         backgroundColor: '#cadbca',
//         color: 'magenta',
//         fontSize: '65px',
//         padding: '20px',
//         marginTop: '20px'
//     }
//     return (
//         <>
//             <div style={{
//                 width: '100vh',
//                 height: '200px',
//                 margin: '10px',
//                 padding: '20px',
//                 backgroundColor: 'rgba(154, 165, 165, 0.48)'}}>
//             <h1>Hello {name}</h1>
//             <p>Hello , thanks for Giveing me  this great opportunities , My Name is  munendra yaduvanshi . i have recently completed my graduction  </p>
//         </div >
//             <h4 style={styleCSS}>Here is the student list</h4>
//         </>
//     );
// }

// export default Head;




