import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Card1link from './components/Card-1link';
import Card4link from './components/Card-4link';
import Navbar from './components/Navbar';
import ImgSlider from './components/ImgSlider';
import Footer from './components/Footer';
import Login from './components/Login';

const sliderImages = [
  'img/sliderimages/1.jpg',
  'img/sliderimages/2.jpg',
  'img/sliderimages/3.jpg',
  'img/sliderimages/4.jpg',
  'img/sliderimages/5.jpg',
]

function App() {
  return (
    <Router>

      <Routes >
        <Route exact path="/" element={<>
      <Navbar />
          <ImgSlider images={sliderImages} />
          <div className='body'>
            <div className="row">
              <Card4link
                title={'Electronics'}
                name1={'Headsets'}
                name2={'Airpods'}
                name3={'Iphone 14'}
                name4={'Camera'} />
              <Card4link
                title={'Sports and outdoor'}
                name1={'Football'}
                name2={'Watch'}
                name3={'Drones'}
                name4={'Binoculars'} />
              <Card4link
                title={'Toys and games'}
                name1={'Chairs'}
                name2={'CPU'}
                name3={'Spinner'}
                name4={'Playstation'} />
              <Card1link title={'Clothing and accessories'} />
              <Card1link title={'Home and garden'} />
              <Card1link title={'Health and beauty'} />
              <Card1link title={'Pet supplies'} />
              <Card1link title={'Books and media'} />
            </div>
          </div>
      <Footer />
        </>} />
        <Route path="/signin" element={<>
          <Login/>
        </>}/>
      </Routes >
    </Router >
  );
}

export default App;