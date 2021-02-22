import React from 'react';
import { useSelector } from 'react-redux';
import {
  faCoffee,
  faPenAlt,
  faBookOpen,
  faQuestion,
  faNetworkWired,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { logout } from '../../redux/actions/userActions';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
const BackDash = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const logoutUser = () => {
    dispatch(logout());
    history.push('/');
  };

  const user = useSelector((state) => state.userReducer.user);
  if (!user) {
    return <h1>not allowed Please login or register</h1>;
  }
  return (
    <div>
      <header id='headerdash'>
        <div class='d-flex flex-column'>
          <div class='profile'>
            <Link to='/profile'>
              <img src={user.avatar} alt='' class='img-fluid rounded-circle' />
              <h1 class='text-light'>
                {user.firstName} {user.lastName}{' '}
              </h1>
            </Link>

            <div class='social-links mt-3 text-center'>
              {/* <h5>{user.email} </h5>
              <h5>{user.adress} </h5>
              <h5>{user.phone} </h5> */}
              <br />
              <br />
              <a href='#'>E</a>
              <a href='#'>T</a>
              <a href='#'>U</a>
              <a href='#'>D</a>
              <a href='#'>I</a>
              <a href='#'>K</a>
            </div>
          </div>
          <br />

          <nav class='nav-menudash'>
            <ul>
              <li>
                <Link to='/dashboard'>
                  <i class='bx bx-home'></i> <span> Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to='/profile'>
                  <i class='bx bx-user'></i> <span> Profile</span>
                </Link>
              </li>
              <li>
                <Link to='/levels'>
                  <i class='bx bx-file-blank'></i> <span> Levels</span>
                </Link>
              </li>

              <li>
                <a href='/' onClick={logoutUser}>
                  <i class='bx bx-envelope'></i>⟨ Logout
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default BackDash;
