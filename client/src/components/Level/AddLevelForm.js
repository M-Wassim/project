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
import { addLevel } from '../../redux/actions/levelActions';

const AddLevelForm = () => {
  const [modal, setModal] = useState(false);
  const [numLevel, setNumLevel] = useState('');
  const [levelDescription, setLevelDescription] = useState('');
  const [levelName, setLevelName] = useState('');
  const [nbOfCourses, setNbOfCourses] = useState('');

  const toggle = () => {
    setModal(!modal);
  };

  const dispatch = useDispatch();
  const history = useHistory();

  const addNewLevel = () => {
    const newLevel = {
      numLevel,
      levelDescription,
      levelName,
      nbOfCourses,
    };

    dispatch(addLevel(newLevel));

    history.push('/levels');
    setNumLevel('');
    setLevelName('');
    setLevelDescription('');
    setNbOfCourses('');
    toggle();
  };

  return (
    <div style={{ padding: '0 15px' }}>
      <Button color='success' onClick={toggle} href='#'>
        Add New Level
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add level</ModalHeader>
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
              <Button
                color='dark'
                style={{ marginTop: '2rem' }}
                block
                onClick={addNewLevel}
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

export default AddLevelForm;
