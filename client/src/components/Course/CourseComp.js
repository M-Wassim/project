import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCourse, getOneCourse } from '../../redux/actions/courseActions';
import { getAuthUser } from '../../redux/actions/userActions';
import { Button, Media } from 'reactstrap';
import EditLevelModal from '../Level/EditLevelModal';
import DelLevelModal from '../Level/DelLevelModal';
import EditCourseModal from './EditCourseModal';
import DeleteCourseModal from './DeleteCourseModal';
import { useHistory } from 'react-router-dom';
import BackDash from '../pages/BackDash';
const CourseComp = ({ match }) => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneCourse(match.params.id));
  }, []);
  console.log(isAuth);
  const course = useSelector((state) => state.courseReducer.course);
  const history = useHistory();
  console.log(course);
  const delCourse = () => {
    dispatch(deleteCourse(match.params.id));
  };
  return (
    <div>
      <BackDash />
      <main id='main'>
        <section class='breadcrumbs'>
          <div class='container'>
            <div class='d-flex justify-content-between align-items-center'>
              <div>
                <Button
                  color='success'
                  onClick={() => {
                    history.goBack();
                  }}
                >
                  back to courses
                </Button>
              </div>

              <ol>
                <li></li>
              </ol>
              <h1 style={{ textAlign: 'center' }}>
                {user && user.role == 'teacher' ? (
                  <DeleteCourseModal delCourse={delCourse} />
                ) : null}
              </h1>
            </div>
          </div>
        </section>

        <section style={{ justifyContent: 'space-around' }}>
          <div class='container' style={{ textAlign: 'center' }}>
            <div>
              <img
                src='https://cours-informatique-gratuit.fr/wp-content/uploads/2014/05/fichier.png'
                className='mr-3  rounded-circle'
                width='150px'
              ></img>
              <h1 className='mt-3'> {course && course.courseTitle}</h1>
              <h2 className='mt-3'> {course && course.courseContent}</h2>
            </div>
          </div>
        </section>
      </main>
    </div>

    // <div style={{ textAlign: 'center' }}>
    //   <Button
    //     color='success'
    //     onClick={() => {
    //       history.goBack();
    //     }}
    //   >
    //     back to courses
    //   </Button>
    //   <br></br>
    //   <img
    //     src='https://cours-informatique-gratuit.fr/wp-content/uploads/2014/05/fichier.png'
    //     className='mr-3 mt-3 rounded-circle'
    //     width='150px'
    //   ></img>
    //   <h1> {course && course.courseTitle}</h1>
    //   <h2> {course && course.courseContent}</h2>

    //   {user && user.role == 'teacher' ? (
    //     <div style={{ width: '300px' }} className='mx-auto'>
    //       {/* <EditCourseModal /> */}
    //       <DeleteCourseModal delCourse={delCourse} />
    //     </div>
    //   ) : null}
    // </div>
  );
};

export default CourseComp;
