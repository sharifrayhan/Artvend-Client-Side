import { createContext } from 'react';
import app from '../Firebase/firebase.config'
import { createUserWithEmailAndPassword, getAuth , GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword,  signInWithPopup, updateProfile } from "firebase/auth"
import { useState } from 'react';
import { useEffect } from 'react';

export const Context = createContext(null)
const auth = getAuth(app)
console.log(auth)

const AllContext = ({children}) => {

    const [registerError, setRegisterError] = useState('')
    const [termsError, setTermsError] = useState('')
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


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

  // import and create register user
  const createUser = (email,password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}

// Handle register user

const handleRegister = (e, navigate) => {
  e.preventDefault();
  const form = new FormData(e.currentTarget);
  const name = form.get('name');
  const email = form.get('email');
  const password = form.get('password');
  const url = form.get('url');
  const checkbox = form.get('checkbox');
  console.log(email,password)
  setRegisterError('')
//   setRegisterSuccess('')
  setTermsError('')

  if (password.length<6){
    setRegisterError('Password Should be at least 6 characters or long');
    return
  }

  else if(!/[A-Z]/.test(password)){
    setRegisterError('Password must contain an uppercase letter');
    return
  }

  else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)){
    setRegisterError('Password must contain a special character');
    return
  }

  else if(!checkbox){
    setTermsError('You have to accept our terms & conditions');
    return 
  }

  createUser(email,password,navigate)
  .then(result=>{
      console.log(result.user)
      updateProfile(result.user,{
        displayName: name,
        photoURL: url,
      })

      navigate('/Login')
      
  })
  .catch(error=>{
      console.error(error)
      setRegisterError(error.message)
  })
}

// import and create sign in method
const signIn = (email,password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}

// Handle sign in user

const handleLogin = (e, navigate, location) => {
    e.preventDefault();
  
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
  
    if (email === '' && password === '') {
      handleGoogleSignIn();
    } else {
      signIn(email, password, navigate, location)
        .then(result => {
          console.log(result.user);

          navigate(location?.state ? location.state : "/");
        })
        .catch(error => {
          console.error(error.code);

        });
    }
  };

  
 useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser=>{
        console.log(' on auth state activity', currentUser);
        setUser(currentUser)
        setLoading(false)
    });
    return () =>{
        unSubscribe();
    }
},[])

    const send = {
        handleGoogleSignIn,
        handleRegister,
        registerError,
        handleLogin
    }

    return (
        <Context.Provider value={send}>{children}</Context.Provider>
    );
};

export default AllContext;