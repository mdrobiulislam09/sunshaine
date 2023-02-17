import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Header = () => {
    


    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(() => {
                console.error('Error logging out')
            })
    }
    return (

        <div>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <nav class="navbar navbar-expand-lg navbar-light justify-content-start">
                            <a class="navbar-brand logo text-primary mb-0 font-w-7 me-6" href="index.html">
                                W<span class="text-dark font-w-4">inck.</span>
                            </a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav me-auto">

                                    <li class="nav-item"><Link to='/' class="nav-link">Home</Link></li>
                                    <li class="nav-item"><Link to='/about' class="nav-link">About</Link></li>
                                    <li class="nav-item"><Link to='/contact' class="nav-link">Contact Us</Link></li>
                                </ul>
                            </div>
                            <div class="d-sm-flex align-items-center justify-content-end ms-auto">
                                {
                                    user?.uid ? <>
                                        <Link onClick={handleLogOut}>Logout</Link>
                                    </>
                                        :
                                        <>
                                            <Link to='/login' class="btn btn-light btn-sm">Login</Link>
                                        </>
                                }
                            </div>
                        </nav>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;