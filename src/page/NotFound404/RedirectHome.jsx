import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RedirectHome = () => {
  let navigate = useNavigate();
  useEffect(() => {
    navigate('/');
  }, [navigate]);
};
export default RedirectHome;
