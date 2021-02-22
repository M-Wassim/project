import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const DeleteCourseModal = ({ delCourse }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const history = useHistory();
  const confdel = () => {
    delCourse();
    history.goBack();
    toggle();
  };

  return (
    <div>
      <Button color='danger' onClick={toggle}>
        Delete Course
      </Button>
      <Modal isOpen={modal} toggle={toggle} className=''>
        <ModalHeader toggle={toggle}>Delete Course</ModalHeader>
        <ModalBody>
          Do you really want to delete this Course and its quiz
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={confdel}>
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

export default DeleteCourseModal;
