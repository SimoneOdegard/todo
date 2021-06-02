import { useState } from 'react';

const useAjax = (callback) => {

  const [values, setValues] = useState({});

  // Create a new custom hook called useAjax() to abstract the API calls
  // Using this hook in your component should make the calls to the server
  // This hook should:
  // Accept the URL to the API server, the REST method, and (when relevant) the BODY (JSON) of the request
  // Handle CORS Settings, Content-Type, Headers and possibly authentication
  // You should use axios to perform the actual AJAX calls

}

export default useAjax;