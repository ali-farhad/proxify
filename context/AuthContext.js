import { useState, useEffect, createContext } from "react"
import { useRouter } from 'next/router'
import { API_URL, NEXT_URL } from "../config"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    const router = useRouter()

    useEffect(() => {
        async function checkUser() {
            checkUserLoggedIn()
        }
        checkUser()
      }, []); // Or [] if effect doesn't need props or state

    //Register User
    const register = async (user) => {
        const res = await fetch(`${NEXT_URL}/api/register`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
          })
          
          const data = await res.json()
      
          if(res.ok) {
            
            // setUser(data.user)
            setError("Please Check Your Email To Verify Your Account")
            //set timeout for 15 seconds
            setTimeout(() => {
                router.push('/')
            }, 15000)
            

          } else {

            setError(data.message)      
          }
    }
    //Login User
    const login = async ({email: identifier, password}) => {
        const res = await fetch(`${NEXT_URL}/api/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              identifier,
              password
            })
          })
          
          const data = await res.json()
      
          if(res.ok) {
            
            setUser(data.user)
            router.push('/users/dashboard')

          } else {

            setError(data.message)      
          }
    }

    //Logout User
    const logout = async () => {
        const res = await fetch(`${NEXT_URL}/api/logout`, {
            method: 'POST'
        })
        
        if(res.ok) {
            setUser(null)
            router.push('/')
        }
    }
    
    //check if user is logged in
    const checkUserLoggedIn = async (user) => {

        const res = await fetch(`${NEXT_URL}/api/user`)
        const data = await res.json()

        if(res.ok) {
            setUser(data.user)
        } else {
            setUser(null)
        }

    } 

    return (
        <AuthContext.Provider value={{ user, error, register, login, logout, checkUserLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContext