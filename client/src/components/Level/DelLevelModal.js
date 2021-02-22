import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const DelLevelModal = (props) => {
  const { buttonLabel, className, dellevel } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color='danger' onClick={toggle}>
        Delete
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Delete Level</ModalHeader>
        <ModalBody>
          Do you really want to delete this level and all its courses
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={dellevel}>
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

export default DelLevelModal;
