import './App.css';
import Cardprod from './components/Card-prod';
import Card1link from './components/Card-1link';
import Card4link from './components/Card-4link';
import Navbar from './components/Navbar';
import ImgSlider from './components/ImgSlider';
import Footer from './components/Footer';

const sliderImages =[
  'img/sliderimages/1.jpg',
  'img/sliderimages/2.jpg',
  'img/sliderimages/3.jpg',
  'img/sliderimages/4.jpg',
  'img/sliderimages/5.jpg',
]

const airpods = {
  src: 'img/gadgets/airpods 3.png',
  desc: 'Apple AirPods Pro (2nd Generation) Wireless Earbuds, Up to 2X More Active Noise Cancelling, Adaptive Transparency, Personalized Spatial Audio, MagSafe Charging Case, Bluetooth Headphones for iPhone'
}

// const cells = {
//   src: 'img/gadgets/cells.png',
//   desc: 'Amazon Basics 36-Pack AAA Alkaline High-Performance Batteries, 1.5 Volt, 10-Year Shelf Life'
// }

function App() {
  return (
    <>
      <Navbar />
      <ImgSlider images={sliderImages} />
      <div className='body'>
        <div className="row">
          {/* <Cardprod src={airpods.src} desc={airpods.desc} /> */}
          <Card4link
            title={'Electronics'}
            src1={'img/gadgets/headsets.jpg'} name1={'Headsets'}
            src2={'img/gadgets/keyboard.png'} name2={'Keyboard'}
            src3={'img/gadgets/Chairs.jpg'} name3={'Chairs'}
            src4={'img/gadgets/cpu.jfif'} name4={'CPU'} />
          <Card4link
            title={'Sports and outdoor'}
            src1={''} name1={''}
            src2={''} name2={''}
            src3={''} name3={''}
            src4={''} name4={''} />
          <Card4link
            title={'Toys and games'}
            src1={''} name1={''}
            src2={''} name2={''}
            src3={''} name3={''}
            src4={''} name4={''} />
          <Card1link title={'Clothing and accessories'} src={'img/gadgets/dresses.jpg'} />
          <Card1link title={'Home and garden'} src={''} />
          <Card1link title={'Health and beauty'} src={''} />
          <Card1link title={'Pet supplies'} src={''} />
          <Card1link title={'Books and media'} src={''} />
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default App;