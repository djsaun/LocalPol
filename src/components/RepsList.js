import React from 'react'
import { connect } from 'react-redux'

const RepsList = props => {

  const rep = props.data.representatives.officials;

  return (
    <div className="representatives">
      {
        props.data.representatives.offices.map((office, i) =>

          <div key={i} className="representative-content">

            <h4>{office.name}</h4>

            {office.officialIndices.map((index) =>
              <div key={index} className={`representative ${(rep[index].party).toLowerCase()}`}>
                <img src={rep[index].photoUrl} alt={rep[index].name} />
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

export default connect(mapStateToProps)(RepsList);
