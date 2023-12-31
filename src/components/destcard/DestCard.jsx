import PropTypes from 'prop-types'
import './destcard.css'

export default function DestCard({ dest, loading, error }) {
  return (
    <>
      {error ? (
        'Something went wrong!'
      ) : loading ? (
        'Loading...'
      ) : (
        <div className="list_card-item">
          <div className="maindestinations_card">
            <img src={dest?.CityThumbnail} alt="" />
            <div className="maindestination_title">
              <h3>{dest?.city}</h3>
            </div>
            <div className="maindestination_hover">
              <div className="maindestination_details">
                <div className="left">
                  <div className="tours">
                    <h3>{dest?.tours?.length}</h3>
                    <small>tours</small>
                  </div>
                  <div className="travellers">
                    <h3>{dest?.travellers}</h3>
                    <small>travellers</small>
                  </div>
                </div>
                <div className="right">
                  <div className="reviews">
                    <h3>{dest?.ratingsQuantity}</h3>
                    <small>reviews</small>
                  </div>
                  <div className="rating">
                    <h3>{dest?.ratingsAverage}</h3>
                    <small>rating</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

DestCard.propTypes = {
  dest: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
}
