import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getResultsByAddress } from '../actions/actionCreators'

const Reps = props => {

  const rep = props.data.representatives.officials;
  
  return(
    <div>
      <h3>Representatives</h3>
      {
        props.data.representatives.offices.map((office, i) => 

        <div key={i}>

          <h4>{office.name}</h4>

          {office.officialIndices.map((index) => 
              <div key={index}>
                <img width="100" height="100" src={rep[index].photoUrl} alt={rep[index].name}/>
                <h5>{rep[index].name} - {rep[index].party}</h5>
                <div className="contact">
                  <div className="address">
                    <p>{rep[index].address[0].line1}</p>
                    <p>{rep[index].address[0].city}, {rep[index].address[0].state} {rep[index].address[0].zip}</p>
                  </div>
                  <p>{rep[index].phones}</p>
                </div>
                <div className="social">
                  Facebook
                  Twitter
                </div>
              </div>,
          )}

        </div>
        )
      }
    </div>
  )
}

const mapStateToProps = state => ({
  data: state.getData
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getResultsByAddress
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Reps);
