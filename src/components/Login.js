// App.js
import React from 'react';
import { useForm } from 'react-hook-form';
import appwrite from './backend/appwrite'; // Adjust the path based on your project structure

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      await appwrite.account.createSession(data.email, data.password);
      // Redirect to the home page or other protected route
    } catch (error) {
      console.error("Login failed:", error.message);
      // Display an error message to the user
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" {...register('email', { required: 'Email is required' })} />
      {errors.email && <p>{errors.email.message}</p>}
      <input type="password" {...register('password', { required: 'Password is required' })} />
      {errors.password && <p>{errors.password.message}</p>}
      <button type="submit">Login</button>
    </form>
  );
};

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      await appwrite.account.create(data.email, data.password, data.name);
      // Redirect to the login page or show a success message
    } catch (error) {
      console.error("Signup failed:", error.message);
      // Display an error message to the user
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" {...register('email', { required: 'Email is required' })} />
      {errors.email && <p>{errors.email.message}</p>}
      <input type="password" {...register('password', { required: 'Password is required' })} />
      {errors.password && <p>{errors.password.message}</p>}
      <input type="text" {...register('name', { required: 'Name is required' })} />
      {errors.name && <p>{errors.name.message}</p>}
      <button type="submit">Signup</button>
    </form>
  );
};

export { Login, Signup };
