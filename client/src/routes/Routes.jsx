import { Routes, Route } from 'react-router-dom'
import { Home } from '../components/Home/Home'




const POSroutes = () => {

    return (
        <Routes >
            <Route path='/' element={<Home />} />
        </Routes>
    )
}

export default POSroutes