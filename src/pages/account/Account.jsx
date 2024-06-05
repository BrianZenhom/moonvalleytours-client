import './account.css'

const Account = () => {
  return (
    <section className="account container">
      <h2>My Account</h2>
      <div className="card">
        <div className="front face">
          <img src="https://res.cloudinary.com/drtykwq1x/image/upload/c_thumb,e_improve,g_auto,h_600,q_59,w_350/v1714897743/vmj0g6xgvltzliwlhmyv.webp" />
          <b>Cairo</b>
        </div>
        <div className="back face">
          <div className="desc">
            <div className="top">
              <div className="top_left">
                <strong>1.341</strong>
                <span>travellers</span>
              </div>
              <div className="top_right">
                <strong>9</strong>
                <span>tours</span>
              </div>
            </div>
            <div className="bottom">
              <div className="bottom_left">
                <strong>1.341</strong>
                <span>opinions</span>
              </div>
              <div className="bottom_right">
                <strong>9.43/10</strong>
                <span>rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Account
