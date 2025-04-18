import {Routes, Route} from 'react-router-dom';
import Capitulos from '../page/Capitulos';
import Buscador from '../page/Buscador';
import CharacterDetail from '../page/detail/Character';
import Episode from '../page/detail/Episode';
import Landing from '../page/Landing';

export default function MyRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Capitulos />} />
            <Route path="/buscador" element={<Buscador />} />
            <Route path="/episode/:id" element={<Episode />} />
            <Route path="/character/:id" element={<CharacterDetail />} />
            <Route path='/landing' element={<Landing />} />
        </Routes>
    )
}