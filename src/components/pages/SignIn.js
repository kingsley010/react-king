import React, { useState } from 'react';
import './SignIn.css';
import Form from './SignInForm';
import FormSuccess from './FormSuccess';

const SignIn = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='images/img-4.svg' alt='spaceship' />
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

export default SignIn;
