import './App.css';
import Cardprod from './components/Card-prod';
import Card1link from './components/Card-1link';
import Card4link from './components/Card-4link';
import Navbar from './components/Navbar';

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
      <div className='body'>
        <div className="row">
          <Cardprod src={airpods.src} desc={airpods.desc} />
          <Card4link
            title={'Gaming accessories'}
            src1={'img/gadgets/headsets.jpg'}
            src2={'img/gadgets/keyboard.png'}
            src3={'img/gadgets/Chairs.jpg'}
            src4={'img/gadgets/cpu.jfif'} />
          <Card1link title={'Dresses'} src={'img/gadgets/dresses.jpg'} />
        </div>
      </div>
    </>
  );
}

export default App;
