import React, { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const [token, setToken] = useState(null);
    const navigate = useNavigate();

    const loginAction = async(data) => {
        try{
            const response = await fetch("https://fakestoreapi.com/auth/login", {
                method : 'POST',
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(data),
            });

            const res = await response.json();
            if(res.data){
                setUser(res.data.user);
                setToken(res.token);
                navigate('/dashboard');
                localStorage.setItem("site",res.token);
                return;
            }
            throw new Error(res.message);
        } catch (err){
            console.log(err)
        }
    };

    const logOut = () => {
        setUser("");
        setToken("");
        localStorage.removeItem("site");
        navigate("/login");
    };

  return( 
    <AuthContext.Provider value={{user, token, loginAction, logOut}}>
        {children}
    </AuthContext.Provider>
    )
}

export default AuthProvider

export const useAuth = () => {
    return useContext(AuthContext);
}
