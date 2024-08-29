import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//Components
import ErrorPage from './components/error/error-page';
import CartPage from './components/cart/Cart.jsx';
import AboutPage from './components/about/About.jsx';
import Index from './routes/index/Index.jsx';
import Checkout from './components/checkout/Checkout.jsx';
import CheckoutCompletedPage from './components/checkOutCompletedPage/CheckOutCompleted.jsx';
// import NotFoundPage from './components/not-found-page/not-found-page;'

//Actions
import { action as checkoutAction } from './components/checkout/Checkout.jsx';

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
      },
      {
        path: "cart/checkout",
        element: <Checkout />,
        action: checkoutAction,
      },
      {
        path: "cart/checkout/completed",
        element: <CheckoutCompletedPage />,
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
