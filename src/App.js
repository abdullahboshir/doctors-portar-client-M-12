import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import ContactUs from './Pages/Contact Us/ContactUs';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import Reviews from './Pages/Reviews/Reviews';
import Footer from './Pages/Shared/Footer/Footer';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import ManageDoctors from './Pages/Dashboard/ManageDoctors';

function App() {
  return (
    <div className='max-w-7xl mx-auto bg-white'>
        <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='appointment' element={
          <RequireAuth>
            <Appointment/>
          </RequireAuth>
        }/>

        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard/>
          </RequireAuth>
        }>
          <Route index element={<MyAppointment/>}></Route>
          <Route path='review' element={<MyReview/>}></Route>
          <Route path='history' element={<MyHistory/>}></Route>
          <Route path='users' element={<RequireAdmin><Users/></RequireAdmin>}></Route>
          <Route path='addDoctor' element={<RequireAdmin><AddDoctor/></RequireAdmin>}></Route>
          <Route path='manageDoctor' element={<RequireAdmin><ManageDoctors/></RequireAdmin>}></Route>
        </Route>
        <Route path='reviews' element={<Reviews/>}/>
        <Route path='contactus' element={<ContactUs/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='signUp' element={<SignUp/>}/>
      </Routes>
      <Footer/>
      <ToastContainer />
    </div>
  );
}

export default App;
