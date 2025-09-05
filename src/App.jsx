import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import ProductDetailPage from './pages/ProductDetailPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import CheckoutPage from './pages/CheckoutPage';
import ProtectedRoute from './routes/ProtectedRoute';
export default function App() {
return (
<layout>
<routes>
<route path="/" element="{&lt;HomePage">} />
<route path="/catalog" element="{&lt;CatalogPage">} />
<route path="/product/:id" element="{&lt;ProductDetailPage">} />
<route path="/login" element="{&lt;LoginPage">} />
<route path="/register" element="{&lt;RegisterPage">} />
<route path="/profile" element="{">
<profilepage>
}
    /&gt;
    &lt;route path="/checkout" element="{"&gt;
          &lt;checkoutpage&gt;
        
      }
    /&gt;
    &lt;route path="*" element="{&amp;lt;Navigate" to="/"&gt;} /&gt;
  &lt;/routes&gt;
&lt;/layout&gt;
);
}
