import React from 'react';
import { useSelector } from 'react-redux';
import { Alert } from 'reactstrap';
import BackDash from './BackDash';
import EditProfileModal from './EditProfileModal';
import './profile.css';
const Profile = () => {
  const user = useSelector((state) => state.userReducer.user);
  if (!user) {
    return <h1>not allowed Please login or register</h1>;
  }

  return (
    <div>
      <BackDash />
      <main id='main'>
        <section class='breadcrumbs'>
          <div class='container'>
            <div class='d-flex justify-content-between align-items-center'>
              <div className='section-title'>
                <img src='/etudiklogo.png' alt='' width='200px' />
              </div>

              <ol></ol>
              <h1 style={{ textAlign: 'center' }}>
                {user.role == 'teacher' ? <EditProfileModal /> : null}
              </h1>
            </div>
          </div>
        </section>
        <section>
          <div class='col-lg-4' style={{ marginLeft: '350px' }}>
            <div class='text-center card-box'>
              <div class='member-card pt-2 pb-2'>
                <div class='thumb-lg member-thumb mx-auto'>
                  <img
                    src={user.avatar}
                    class='rounded-circle img-thumbnail'
                    alt='profile-image'
                  />
                </div>
                <div class='mt-2'>
                  <p class='text-muted'>
                    Last Name <span>| </span>
                    <span>
                      <a class='text-pink'>{user.lastName}</a>
                    </span>
                  </p>
                  <p class='text-muted'>
                    First Name <span>| </span>
                    <span>
                      <a class='text-pink'>{user.firstName}</a>
                    </span>
                  </p>

                  <p class='text-muted'>
                    Asress <span>| </span>
                    <span>
                      <a class='text-pink'>{user.adress}</a>
                    </span>
                  </p>
                </div>
                <ul class='social-links list-inline'>
                  <li class='list-inline-item'>
                    <a
                      title=''
                      data-placement='top'
                      data-toggle='tooltip'
                      class='tooltips'
                      href=''
                      data-original-title='Facebook'
                    >
                      <i class='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li class='list-inline-item'>
                    <a
                      title=''
                      data-placement='top'
                      data-toggle='tooltip'
                      class='tooltips'
                      href=''
                      data-original-title='Twitter'
                    >
                      <i class='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li class='list-inline-item'>
                    <a
                      title=''
                      data-placement='top'
                      data-toggle='tooltip'
                      class='tooltips'
                      href=''
                      data-original-title='Skype'
                    >
                      <i class='fa fa-skype'></i>
                    </a>
                  </li>
                </ul>
                <p class='text-muted'>
                  Email <span>| </span>
                  <span>
                    <a class='text-pink'>{user.email}</a>
                  </span>
                </p>
                <p class='text-muted'>
                  Phone <span>| </span>
                  <span>
                    <a class='text-pink'>{user.phone}</a>
                  </span>
                </p>
                {/* <button
                  type='button'
                  class='btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light'
                >
                  Message Now
                </button> */}
                {/* <div class='mt-4'>
                  <div class='row'>
                    <div class='col-4'>
                      <div class='mt-3'>
                        <p class='mb-0 text-muted'>Phone </p>
                        <h4>{user.phone}</h4>
                      </div>
                    </div>
                    <div class='col-4'>
                      <div class='mt-3'>
                        <h4>----</h4>
                        <p class='mb-0 text-muted'>Income amounts</p>
                      </div>
                    </div>
                    <div class='col-4'>
                      <div class='mt-3'>
                        <p class='mb-0 text-muted'>Email</p>
                        <h4>{user.email}</h4>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Profile;

{
  /* <img src={user.avatar} className='mr-3 mt-3 rounded-circle'></img>
   */
}

{
  /* <div className='media-body'>
  <h5>First Name : {user.firstName}</h5>
  <h5>Last Name : {user.lastName}</h5>
  <h5>Email : {user.email} </h5>
  <h5>Adress : {user.adress} </h5>
  <h5>Phone : {user.phone} </h5>
  <h5>Registration Date : {user.registrationDate} </h5>
  <h5>Role : {user.role} </h5>
</div>
{user.role == 'teacher' ? <EditProfileModal /> : null} */
}
