import React, { useState } from 'react';
import FormInput from './FormInput';

export default function Signup() {
  const [values, setValues] = useState({ name: '', email: '', password: ''});

  const onChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  return (
    <form
      method="post"
      onSubmit={async e => {
        e.preventDefault();
        // Post the form
        console.log(this.state);
        setValues({ name: '', email: '', password: '' });
      }}
    >
      <h2>Sign Up for An Account</h2>
      <label htmlFor="email">
        Email
        <FormInput
          type="email"
          name="email"
          placeholder="email"
          value={values.email}
          onChange={onChange}
        />
      </label>
      <label htmlFor="name">
        Name
        <FormInput
          type="text"
          name="name"
          placeholder="name"
          value={values.name}
          onChange={onChange}
        />
      </label>
      <label htmlFor="password">
        Password
        <FormInput
          type="password"
          name="password"
          placeholder="password"
          value={values.password}
          onChange={onChange}
        />
      </label>

      <button type="submit">Sign Up!</button>
    </form>
  );
}
