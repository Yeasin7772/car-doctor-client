import img from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';


const Login = () => {

    const { userLogin } = useContext(AuthContext)
    const location = useLocation()
    //console.log(location);
    const navigate = useNavigate()

    const handelLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        

        userLogin(email, password)
            .then(result => {
                const loginUser = result.user
                console.log(loginUser);
            

            })
            .catch(error => console.log(error));
    }
    return (
        <div>
            <div className="hero min-h-screen bg-[#FFF]">
                <div className="hero-content flex-col lg:flex-row">
                    <div className=" w-1/2 mr-12 ">

                        <img src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handelLogin} className="card-body">
                            <h1 className="text-4xl text-center font-bold">Sign in!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn bg-[#FF3811] text-white">Sign in</button>
                            </div>
                        </form>
                        <p className='my-4 text-center'>Have an account?
                            <Link className='text-[#FF3811] font-bold' to='/signup'> Sign In</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;