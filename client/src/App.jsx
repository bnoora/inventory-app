import './App.css'
import SideNav from './component/SideNav'
import MainPage from './pages/MainPage'
import Categories from './pages/Categories'
import Products from './pages/Products'
import ProductPage from './pages/ProductPage'
import CatgoryPage from './pages/CatgoryPage'

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <SideNav />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/categories" element={<Categories/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/products/:id" element={<ProductPage/>} />
          <Route path="/categories/:id" element={<CatgoryPage/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
