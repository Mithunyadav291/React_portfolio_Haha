import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Project from './components/Project';
import Navbar from './components/Navbar';

const Routes = () => {

    const router= createBrowserRouter(
        createRoutesFromElements(
            <Route >
                <Route path='/home' element={<Home/>}/>
                <Route path='/experience' element={<Experience/>}/>
                <Route path='/skills' element={<Skills/>}/>
                <Route path='/project' element={<Project/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Route>
        )
    );

  return (
    <RouterProvider router={router}/>
  )
}

export default Routes