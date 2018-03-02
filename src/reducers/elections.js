import { GET_DATA, GET_VOTING_INFO, GET_REP_INFO, GET_DIVISION_INFO, GET_RESULTS_BY_ADDRESS } from '../actions/actionCreators'

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
      // console.log(action.payload)
      return {
        ...state,
        level: action.payload.levels
      }
    case GET_RESULTS_BY_ADDRESS:
      return {
        ...state,
        local_data: {
          address: {
            address: action.payload[0].data.normalizedInput.line1,
            city: action.payload[0].data.normalizedInput.city,
            state: action.payload[0].data.normalizedInput.state,
            zip: action.payload[0].data.normalizedInput.zip
          },
          representatives: {
            offices: action.payload[1].data.offices,
            officials: action.payload[1].data.officials
          },
          voting_info: {
            election: action.payload[0].data.election,
            locations: action.payload[0].data.pollingLocations,
            contests: action.payload[0].data.contests
          }
        }
      }
    default:
      return state;
  }
}

export default getData;
