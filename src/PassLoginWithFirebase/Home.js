import { signOut } from "firebase/auth";
import React from "react";
import { database } from './FirebaseConfig';
import { useNavigate } from "react-router-dom";
import RecipeDetails from "../components/RecipeDetails";

function HomeScreen(){
    const history = useNavigate()

    const handleClick = () =>{
        signOut(database).then(val=>{
            console.log(val,"val")
            history('/')
        })
    }
    return(
        <div>
        <RecipeDetails/>
            <button onClick={handleClick}>Logout</button>
        </div>
    )
}
export default HomeScreen;