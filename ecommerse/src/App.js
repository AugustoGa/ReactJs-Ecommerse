import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Routes/About';
import Contact from './Routes/Contact';
import Footer from './components/Footer';
import MyProvider from './context/CartContext';
import Cart from './components/Cart';
import { initializeApp } from "firebase/app";
import Checkout from './components/Checkout';
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0_6LaufSyPHz3L9w6poCb6e4uDyhq2P0",
  authDomain: "ecommerce-fadf8.firebaseapp.com",
  projectId: "ecommerce-fadf8",
  storageBucket: "ecommerce-fadf8.appspot.com",
  messagingSenderId: "765301777267",
  appId: "1:765301777267:web:8ab7adcc2a736e9eefdb06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


function App() {
  return (
    <>
    <BrowserRouter>
      <MyProvider>
        <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:id" element={<ItemListContainer category_id={""}/>}/>
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/producto/:id" element={<ItemDetailContainer/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkout" element={<Checkout/>} />
          </Routes>
        <Footer />
      </MyProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
