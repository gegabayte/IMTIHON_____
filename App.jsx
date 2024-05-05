import { Routes, Route, useNavigate } from "react-router-dom"
import { useEffect } from "react"


import Login from "./pages/Login"
import Register from "./pages/Register"
import ErrorPage from "./pages/ErrorPage"
import Home from "./pages/Home"
import Earphones from "./pages/Earphones"
import Headphones from "./pages/Headphones"
import Speakers from "./pages/Speakers"
import Leyout from './leyout'
import HeadPhonesdetailOne from "./pages/HeadPhonesdetailOne"
import HeadPhonesdetailTwo from "./pages/HeadPhonesdetailTwo"
import HeadPhonesdetailThere from "./pages/HeadPhonesdetailThere"
import SpeakersDetailOne from "./pages/SpeakersDetailOne"
import SpeakersDetailTwo from "./pages/SpeakersDetailTwo"
import EarPhonesDetailOne from "./pages/EarPhonesDetailOne"
import CheckOut from "./pages/CheckOut"

function App() {

  let users = JSON.parse(localStorage.getItem('users'));

  const navigate = useNavigate();

  useEffect(() => {
    if (!users && location.pathname != '/register') {
      navigate('/login')
    }
  }, [navigate, users]);

  function ProtectedRoute({ children, isAuthentication, redirectTo = '/login', }) {
    if (!isAuthentication) {
      navigate(redirectTo)
    }
    return children;
  }

  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <Login></Login>
          }>
        </Route>

        <Route
          path="/register"
          element={
            <Register></Register>
          }>
        </Route>

        <Route
          path="/"
          element={
            <ProtectedRoute isAuthentication={users ? true : users}>
              <Leyout>
                <Home></Home>
              </Leyout>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/speakers"
          element={
            <ProtectedRoute isAuthentication={users ? true : users}>
              <Leyout>
                <Speakers></Speakers>
              </Leyout>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/speakers/speaker-1"
          element={
            <ProtectedRoute isAuthentication={users ? true : users}>
              <Leyout>
                <SpeakersDetailOne></SpeakersDetailOne>
              </Leyout>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/speakers/speaker-2"
          element={
            <ProtectedRoute isAuthentication={users ? true : users}>
              <Leyout>
                <SpeakersDetailTwo></SpeakersDetailTwo>
              </Leyout>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/headphones"
          element={
            <ProtectedRoute isAuthentication={users ? true : users}>
              <Leyout>
                <Headphones></Headphones>
              </Leyout>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/headphones/headpones-1"
          element={
            <ProtectedRoute isAuthentication={users ? true : users}>
              <Leyout>
                <HeadPhonesdetailOne></HeadPhonesdetailOne>
              </Leyout>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/headphones/headpones-2"
          element={
            <ProtectedRoute isAuthentication={users ? true : users}>
              <Leyout>
                <HeadPhonesdetailTwo></HeadPhonesdetailTwo>
              </Leyout>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/headphones/headpones-3"
          element={
            <ProtectedRoute isAuthentication={users ? true : users}>
              <Leyout>
                <HeadPhonesdetailThere></HeadPhonesdetailThere>
              </Leyout>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/earphones"
          element={
            <ProtectedRoute isAuthentication={users ? true : users}>
              <Leyout>
                <Earphones></Earphones>
              </Leyout>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/checkout"
          element={
            <ProtectedRoute isAuthentication={users ? true : users}>
              <Leyout>
                <CheckOut></CheckOut>
              </Leyout>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/earphones/earpones-1"
          element={
            <ProtectedRoute isAuthentication={users ? true : users}>
              <Leyout>
                <EarPhonesDetailOne></EarPhonesDetailOne>
              </Leyout>
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="*"
          element={
            <ErrorPage></ErrorPage>
          }>
        </Route>
      </Routes>
    </>
  )
}

export default App
