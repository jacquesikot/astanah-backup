import { useState } from 'react';

const useApi = (apiFunc: any) => {
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [isEmpty, setEmpty] = useState<boolean>(false);

  const request = async (...args: any) => {
    setLoading(true);

    const response = await apiFunc(...args);
    if (response.data.length < 1) setEmpty(true);

    setLoading(false);

    setError(!response.ok);
    setData(response.data);
    return response;
  };

  return { data, error, loading, request, isEmpty };
};

export default useApi;
