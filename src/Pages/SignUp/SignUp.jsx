import { useContext } from 'react';
import img from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProvider';

const SignUp = () => {

    const {createUser}= useContext(AuthContext)


    const handelSignUp = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        console.log(email,password,name);

        createUser(email,password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.error(error);
        })


    }
    return (
        <div>
            <div className="hero min-h-screen bg-[#FFF]">
                <div className="hero-content flex-col lg:flex-row">
                    <div className=" w-1/2 mr-12 ">

                        <img src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handelSignUp} className="card-body">
                            <h1 className="text-4xl text-center font-bold">Sign Up!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn bg-[#FF3811] text-white">Sign Up</button>
                            </div>
                        </form>
                        <p className='my-4 text-center'>Already have an account?
                            <Link className='text-[#FF3811] font-bold' to='/login'> Login?</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;