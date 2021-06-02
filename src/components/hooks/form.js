import { useState } from 'react';

const useForm = (callback) => {
  // Replace the current form change/submit handlers with the useForm() custom hook to manage the “Add Item” form
  
  const [values, setValues] = useState({});

  const handleInputChange = e => {
    setValues(values => ({ ...values, [e.target.name]: e.target.value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    callback(values);
  };

  return [
    handleInputChange,
    handleSubmit,
    values
  ]

}

export default useForm;