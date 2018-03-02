import { GET_DATA, GET_VOTING_INFO } from '../actions/actionCreators'

function getData(state=[], action) {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        elections: action.payload.elections
      };
    case GET_VOTING_INFO:
      console.log(action.payload)
      return {
        ...state,
        election: action.payload.election,
        locations: action.payload.pollingLocations,
        contests: action.payload.contests
      }
    default:
      return state;
  }
}

export default getData;
