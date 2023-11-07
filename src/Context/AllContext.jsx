import { createContext } from 'react';
import app from '../Firebase/firebase.config'
import { getAuth , GoogleAuthProvider,  signInWithPopup } from "firebase/auth"

export const Context = createContext(null)
const auth = getAuth(app)
console.log(auth)

const AllContext = ({children}) => {


// import and create google auth provider
    const googleProvider = new GoogleAuthProvider()

// import and create google sign in method

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

// Handle google sign in user
const handleGoogleSignIn = (navigate,location) => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        result.getStatusCode()
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
       
      });
  };



    const send = {
        handleGoogleSignIn,

    }

    return (
        <Context.Provider value={send}>{children}</Context.Provider>
    );
};

export default AllContext;