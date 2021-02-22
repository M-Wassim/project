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
  ModalFooter,
} from 'reactstrap';
import { addLevel, eidtLevel } from '../../redux/actions/levelActions';

const EditLevelModal = ({ level }) => {
  const [modal, setModal] = useState(false);
  const [numLevel, setNumLevel] = useState(level.numLevel);
  const [levelDescription, setLevelDescription] = useState(
    level.levelDescription
  );
  const [levelName, setLevelName] = useState(level.levelName);
  const [nbOfCourses, setNbOfCourses] = useState(level.nbOfCourses);

  const toggle = () => {
    setModal(!modal);
  };

  const dispatch = useDispatch();
  const history = useHistory();

  const edilevel = () => {
    const newLevel = {
      numLevel,
      levelDescription,
      levelName,
      nbOfCourses,
    };

    dispatch(eidtLevel(level._id, newLevel));

    history.push('/levels');
    // setNumLevel('');
    // setLevelName('');
    // setLevelDescription('');
    // setNbOfCourses('');
    toggle();
  };

  return (
    <div style={{ padding: '0 15px' }}>
      <Button color='info' onClick={toggle} href='#'>
        Edit
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit level</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for='levelNumber'>level Number</Label>
              <Input
                type='text'
                value={numLevel}
                name='levelNumber'
                id='levelNumber'
                placeholder='levelNumber'
                className='mb-3'
                onChange={(e) => setNumLevel(e.target.value)}
              />
              <Label for='levelName'>Level Name</Label>
              <Input
                type='text'
                value={levelName}
                name='levelName'
                id='levelName'
                placeholder='levelName'
                className='mb-3'
                onChange={(e) => setLevelName(e.target.value)}
              />
              <Label for='levelDescription'>Level Description</Label>

              <Input
                type='text'
                value={levelDescription}
                name='levelDescription'
                id='levelDescription'
                placeholder='levelDescription'
                className='mb-3'
                onChange={(e) => setLevelDescription(e.target.value)}
              />
              <Label for='nbcourses'>Number of courses</Label>

              <Input
                type='text'
                value={nbOfCourses}
                name='nbcourses'
                id='nbcourses'
                placeholder='nbcourses'
                className='mb-3'
                onChange={(e) => setNbOfCourses(e.target.value)}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={edilevel}>
            confirm
          </Button>{' '}
          <Button color='secondary' onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EditLevelModal;
