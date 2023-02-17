import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Confirm from './components/Confirm/Confirm';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import ExparienceJob from './components/Jobs/ExparienceJob';
import FreasherJob from './components/Jobs/FreasherJob';
import TopIt from './components/Jobs/TopIt';
import Login from './components/logSign/Login';
import SignUp from './components/logSign/SignUp';
import Main from './components/Main/Main';
import PrivateRouter from './PrivateRouter/PrivateRouter';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {
          path: '/login',
          element: <Login></Login>
        },     
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },     
        {
          path: '/',
          element: <Home></Home>
        },               
        {
          path: '/about',
          element: <PrivateRouter><About></About> </PrivateRouter>
        },               
        {
          path: '/freasherjob',
          element: <FreasherJob></FreasherJob>
        },               
        {
          path: '/expariencejob',
          element: <ExparienceJob></ExparienceJob>
        },               
        {
          path: '/topit',
          element: <TopIt></TopIt>
        },               
        {
          path: '/contact',
          element: <Contact></Contact>
        },               
        {
          path: '/confirm',
          element: <PrivateRouter><Confirm></Confirm></PrivateRouter>
        }               
      ]
    }
    
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
