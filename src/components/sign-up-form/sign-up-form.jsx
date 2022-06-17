import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase';

import FormInput from '../form-input/form-input';
import Button from '../button/button'
import './sign-up-form.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();

    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email alredy in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  }

  console.log(formFields)

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label='display Name'
          type='text'
          required
          onChange={changeHandler}
          name='displayName'
          value={displayName}
        />

        <FormInput
          label='Email '
          type='email'
          required
          onChange={changeHandler}
          name='email'
          value={email}
        />

        <FormInput
          label='Password '
          type='password'
          required
          onChange={changeHandler}
          name='password'
          value={password}
        />

        <FormInput
          label='Confirm Password '
          type='password'
          required
          onChange={changeHandler}
          name='confirmPassword'
          value={confirmPassword}
        />

        <Button buttonType='inverted' type='submit'>Sign Up</Button>
      </form>
    </div>
  )
}

export default SignUpForm;

