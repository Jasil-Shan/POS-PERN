import { BrowserRouter, Route, Routes } from 'react-router-dom'
import axios from 'axios';
import UserRouter from './routes/UserRouter';

function App() {
  axios.defaults.baseURL = "http://localhost:3000"
  axios.defaults.withCredentials = true;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<UserRouter />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
