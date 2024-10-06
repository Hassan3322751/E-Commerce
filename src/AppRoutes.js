import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CartPage from './pages/Cart/CartPage';
import HomePage from './pages/Home/HomePage';
import AuthRoute from './components/AuthRoute/AuthRoute';
import OrderTrackPage from './pages/OrderTrack/OrderTrackPage';
import OrdersPage from './pages/Orders/OrdersPage';

import LoginPage from './pages/Login/LoginPage';
import RegisterPage from './pages/Register/RegisterPage';
import ProfilePage from './pages/Profile/ProfilePage';
import Dashboard from './pages/Dashboard/Dashboard';
import AdminRoute from './components/AdminRoute/AdminRoute';
import UsersPage from './pages/UsersPage/UsersPage';
import UserEditPage from './pages/UserEdit/UserEditPage';

import FoodsAdminPage from './pages/FoodsAdmin/FoodsAdminPage';
import FoodEditPage from './pages/FoodEdit/FoodEditPage';
import FoodPage from './pages/Food/FoodPage';

import CheckoutPage from './pages/Checkout/CheckoutPage';
import PaymentPage from './pages/Payment/PaymentPage';
import JazzPay from './pages/Payment/JazzPayPage';
import PayFailed from './pages/PamentStatus/payFailed';
import PaySuccess from './pages/PamentStatus/paySuccess';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search/:searchTerm" element={<HomePage />} />
      <Route path="/tag/:tag" element={<HomePage />} />
      <Route path="/food/:id" element={<FoodPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/checkout"
        element={
          <AuthRoute>
            <CheckoutPage />
          </AuthRoute>
        }
      />
      <Route
        path="/payment"
        element={
          <AuthRoute>
            <PaymentPage />
          </AuthRoute>
        }
      />
      <Route
        path="/PaymentFailed"
        element={
            <PayFailed />
        }
      />
      <Route
        path="/PaymentSuccess"
        element={
            <PaySuccess />
        }
      />
      <Route
        path="/JazzPay"
        element={
          <AuthRoute>
            <JazzPay />
          </AuthRoute>
        }
      />
      <Route
        path="/track/:orderId"
        element={
          <AuthRoute>
            <OrderTrackPage />
          </AuthRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <AuthRoute>
            <ProfilePage />
          </AuthRoute>
        }
      />
      <Route
        path="/orders/:filter?"
        element={
          <AuthRoute>
            <OrdersPage />
          </AuthRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <AuthRoute>
            <Dashboard />
          </AuthRoute>
        }
      />
      <Route
        path="/admin/foods/:searchTerm?"
        element={
          <AdminRoute>
            <FoodsAdminPage />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/addFood"
        element={
          <AdminRoute>
            <FoodEditPage />
          </AdminRoute>
        }
      />
      <Route
        path="/admin/editFood/:foodId"
        element={
          <AdminRoute>
            <FoodEditPage />
          </AdminRoute>
        }
      />
      <Route
        path="/admin/users/:searchTerm?"
        element={
          <AdminRoute>
            <UsersPage />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/editUser/:userId"
        element={
          <AdminRoute>
            <UserEditPage />
          </AdminRoute>
        }
      />
    </Routes>
  );
}
