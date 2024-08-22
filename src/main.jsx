import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//Components
import ErrorPage from './components/error/error-page';
// import ProductPage from './components/product-page/product-page;'
// import CartPage from './components/cart-page/cart-page;'
// import AboutPage from './components/about-page/about-page;'
// import HomePage from './components/home-page/home-page;'
// import NotFoundPage from './components/not-found-page/not-found-page;'

import './index.css'
import Root from './components/root/root'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
