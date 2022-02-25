import './Menu.css';
import { Link } from 'react-router-dom';
import React from 'react';

export default function Menu() {

  return (
  <aside className='Menu'>
    <nav>
      <ul>
        <li><Link to='/'>Inicio</Link></li>
        <li><Link to="/use-state">useState()</Link></li>
        <li><Link to="/use-effect">useEffect()</Link></li>
        <li><Link to="/use-ref">useRef()</Link></li>
        <li><Link to="/use-memo">useMemo()</Link></li>
        <li><Link to="/use-callback">useCallback()</Link></li>
        <li><Link to="/use-context">useContext()</Link></li>
        <li><Link to="/use-reducer">useReducer()</Link></li>
        <li><Link to="/use-myhook">useMyHook()</Link></li>
      </ul>
    </nav>
  </aside>
  )

}

