import Navbar from "./components/Navbar"
import About from "./pages/About"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App

// Se não utilizasse o router do React, teria que fazer um switch case para cada rota

// import Navbar from "./components/Navbar"
// import About from "./pages/About"
// import Home from "./pages/Home"
// import Contact from "./pages/Contact"

// function App() {
//   let component;
//   let route = window.location.pathname;

//   switch (route) {
//     case "/":
//       component = <Home />;
//       break;
//     case "/about":
//       component = <About />;
//       break;
//     case "/contact":
//       component = <Contact />;
//       break;
//     default:
//       component = <Home />;
//       break;
//   }

//   return (
//     <>
//       <Navbar />
//       {component}
//     </>
//   )
// }

// export default App