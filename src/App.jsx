import './App.css'
import { RouterProvider } from 'react-router-dom'
import route from './Routes/Routes/Routes'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import AuthProvider from './Context/AuthProvider'
function App() {
  const queryClient = new QueryClient()
  return (
    <>
     <QueryClientProvider client={queryClient}>
     <AuthProvider>
    <RouterProvider router={route}></RouterProvider>
    <Toaster />
    </AuthProvider>
    </QueryClientProvider>
   
    </>
  )
}

export default App
