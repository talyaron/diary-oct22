import React, { useEffect } from 'react'
import { useIsLoggedIn } from '../../../model/hooks';
import { useNavigate } from 'react-router-dom';

const Notes = () => {
  const navigate = useNavigate();
  const isLogged = useIsLoggedIn();
  useEffect(() => {
    if (!isLogged) navigate('/');
  }, [isLogged]);
  return (
    <div>Notes</div>
  )
}

export default Notes