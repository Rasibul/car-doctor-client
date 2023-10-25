import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Provider/AuthProvider';
import { useContext } from 'react';

const Login = () => {
    const {signIn } = useContext (AuthContext)
    const handelLogin = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(name,email,password)
        signIn(email,password)
        .then(res => {
            const user = res.user
            console.log(user)
        })
        .catch(error => {
            console.log(error)
        })

    }
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-12 w-1/2">
                    <img src={login} alt="login" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                    <form onSubmit={handelLogin} className="card-body">
                        <h2 className='text-center text-3xl font-bold'>Please Login</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                        <p className='text-center mt-4'>New Here! <Link to='/signup'><span className='text-orange-600'>Sign Up</span></Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;