
import './App.css'
import { Outlet, useNavigate } from 'react-router-dom'
import { useIsLoggedIn } from './model/hooks'
import { useEffect } from 'react';

function App() {
  const isLOggedIn = useIsLoggedIn();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLOggedIn) navigate('/notes');
  }, [isLOggedIn]);

  return (

    <div>
      <Outlet />
    </div>

  )
}

export default App
