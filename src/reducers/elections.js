import { GET_DATA, GET_VOTING_INFO, GET_REP_INFO, GET_DIVISION_INFO } from '../actions/actionCreators'

function getData(state=[], action) {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        national_elections: {
          elections: action.payload.elections
        }
      };
    case GET_VOTING_INFO:
      return {
        ...state,
        local_elections: {
          election: action.payload.election,
          locations: action.payload.pollingLocations,
          contests: action.payload.contests
        }
      }
    case GET_REP_INFO:
      return {
        ...state,
        representatives: {
          offices: action.payload.offices,
          officials: action.payload.officials
        }
      }
    case GET_DIVISION_INFO:
      console.log(action.payload)
      return {
        ...state,
        level: action.payload.levels
      }
    default:
      return state;
  }
}

export default getData;
