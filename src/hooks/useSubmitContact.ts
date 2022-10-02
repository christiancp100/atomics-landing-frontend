import { useState } from 'react';

export const STATUS = {
  notSubmitted: 0,
  loading: 1,
  submitted: 2,
  error: 3,
};

const useSubmitContact = (url: string) => {
  const [status, setStatus] = useState(STATUS.notSubmitted);

  const submit = (e: any, data: any, callback?: any) => {
    setStatus(STATUS.loading);

    fetch(url!, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.statusText);
        }

        return response.json();
      })
      .then(() => {
        setStatus(STATUS.submitted);
        e.target.reset();
        callback();
      })
      .catch(() => setStatus(STATUS.error));
  };

  return { status, submit };
};

export default useSubmitContact;
