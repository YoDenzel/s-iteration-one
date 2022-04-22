export const fetchData = async (url: string) => {
  const response = await fetch(
    `https://api-factory.simbirsoft1.com/api/db/${url}`,
    {
      headers: {
        Authorization: 'Bearer 52efbe08228671240494f537f2486bc109a637b4',
        'X-Api-Factory-Application-Id': `${process.env.REACT_APP_API_KEY}`,
      },
    },
  );
  if (!response.ok) throw new Error(response.statusText);
  const data = response.json();
  return data;
};
