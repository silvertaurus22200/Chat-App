import { Routes, Route, Navigate , useLocation} from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import SignupPage from "./pages/SignupPage"
import LoginPage from "./pages/LoginPage"
import SettingsPage from "./pages/SettingsPage"
import ProfilePage from "./pages/ProfilePage"
import NotFound from "./pages/NotFound"
import { useAuthStore } from "./store/useAuthStore.js"
import {useThemeStore} from "./store/useThemeStore.js"
import { useEffect } from "react"
import {Loader} from "lucide-react"
import { Toaster } from "react-hot-toast"

function App() {

  const {authUser, isCheckingAuth, checkAuth} = useAuthStore();
  const {theme} = useThemeStore();

  const location = useLocation()
  const showNavbar = ["/","/login","/signup","/settings","/profile"]

  useEffect(()=>{
    checkAuth();
  },[checkAuth])

  if(isCheckingAuth && !authUser){
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    )
  }
  

  console.log(authUser);

  return (
    <div data-theme = {theme}>

    {showNavbar.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path = "/" element = {authUser ? <HomePage /> : <Navigate to= "/login" />} />
        <Route path = "/signup" element = {!authUser ? <SignupPage /> : <Navigate to= "/" />} />
        <Route path = "/login" element = {!authUser ? <LoginPage /> : <Navigate to="/" />} />
        <Route path = "/settings" element = {<SettingsPage />} />
        <Route path = "/profile" element = {authUser  ? <ProfilePage /> : <Navigate to= "/login" />} />
        <Route path = "*" element = {<NotFound />} />
      </Routes>

      <Toaster />
    </div>

  )
}

export default App