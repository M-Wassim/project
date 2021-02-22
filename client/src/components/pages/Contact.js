import React from 'react';
import bg from '../pages/testimonials-bg.jpg';
import { Button } from 'reactstrap';
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  FormText,
} from 'reactstrap';
function Contact() {
  return (
    <div>
      <section id='contact' className='contact'>
        <div className='container' data-aos='fade-up'>
          <div className='section-title'>
            <p style={{ color: '#556272' }}>Contact Us</p>
          </div>

          <div className='row mt-5'>
            <div className='col-lg-4'>
              <div className='info'>
                <div className='address'>
                  <i className='icofont-google-map'></i>
                  <h4>Location:</h4>
                  <p>Manouba,Tunis,Tunisia</p>
                </div>

                <div className='email'>
                  <i className='icofont-envelope'></i>
                  <h4>Email:</h4>
                  <p>conact@etudik.com</p>
                </div>

                <div className='phone'>
                  <i className='icofont-phone'></i>
                  <h4>Call:</h4>
                  <p>71 568 984</p>
                </div>
              </div>
            </div>

            <div className='col-lg-8 mt-5 mt-lg-0'>
              <form className='php-email-form'>
                <div className='form-row'>
                  <div className='col-md-6 form-group'>
                    <input
                      type='text'
                      name='name'
                      className='form-control'
                      id='name'
                      placeholder='Your Name'
                      data-rule='minlen:4'
                      data-msg='Please enter at least 4 chars'
                    />
                    <div className='validate'></div>
                  </div>
                  <div className='col-md-6 form-group'>
                    <input
                      type='email'
                      className='form-control'
                      name='email'
                      id='email'
                      placeholder='Your Email'
                      data-rule='email'
                      data-msg='Please enter a valid email'
                    />
                    <div className='validate'></div>
                  </div>
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    name='subject'
                    id='subject'
                    placeholder='Subject'
                    data-rule='minlen:4'
                    data-msg='Please enter at least 8 chars of subject'
                  />
                  <div className='validate'></div>
                </div>
                <div className='form-group'>
                  <textarea
                    className='form-control'
                    name='message'
                    rows='5'
                    data-rule='required'
                    data-msg='Please write something for us'
                    placeholder='Message'
                  ></textarea>
                  <div className='validate'></div>
                </div>
                <div className='mb-3'>
                  <div className='loading'>Loading</div>
                  <div className='error-message'></div>
                  <div className='sent-message'>
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className='text-center'>
                  <button type='submit'>Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
{
  /* <Form classNameName='text-left bg-light font-weight-bold mt-5'>
<FormGroup>
  <Label for='first'>First Name</Label>
  <Input type='text' name='first' id='frst' placeholder='' required />
</FormGroup>

<FormGroup>
  <Label for='last'>Last Name</Label>
  <Input type='text' name='last' id='last' placeholder='' required />
</FormGroup>

<FormGroup>
  <Label for='exampleAddress'>Address</Label>
  <Input
    type='text'
    name='address'
    id='exampleAddress'
    placeholder=''
    required
  />
</FormGroup>

<FormGroup>
  <Label for='mail'>Email</Label>
  <Input type='email' name='mail' id='mail' placeholder='' required />
</FormGroup>

<FormGroup>
  <Label for='examplePassword'>Password</Label>
  <Input
    type='password'
    name='password'
    id='examplePassword'
    placeholder=''
    required
  />
</FormGroup>

<FormGroup>
  <Label for='exampleText'>How would you describe yourself ?</Label>
  <Input type='textarea' name='description' id='description' required />
</FormGroup>

<FormGroup>
  <Label for='exampleFile'>Upload Photos</Label>
  <Input type='file' name='file' id='exampleFile' />
  <FormText color='muted'>
    Please upload one or more photos you have taken in Tunisia
  </FormText>
</FormGroup>
<div classNameName='mx-auto col-6 mt-5'>
  <Button color='primary' classNameName='ml-5'>
    Confirm
  </Button>
  <Button color='secondary' classNameName='ml-5'>
    Cancel
  </Button>
</div>
</Form> */
}
