import './App.css';
import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Card1link from './components/Card-1link';
import Card4link from './components/Card-4link';
import CardProd from './components/Card-prod';
import Navbar from './components/Navbar';
import ImgSlider from './components/ImgSlider';
import Footer from './components/Footer';
import Login from './components/Login';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  AuthErrorCodes,
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from 'firebase/auth';
import {
  getDatabase,
  ref as databaseRef,
  get,
  set
} from 'firebase/database';
import {
  getStorage,
  ref as storageRef,
  uploadBytesResumable
} from "firebase/storage";

import SellSomething from './components/SellSomething';
import { v4 as uuidv4 } from 'uuid';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


function App() {
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
  const db = getDatabase(app);
  const storage = getStorage(app);

  const [loggedin, setLoggedin] = useState(false)

  // console.log(uuidv4())
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
      window.location.href = '/';
    } catch (error) {
      console.log(error);
      showLoginError(error);
    }
  }

  const createAccount = async (event) => {
    event.preventDefault();
    const signinName = document.getElementById('loginname').value
    const signinEmail = document.getElementById('loginemail').value
    const signinPassword = document.getElementById('loginpassword').value
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, signinEmail, signinPassword)

      set(databaseRef(db, 'users/' + userCredential.user.uid), {
        name: signinName,
        email: signinEmail
      })
        .then(() => {
          console.log('User data successfully saved')
        })
        .catch((error) => {
          console.log('error: ' + error)
        });

      window.location.href = '/';
    } catch (error) {
      console.log(error);
      showLoginError(error);
    }
  }
  const [name, setName] = useState('Sign in')
  const [userUid, setUserUid] = useState(null)
  const monitorAuthState = async () => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUserUid(user.uid)
        // console.log(user)
        setLoggedin(true);
        get(databaseRef(db, 'users/' + user.uid)).then((snapshot) => {
          setName(snapshot.val().name)
        }).catch((error) => {

          console.error(error);
        });
      } else {
        userUid(null)
        setName('Sign in')
        setLoggedin(false);

        console.log('You are not Logged in.')
      }
    })
  }
  monitorAuthState();

  const logout = async () => {
    await signOut(auth);
  }

  const [products, setProducts] = useState()

  useEffect(() => {
    get(databaseRef(db, 'products')).then((snapshot) => {
      let updateProducts = [];
      for (const index in snapshot.val()) {
        updateProducts.push(snapshot.val()[index]);
      }
      setProducts(updateProducts);
    }).catch((error) => {
      console.error(error);
    });
  }, [db]);

  const postAdd = (event) => {
    event.preventDefault();

    const productId = uuidv4();
    const name = document.getElementById('title').value
    const desc = document.getElementById('description').value
    const category = document.getElementById('category').value
    const price = document.getElementById('price').value
    const file1 = document.getElementById('file1').files[0];
    const file2 = document.getElementById('file2').files[0];
    const file3 = document.getElementById('file3').files[0];
    const file4 = document.getElementById('file4').files[0];
    const file5 = document.getElementById('file5').files[0];

    console.log(`Name: ${name}, Description: ${desc}, Category: ${category}, Price: ${price}, File1: ${file1}, File2: ${file2}, File3: ${file3}, File4: ${file4}, File5: ${file5}, `)
    //Upoading Data

    set(databaseRef(db, 'products/' + productId), {
      name: name,
      desc: desc,
      category: category,
      price: price,
      id:productId,
      owner: userUid
    })
      .then(() => {
        console.log('Product successfully saved')
      })
      .catch((error) => {
        console.log('error: ' + error)
      });

    //Uploading Images
    const metadata = {
      contentType: file1.type,
    };
    const storageRef1 = storageRef(storage, `Product Images/${productId}/${file1.name}`);
    const uploadTask1 = uploadBytesResumable(storageRef1, file1, metadata);

    const storageRef2 = storageRef(storage, `Product Images/${productId}/${file2.name}`);
    const uploadTask2 = uploadBytesResumable(storageRef2, file2, metadata);

    const storageRef3 = storageRef(storage, `Product Images/${productId}/${file3.name}`);
    const uploadTask3 = uploadBytesResumable(storageRef3, file3, metadata);

    const storageRef4 = storageRef(storage, `Product Images/${productId}/${file4.name}`);
    const uploadTask4 = uploadBytesResumable(storageRef4, file4, metadata);

    const storageRef5 = storageRef(storage, `Product Images/${productId}/${file5.name}`);
    const uploadTask5 = uploadBytesResumable(storageRef5, file5, metadata);

    // uploadTask.on(
    //   'state_changed',
    //   (snapshot) => {
    //     // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    //     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //     console.log('Upload is ' + progress + '% done');
    //     switch (snapshot.state) {
    //       case 'paused':
    //         console.log('Upload is paused');
    //         break;
    //       case 'running':
    //         console.log('Upload is running');
    //         break;
    //       default:
    //         break;
    //     }
    //   },
    //   (error) => {
    //     // A full list of error codes is available at
    //     // https://firebase.google.com/docs/storage/web/handle-errors
    //     switch (error.code) {
    //       case 'storage/unauthorized':
    //         // User doesn't have permission to access the object
    //         break;
    //       case 'storage/canceled':
    //         // User canceled the upload
    //         break;

    //       // ...

    //       case 'storage/unknown':
    //         // Unknown error occurred, inspect error.serverResponse
    //         break;
    //       default:
    //         break;
    //     }
    //   });

    // window.location.href = '/';
  }

  return (
    <Router>

      <Routes >
        <Route exact path="/" element={<>
          <Navbar logout={logout} name={name} loggedin={loggedin} />
          <ImgSlider images={sliderImages} />
          <div className='body'>
            <div className="row">
              <Card4link
                title={'Electronics'}
                name1={'Headsets'}
                name2={'Airpods'}
                name3={'Iphone 14'}
                name4={'Camera'}
                goto={'/'} />
              <Card4link
                title={'Sports and outdoor'}
                name1={'Football'}
                name2={'Watch'}
                name3={'Drones'}
                name4={'Binoculars'}
                goto={'/'} />
              <Card4link
                title={'Toys and games'}
                name1={'Chairs'}
                name2={'CPU'}
                name3={'Spinner'}
                name4={'Playstation'}
                goto={'/'} />
              <Card1link title={'Clothing and accessories'} goto={'/'} />
              <Card1link title={'Home and garden'} goto={'/'} />
              <Card1link title={'Health and beauty'} goto={'/'} />
              <Card1link title={'Pet supplies'} goto={'/'} />
              <Card1link title={'Books and media'} goto={'/'} />
              <Card1link title={'Shop all'} goto={'/all'} />
            </div>
          </div>
          <Footer />
        </>} />
        <Route path="/signin" element={<>
          <Login purpose={'Sign in'} account={loginEmailPassword} />
        </>} />
        <Route path="/signup" element={<>
          <Login purpose={'Create Account'} account={createAccount} />
        </>} />
        <Route path="/sellsomething" element={<>
          <SellSomething postAdd={postAdd} loggedin={loggedin} />
        </>} />
        <Route path="/all" element={
          <>

            <Navbar logout={logout} name={name} loggedin={loggedin} />
            {products && products.map((data, index) => (
              <React.Fragment key={index}>
                <CardProd name={data.name} desc={data.desc} />
              </React.Fragment>
            ))}
            <Footer />
          </>
        } />
      </Routes >
    </Router >
  );
}

export default App;