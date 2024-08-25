import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//Components
import ErrorPage from './components/error/error-page';
// import ProductPage from './components/product-page/product-page;'
import CartPage from './components/cart/Cart.jsx';
import AboutPage from './components/about/About.jsx';
import Index from './routes/index/Index.jsx';
// import NotFoundPage from './components/not-found-page/not-found-page;'

import './index.css'
import Root, {loader as rootLoader} from './routes/root/Root.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
