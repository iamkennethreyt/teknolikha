import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login, reset } from '../features/auth/authSlice';
import Spinner from '../components/Spinner';
import TextField from '../components/TextField';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const { username, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate('/');
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      username,
      password
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <form className='w-25 m-auto py-5' onSubmit={onSubmit}>
        <TextField
          type='text'
          id='username'
          name='username'
          label='Input username'
          value={username}
          onChange={onChange}
        />
        <TextField
          type='password'
          id='password'
          name='password'
          label='Input password'
          value={password}
          onChange={onChange}
        />

        <button type='submit' class='btn btn-primary btn-block mb-4'>
          Login
        </button>
      </form>
    </>
  );
}

export default Login;
