import React from 'react';

const OurTeam = (props) => {
  return (
    <div>
      <section
        id='team'
        className='team  '
        style={{ backgroundColor: '#47cdc6' }}
      >
        <div className='container' data-aos='fade-up'>
          <div className='section-title'>
            <p style={{ color: 'white' }}>Teachers</p>
          </div>

          <div className='row'>
            <div className='col-lg-3 col-md-6 d-flex align-items-stretch'>
              <div className='member' data-aos='fade-up' data-aos-delay='100'>
                <div className='member-img'>
                  <img
                    src='https://innovstech.com/wp-content/uploads/2019/04/Avatar-masculin-3.png'
                    className='img-fluid'
                    alt=''
                  />
                </div>
                <div className='member-info'>
                  <h4>Walter White</h4>
                  <span>Math Teacher</span>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 d-flex align-items-stretch'>
              <div className='member' data-aos='fade-up' data-aos-delay='200'>
                <div className='member-img'>
                  <img
                    src='https://www.pngarts.com/files/3/Avatar-PNG-High-Quality-Image.png'
                    className='img-fluid'
                    alt=''
                  />
                </div>
                <div className='member-info'>
                  <h4>Sarah Jhonson</h4>
                  <span>Design Teacher</span>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 d-flex align-items-stretch'>
              <div className='member' data-aos='fade-up' data-aos-delay='300'>
                <div className='member-img'>
                  <img
                    src='https://cdn.iconscout.com/icon/free/png-256/teacher-240-1128987.png'
                    className='img-fluid'
                    alt=''
                  />
                </div>
                <div className='member-info'>
                  <h4>William Anderson</h4>
                  <span>Art Teacher</span>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 d-flex align-items-stretch'>
              <div className='member' data-aos='fade-up' data-aos-delay='400'>
                <div className='member-img'>
                  <img
                    src='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png'
                    className='img-fluid'
                    alt=''
                  />
                </div>
                <div className='member-info'>
                  <h4>Amanda Jepson</h4>
                  <span>Music Teacher</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
