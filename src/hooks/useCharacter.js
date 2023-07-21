import {gql, useQuery} from '@apollo/client';

const GET_CHARACTER = gql`
  query get_character($id: ID!) {
    character(id:$id) {
        id
        name
        image
        gender
        episode {
          name
          episode
        }
    }
  }
`

export const useCharacter = (id) => {

  const {data, loading, error} = useQuery(GET_CHARACTER, {
    variables : {
      id 
    }
  });

  return {
    data,
    loading,
    error
  }
}