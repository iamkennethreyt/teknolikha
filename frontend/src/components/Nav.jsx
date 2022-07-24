import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';

const Nav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container'>
        <button
          className='navbar-toggler'
          type='button'
          data-mdb-toggle='collapse'
          data-mdb-target='#navbarLeftAlignExample'
          aria-controls='navbarLeftAlignExample'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <i className='fas fa-bars'></i>
        </button>

        <div className='collapse navbar-collapse' id='navbarLeftAlignExample'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link active' to='/'>
                Teknolikha
              </Link>
            </li>

            {user ? (
              <li className='nav-item'>
                <button className='nav-link' onClick={onLogout}>
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li className='nav-item'>
                  <Link to='/login' className='nav-link'>
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
