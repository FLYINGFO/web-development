import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './src/components/Navbar.jsx'
import HomePage from './src/pages/HomePage.jsx'
import Login from './src/pages/LoginPage.jsx'
import List from './src/pages/RecipeListPage.jsx'



const MainRouter = () => {
 return (<div>
 <Layout/>
 <Routes>
<Route exact path="/" element={<Home />} />
<Route exact path="./src/pages/HomePage" element={<HomePage />} />
<Route exact path="/LoginPage" element={<Login />} />
<Route exact path="/RecipeListPage" element={<List />} />
 
 </Routes>
 </div>
 )
}
export default MainRouter