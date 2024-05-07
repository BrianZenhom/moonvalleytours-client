import PropTypes from 'prop-types'
import './destcard.css'
import { Link } from 'react-router-dom'

export default function DestCard({ dest }) {
  return (
    <>
      <Link to={`${dest.country}/${dest._id}`}>
        <div className="list_card-item">
          <div className="maindestinations_card">
            <img src={dest?.cityThumbnail} alt="" />
            <div className="maindestination_title">
              <h3>{dest?.city}</h3>
            </div>
            <div className="maindestination_hover">
              <div className="maindestination_details">
                <div className="left">
                  <div className="detail">
                    <h3>{dest?.tours?.length}</h3>
                    <span>Tours</span>
                  </div>
                  <hr />
                  <div className="detail">
                    <h3>{dest?.travellers}</h3>
                    <span>Travellers</span>
                  </div>
                </div>
                <hr />
                <div className="detail">
                  <h3>{dest?.ratingsAverage} / 5</h3>
                  <span>rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

DestCard.propTypes = {
  dest: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
}
