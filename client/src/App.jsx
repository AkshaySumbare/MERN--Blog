import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import PrivateRoute from "./Components/PrivateRoute";
import OnlyPrivatePrivateRoute from "./Components/OnlyAdminPrivateRoute";
import CreatePost from "./pages/CreatePost";
import UpdatePost from "./pages/UpdatePost";
import PostPage from "./pages/PostPage";
import ScrollToTop from "./Components/ScrollToTop";
import Search from "./pages/Search";

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop></ScrollToTop>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/search" element={<Search />} />
        
        <Route element={<PrivateRoute/>}>
        <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        
        <Route element={<OnlyPrivatePrivateRoute/>}>
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/update-post/:postId" element={<UpdatePost />} />
        </Route>
       
        <Route path="/projects" element={<Projects />} />
        <Route path="/post/:postSlug" element={<PostPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
