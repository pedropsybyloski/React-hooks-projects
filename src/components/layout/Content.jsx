import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './Content.css';
import About from '../../views/examples/About';
import Home from '../../views/examples/Home';
import UseState from '../../views/examples/UseState';
import NotFound from '../../views/examples/404';
import UseEffect from '../../views/examples/UseEffect';

export default function Content(props) {
    return (
        <main className='Content'>
            <Routes>
                <Route path="/" exact element={<Home></Home>} />
                <Route path="/about" element={<About></About>} />
                <Route path='/use-state' element={<UseState/>}></Route>
                <Route path='/use-effect' element={<UseEffect/>}></Route>
                <Route path='*' element={<NotFound/>}></Route>
            </Routes>
        </main>
    )
}
