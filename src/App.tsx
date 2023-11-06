import Home from './pages/Home';
import EditQuestion from './pages/EditQuestion';
import AddQuestion from './pages/AddQuestion';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './App.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddQuestion />} />
      <Route path="/edit/:id" element={<EditQuestion />} />
    </>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
