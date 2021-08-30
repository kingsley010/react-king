import React, { useState } from 'react';
import './SignUp.css';
import Form from './SignUpForm';
import FormSuccess from './FormSuccess';

const SignUp = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='images/img-2.svg' alt='spaceship' />
        </div>
        {!isSubmitted ? (
          <Form submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default SignUp;
