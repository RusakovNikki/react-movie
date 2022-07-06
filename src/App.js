import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={ <MainPage/> } />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
