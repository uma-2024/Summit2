import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import Roadmap from './components/Roadmap/Roadmap';
import FaqContainer from './components/FaqContainer/FaqContainer';
import NewsBlogs from './components/NewsBlogs/NewsBlogs';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import CircleGradient from './components/CircleGradient';
import Aboutus from './components/Aboutus/Aboutus';
import FormComponent from './components/FormComponent/FormComponent';
import GStacking from './components/GStacking/GStacking';
import FormComponent2 from './components/FormComponent2/FormComponent2';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<>
            <Header />
            <WhyChooseUs />
            <Aboutus />
            <Roadmap />
            <NewsBlogs />
            <FaqContainer />
            <FormComponent />
            <Footer />
            <CircleGradient />
          </>} />
          <Route path="/unite-to-earn" element={<GStacking/>} />
          <Route path="/unite-form" element={<FormComponent2/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;