import PropTypes from 'prop-types'
import './destcard.css'

export default function DestCard({ dest }) {
  return (
    <>
      <div className="card">
        <div className="front face">
          <img src={dest?.cityThumbnail} alt="city thumbnail" />
          <b>{dest?.city}</b>
        </div>
        <div className="back face">
          <div className="desc">
            <div className="top">
              <div className="top_left">
                <span>travellers</span>
                <strong>
                  {dest?.travellers === 0 ? '-' : dest?.travellers}
                </strong>
              </div>
              <div className="top_right">
                <span>tours</span>
                <strong>
                  {dest?.tours.length === 0 ? '-' : dest?.tours.length}
                </strong>
              </div>
            </div>
            <div className="bottom">
              <div className="bottom_left">
                <span>opinions</span>
                <strong>
                  {dest?.ratingsQuantity === 0 ? '-' : dest?.ratingsQuantity}
                </strong>
              </div>
              <div className="bottom_right">
                <span>rating</span>
                <strong>{dest?.ratingsAverage}/5</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

DestCard.propTypes = {
  dest: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
}
