'use client'
import Header from "@/_components/header";
import Login from "@/_components/login";
import Signup from "@/_components/signup";
import { useState } from "react";
import './style.css'
import Footer from "@/_components/footer";

const Resturant = () => {
    const [login, setLogin] = useState(true)
    return (
        <>
        <div className="container">
             <Header/>
            <h1>Resturant Login/Signup</h1>
            {
                login ? <Login /> : <Signup />
            }

            <div>
                <button className="button-link" onClick={() => setLogin(!login)}>{login ? "Not a member? Signup" : "Already have Account? Login Here"}</button>
            </div>
            </div>
            <Footer/>
        </>
    )
}

export default Resturant;