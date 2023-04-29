import './App.css';
import Card4link from './components/Card-4link';
import Navbar from './components/Navbar';

// const airpods = {
//   src: 'img/gadgets/airpods 3.png',
//   desc: 'Apple AirPods Pro (2nd Generation) Wireless Earbuds, Up to 2X More Active Noise Cancelling, Adaptive Transparency, Personalized Spatial Audio, MagSafe Charging Case, Bluetooth Headphones for iPhone'
// }

// const cells = {
//   src: 'img/gadgets/cells.png',
//   desc: 'Amazon Basics 36-Pack AAA Alkaline High-Performance Batteries, 1.5 Volt, 10-Year Shelf Life'
// }

function App() {
  return (
    <>
      <Navbar/>
      <div className='body'>
        <Card4link/>
      </div>
    </>
  );
}

export default App;
