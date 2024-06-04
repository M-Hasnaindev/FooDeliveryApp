
const Signup = () => {
  return (
    <>
      <h3>Signup components</h3>
      <div>
        <div className="input-wrapper">
          <input type="email" placeholder="example@gmail.com"
            className="input-field" />
        </div>
        <div className="input-wrapper">
          <input type="password" placeholder="Enter Password"
            className="input-field" />
        </div>
        <div className="input-wrapper">
          <input type="password" placeholder="Confirm Password"
            className="input-field" />
        </div>
        <div className="input-wrapper">
          <input type="text" placeholder="Resturant Name"
            className="input-field" />
        </div>
        <div className="input-wrapper">
          <input type="text" placeholder="City Name"
            className="input-field" />
        </div>
        <div className="input-wrapper">
          <input type="text" placeholder="Full Address"
            className="input-field" />
        </div>
        <div className="input-wrapper">
          <input type="text" placeholder="Contact No:"
            className="input-field" />
        </div>
        <div className="input-wrapper">
          <button className="input-field">SignUp</button>
        </div>
      </div>
    </>
  )
}

export default Signup;