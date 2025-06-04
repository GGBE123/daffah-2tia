import { useState } from 'react'
import './assets/tailwind.css'
import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Customers = React.lazy(() => import('./pages/Customers'));
const Orders = React.lazy(() => import('./pages/Orders'));
const AddCustomer = React.lazy(() => import("./pages/AddCustomer"));
const AddOrder = React.lazy(() => import("./pages/AddOrder"));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const ErrorA = React.lazy(() => import('./pages/ErrorA'));
const ErrorB = React.lazy(() => import('./pages/ErrorB'));
const ErrorC = React.lazy(() => import('./pages/ErrorC'));
const MainLayout = React.lazy(() => import('./layouts/MainLayout'));
const AuthLayout = React.lazy(() => import('./layouts/AuthLayout'));
const GuestLayout = React.lazy(() => import('./layouts/GuestLayout'));
const Login = React.lazy(() => import('./pages/auth/Login'));
const Forgot = React.lazy(() => import('./pages/auth/Forgot'));
const Register = React.lazy(() => import('./pages/auth/Register'));
const Guesthome = React.lazy(() => import('./pages/guest/Guesthome'));
const ProductCheck = React.lazy(() => import('./pages/guest/ProductCheck'));
import Loading from './components/Loading';
import ListoUsers from './pages/ListoUsers';
import Notes from './pages/Notes';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Guest Routes */}
        <Route element={<GuestLayout />}>
          <Route path="/guest" element={<Guesthome />} />
          <Route path="/guest/product-check" element={<ProductCheck />} />
        </Route>

        {/* Main App Routes */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/listousers" element={<ListoUsers />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/customers/add" element={<AddCustomer />} />
          <Route path="/orders/add" element={<AddOrder />} />
        </Route>

        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        {/* Error Routes */}
        <Route>
          <Route path="/ErrorA" element={<ErrorA />} />
          <Route path="/ErrorB" element={<ErrorB />} />
          <Route path="/ErrorC" element={<ErrorC />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App