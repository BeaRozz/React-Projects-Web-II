import {Routes, Route} from 'react-router-dom';
import Home from '../page/Home';
import Recepie from '../page/Recepie';

export default function MyRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recepie/:id" element={<Recepie />} />
        </Routes>
    )
}