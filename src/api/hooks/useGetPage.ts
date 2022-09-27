import { useQuery } from '@apollo/client';
import GET_PAGE from '../graphql/queries/GetPages.graphql';

const useGetPage = (slug: string) => {
  const { loading, data, error } = useQuery(GET_PAGE, {
    variables: { slug },
  });

  return {
    loading,
    page: data?.pages.data[0],
    error,
  };
};

export default useGetPage;
