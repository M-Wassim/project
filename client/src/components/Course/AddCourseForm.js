import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  CustomInput,
} from 'reactstrap';
import {
  addCourse,
  getAllCoursesOfLevel,
} from '../../redux/actions/courseActions';
import { addLevel } from '../../redux/actions/levelActions';

const AddCourseForm = ({ level }) => {
  const [modal, setModal] = useState(false);
  const [courseTitle, setCourseTitle] = useState('');
  const [courseContent, setCourseConent] = useState('');
  const [courseDuration, setCourseDuration] = useState('');

  const toggle = () => {
    setModal(!modal);
  };

  const dispatch = useDispatch();
  const history = useHistory();

  const addNewCourse = () => {
    const newCourse = {
      courseTitle,
      courseContent,
      courseDuration,
      level,
    };

    dispatch(addCourse(newCourse));
    dispatch(getAllCoursesOfLevel(level));

    history.push(`/leveldash/${level}`);
    setCourseTitle('');
    setCourseConent('');
    setCourseDuration('');
    toggle();
  };

  return (
    <div style={{ padding: '0 15px' }}>
      <Button color='success' onClick={toggle} href=''>
        Add course
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Course</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for='courseTitle'>course title</Label>
              <Input
                type='text'
                value={courseTitle}
                name='courseTitle'
                id='courseTitle'
                placeholder='courseTitle'
                className='mb-3'
                onChange={(e) => setCourseTitle(e.target.value)}
              />
              <Label for='courseContent'>course content</Label>
              <Input
                type='text'
                value={courseContent}
                name='courseContent'
                id='courseContent'
                placeholder='courseContent'
                className='mb-3'
                onChange={(e) => setCourseConent(e.target.value)}
              />
              <Label for='courseDuration'>course duration</Label>

              <Input
                type='number'
                value={courseDuration}
                name='courseDuration'
                id='courseDuration'
                placeholder='courseDuration'
                className='mb-3'
                onChange={(e) => setCourseDuration(e.target.value)}
              />

              <Button
                color='dark'
                style={{ marginTop: '2rem' }}
                block
                onClick={addNewCourse}
              >
                Add
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default AddCourseForm;
