import { GET_DATA, GET_VOTING_INFO, GET_REP_INFO, GET_DIVISION_INFO, GET_RESULTS_BY_ADDRESS, GET_VOTING_INFO_FAILED, GET_REP_INFO_FAILED } from '../actions/actionCreators'

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
          contests: action.payload.contests,
          error: false,
          error_message: 'There are no upcoming elections in your area.'
        }
      }
    case GET_VOTING_INFO_FAILED:
      return {
        ...state,
        local_elections: {
          error: true,
          error_message: 'There are no upcoming elections in your area.'
        }
      }
    case GET_REP_INFO:
    console.log(action.payload)
      return {
        ...state,
        representatives: {
          offices: action.payload[0].offices,
          officials: action.payload[0].officials,
          level: action.payload[1],
          error: false,
          error_message: 'No results have been found. Please try another search.'
        }
      }
    case GET_REP_INFO_FAILED:
      return {
        ...state,
        representatives: {
          error: true,
          error_message: 'No results have been found. Please try another search.'
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
            officials: action.payload[1].data.officials,
            error: false
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
