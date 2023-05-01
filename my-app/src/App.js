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
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  AuthErrorCodes,
  getAuth,
  signInWithEmailAndPassword
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3mBCz5MdvgQfESmeX1yzLqunSQ3HolDc",
  authDomain: "clone-261bf.firebaseapp.com",
  projectId: "clone-261bf",
  storageBucket: "clone-261bf.appspot.com",
  messagingSenderId: "205617641480",
  appId: "1:205617641480:web:0ca15ff9e6f1cfa84279bd",
  measurementId: "G-112YCVJJN9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

const sliderImages = [
  'img/sliderimages/1.jpg',
  'img/sliderimages/2.jpg',
  'img/sliderimages/3.jpg',
  'img/sliderimages/4.jpg',
  'img/sliderimages/5.jpg',
]

const showLoginError = (error) => {
  document.getElementById('loginpassword').style.border = '1.5px solid red'
  if (error.code === AuthErrorCodes.INVALID_PASSWORD) {
    document.getElementById('showError').innerHTML = 'Wrong Password. Try again'
  } else {
    document.getElementById('showError').innerHTML = `Error: ${error.message}`
  }
  setTimeout(() => {
    document.getElementById('showError').innerHTML = '';
    document.getElementById('loginpassword').style.border = '1.5px solid grey'
  }, 6000);
}

const loginEmailPassword = async (event) => {
  event.preventDefault();
  const signinEmail = document.getElementById('loginemail').value
  const signinPassword = document.getElementById('loginpassword').value
  try {
    const userCredential = await signInWithEmailAndPassword(auth, signinEmail, signinPassword)
    console.log(userCredential.user)
  } catch (error) {
    console.log(error);
    showLoginError(error);
  }
}

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
          <Login loginEmailPassword={loginEmailPassword} />
        </>} />
        <Route path="/signup" element={<>
          <Login loginEmailPassword={loginEmailPassword} />
        </>} />
      </Routes >
    </Router >
  );
}

export default App;