import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CheckoutPage from './pages/CheckoutPage';
import PaymentStatusPage from './pages/PaymentStatusPage';
import AddProductPage from './pages/AddProductPage';
import Topnav from './Homepagecmp/Topnav';
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/HomePage",
    element: <HomePage/>,
  },
  {
    path: "/ProductListingPage",
    element: <ProductListingPage/>,
  },
  {
    path: "/ProductDetailPage",
    element: <ProductDetailPage/>,
  },
  
  {
    path: "/CheckoutPage",
    element: <CheckoutPage/>,
  },
  {
    path: "/PaymentStatusPage",
    element: <PaymentStatusPage/>,
  },
  {
    path: "/AddProductPage",
    element: <AddProductPage/>,
  },
  {
    path: "/Topnav",
    element: <Topnav/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
