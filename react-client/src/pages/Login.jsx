
import { Link } from 'react-router-dom';
import './login.css';
function Login() {
    return (
        <div className="container custom-container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <div className="card custom-card">
                        <div className="card-body custom-card-body">
                            <h5 className="card-title custom-card-title">Login</h5>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label custom-form-label">Email address</label>
                                    <input type="email" className="form-control custom-form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label custom-form-label">Password</label>
                                    <input type="password" className="form-control custom-form-control" id="exampleInputPassword1" />
                                </div>
                                <button type="submit" className="btn btn-primary custom-btn">Continue</button>
                            </form>
                            <p className="mt-3 custom-link-text">Dont have an account?  <Link to="/signup" className="custom-link">SignUp here</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
