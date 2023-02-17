import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';



const Login = () => {

    const { loginGoogle } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider()
    

    const handlegoogle = () => {
        loginGoogle(googleProvider)
            .then(result => {
                const users = result.user
                console.log(users)
                navigate(from , {replace: true})
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div>
            <div className='m-auto p-5'>     
                    <dutton onClick={handlegoogle} className='btn btn-primary w-full d-block'>Continue with Google</dutton>
            </div>
        </div>
    );
};

export default Login;