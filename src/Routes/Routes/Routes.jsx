import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Rooms from "../../Pages/Rooms/Rooms/Rooms";
import RoomsDetails from "../../Pages/Rooms/Rooms/RoomsDetails/RoomsDetails";
import SignUp from "../../Pages/SignUp/SignUp";
import Login from "../../Pages/Login/Login";
import BookingConfirm from "../../Pages/BookingConfirm/BookingConfirm/BookingConfirm";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Contact from "../../Pages/Home/Contact/Contact";
import About from "../../Pages/About/About/About";
import DashboardLayout from "../../Layout/DashboardLayout";
import MyBooking from "../../Pages/Dashboard/MyBooking/MyBooking";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import DisplayErros from "../../Shared/DisplayError/DisplayErros";

const route = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement: <DisplayErros></DisplayErros>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/rooms',
                element:<Rooms></Rooms>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
               
                path:'/rooms/:id',
                element:<RoomsDetails></RoomsDetails>,
                loader:({params})=> fetch(`https://hotel-ashrafee-server.vercel.app/rooms/${params.id}`)
            },
            {
                path:'/rooms/:id/booking-confirm',
                element:<PrivateRoute><BookingConfirm></BookingConfirm></PrivateRoute>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
                path:'/dashboard',
                element:<MyBooking></MyBooking>
            },
            {
                path:'/dashboard/allusers',
                element:<AllUsers></AllUsers>
            },
            {
                path:'/dashboard/payments/:id',
                element:<Payment></Payment>,
                loader:({params})=> fetch(`https://hotel-ashrafee-server.vercel.app/bookings/${params.id}`)
            }
        ]
    }
])
export default route