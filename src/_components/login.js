
const Login = () => {
    return (
        <>
            <h3>Login Components</h3>
            <div>
                <div className="input-wrapper">
                    <input type="email" placeholder="example@gmail.com"
                    className="input-field"/>
                </div>
                <div className="input-wrapper">
                    <input type="password" placeholder="Enter Password"
                    className="input-field"/>
                </div>
                <div className="input-wrapper">
                    <button className="input-field">Login</button>
                </div>
            </div>
        </>
    )
}

export default Login