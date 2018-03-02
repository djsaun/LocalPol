import axios from 'axios'
export const GET_DATA = 'GET_DATA';
export const GET_DATA_FAILED = 'GET_DATA_FAILED';
export const GET_VOTING_INFO = 'GET_VOTING_INFO';
export const GET_VOTING_INFO_FAILED = 'GET_VOTING_INFO_FAILED';
export const GET_REP_INFO = 'GET_REP_INFO';
export const GET_REP_INFO_FAILED = 'GET_REP_INFO_FAILED';
export const GET_DIVISION_INFO = 'GET_DIVISION_INFO';
export const GET_DIVISION_INFO_FAILED = 'GET_DIVISION_INFO_FAILED';

export function getData() {
  return dispatch => {
    const url = `https://www.googleapis.com/civicinfo/v2/elections?key=${process.env.REACT_APP_CIVIC_INFO_KEY}`;
    axios.get(url)
      .then(function (response) {
        console.log("response is", response);

        dispatch({
          type: GET_DATA,
          payload: response.data
        });

      })
      .catch(function (error) {
        console.log(error);
        // You can dispatch here error 
        // Example
        dispatch({
          type: GET_DATA_FAILED,
          payload: error
        });
      });
  }
}

export function getVotingInfo() {
  return dispatch => {
    const url = `https://www.googleapis.com/civicinfo/v2/voterinfo?key=${process.env.REACT_APP_CIVIC_INFO_KEY}&address=1411%20Norwalk%20Ln.%20Austin%20TX&electionId=2000`;
    axios.get(url)
      .then(function (response) {
        console.log("response is", response);

        dispatch({
          type: GET_VOTING_INFO,
          payload: response.data
        });

      })
      .catch(function (error) {
        console.log(error);
        // You can dispatch here error 
        // Example
        dispatch({
          type: GET_VOTING_INFO_FAILED,
          payload: error
        });
      });
  }
}

// Need to get Divisions by address and then query representatives endpoint with the division id 
export function getDivisionID() {
  return dispatch => {
    const url = `https://www.googleapis.com/civicinfo/v2/divisions?key=${process.env.REACT_APP_CIVIC_INFO_KEY}&query=travis&20county`;
    axios.get(url)
      .then(function (response) {
        console.log("response is", response);

        dispatch({
          type: GET_DIVISION_INFO,
          payload: response.data
        });

      })
      .catch(function (error) {
        console.log(error);
        // You can dispatch here error 
        // Example
        dispatch({
          type: GET_DIVISION_INFO_FAILED,
          payload: error
        });
      });
  }
}


export function getReps() {
  return dispatch => {
    const url = `https://www.googleapis.com/civicinfo/v2/representatives?key=${process.env.REACT_APP_CIVIC_INFO_KEY}&address=1411%20Norwalk%20Ln.%20Austin%20TX&levels=country`;
    axios.get(url)
      .then(function (response) {
        console.log("response is", response);

        dispatch({
          type: GET_REP_INFO,
          payload: response.data
        });

      })
      .catch(function (error) {
        console.log(error);
        // You can dispatch here error 
        // Example
        dispatch({
          type: GET_REP_INFO_FAILED,
          payload: error
        });
      });
  }
}
