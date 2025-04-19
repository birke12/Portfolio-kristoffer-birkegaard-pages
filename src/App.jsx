import { useRoutes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import ScrollToHashElement from "./components/ScrollToHashElement/ScrollToHashElement";
import CvResume from "./pages/cvResume/CvResume";






function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/cvresume", element: <CvResume /> },
  
  ]);

  return (
    <>
      <div className="app">
        <Navigation  />
        <div className="content">{routes}</div>
   
        <Footer />
        <ScrollToHashElement />
      </div>
    </>
  );
}

export default App;
