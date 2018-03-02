import { GET_DATA, GET_VOTING_INFO, GET_REP_INFO } from '../actions/actionCreators'

function getData(state=[], action) {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        elections: action.payload.elections
      };
    case GET_VOTING_INFO:
      return {
        ...state,
        election: action.payload.election,
        locations: action.payload.pollingLocations,
        contests: action.payload.contests
      }
    case GET_REP_INFO:
      console.log(action.payload)
      return {
        ...state,
        divisions: action.payload.divisions 
      }
    default:
      return state;
  }
}

export default getData;
