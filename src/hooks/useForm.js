import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useForm = (validate) => {
  // Hooks =>
  // state
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // navigate
  let navigate = useNavigate();

  // effect
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      navigate('/signin');
    }
  }, [errors, isSubmitting, navigate]);

  // Handle Functions =>
  // handle change
  const handleChange = (e) => {
    // destructure
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    isSubmitting,
  };
};

export default useForm;
