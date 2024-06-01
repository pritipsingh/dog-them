import React, { lazy, Suspense } from 'react';
import './App.css';
import NavBar from './Components/NavBat';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Loader from './Components/Loader';

const MySpace = lazy(() => import('./Components/MySpace'));
const Home = lazy(() => import('./Components/Home'));
const Events = lazy(() => import('./Components/Events'));
const Videos = lazy(() => import('./Components/Videos'));
const Live = lazy(() => import('./Components/Live'));
const Register = lazy(() => import('./Components/Register'));



const router = createBrowserRouter([{
  path:"/", 
  element:<Home />
},

{
  path:"/my-space" ,
  element:<MySpace />
},
{
  path:"/live" ,
  element:<Live />
},
{
  path:"/events" ,
  element:<Events />
},
{
  path:"/videos" ,
  element:<Videos />
},
{
  path:"/register" ,
  element:<Register />
},


])
const App = () => {
  return (
    
    <div className="min-h-screen bg-light-background dark:bg-background text-light-text dark:text-text">
      <NavBar/>
      <main className="p-4">
          <Suspense fallback={<Loader/>}>
           <RouterProvider router={router} />
          </Suspense>
        </main>
    </div>
  );
};

export default App;
