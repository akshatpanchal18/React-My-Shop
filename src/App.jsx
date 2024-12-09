import { BrowserRouter,Route,Routes,RouterProvider } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import About from './About'
import Products from './Products'
import Contact from './Contact'
import SingleProduct from './SingleProduct'
import Cart from './Cart'
import Error from './Components/Error'
import Footer from './Footer'
import CheckOut from './Components/CheckOut'
import ConfirmaPage from './Components/ConfirmPage'
import PlaceOrder from './Components/PlaceOrder'




function App() {
  

  return (
    <>
      <BrowserRouter future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}>
      <Navbar/>
      <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About/>} />
            <Route path='/products' element={<Products/>} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/singleproduct/:id' element={<SingleProduct/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/checkout' element={<CheckOut/>} />
            {/* <Route path='/checkout/:id/:title' element={<PlaceOrder/>} /> */}
            <Route path='/confirmpage' element={<ConfirmaPage/>} />
            <Route path='/*' element={<Error/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
