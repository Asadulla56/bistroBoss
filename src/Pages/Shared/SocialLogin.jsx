import React, { useContext } from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import useAuth from '../../hooks/UseAuth';
import { useNavigate } from 'react-router-dom';


 
const SocialLogin = () => {
    const navigate = useNavigate()
    const {googleLogin,fbLogin,gitLogin} = useAuth();
    const handleGoogle = ()=>{
        googleLogin()
        .then(res=>{
            console.log(res.user)
            navigate('/')
        })
        .catch(error=>{
            console.log(error)
        })
    }
    const handleFacebook = ()=>{
        fbLogin()
        .then(res=>{
            console.log(res.user)
        })
        .catch(error=>{
            console.log(error)
        })

    }
    const handleGit = ()=>{
        gitLogin()
        .then(res=>{
            console.log(res.user)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div>
            <h4 className='text-center font-medium text-[#444444]'>Or sign up with</h4>
            <div className='flex my-6 justify-center gap-4'>
                <button onClick={handleFacebook} className='btn btn-outline btn-circle'><FaFacebook /></button>
                <button onClick={handleGoogle} className='btn btn-outline btn-circle'><FaGoogle /></button>
                <button onClick={handleGit} className='btn btn-outline btn-circle'><FaGithub /></button>
            </div>
            
        </div>
    );
};

export default SocialLogin;