import { BrowserRouter, Route, Routes } from 'react-router-dom'
import axios from 'axios';
import POSroutes from './routes/Routes';

function App() {
  axios.defaults.baseURL = "http://localhost:3000"
  axios.defaults.withCredentials = true;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<POSroutes />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
