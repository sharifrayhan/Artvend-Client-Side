import { createContext } from 'react';
import app from '../Firebase/firebase.config'
import { createUserWithEmailAndPassword, getAuth , GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword,  signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { useState } from 'react';
import { useEffect } from 'react';
import Swal from 'sweetalert2'

export const Context = createContext(null)
const auth = getAuth(app)
console.log(auth)

const AllContext = ({children}) => {

    const [registerError, setRegisterError] = useState('')
    const [loginError, setLoginError] = useState('')
    const [termsError, setTermsError] = useState('')
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    if (loading){
        <div>
            <img src="https://i.ibb.co/1fKG6Yb/loading.gif" alt="" />
        </div>
    }


   const onSuccessfullRegistration = () =>{
    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Registration Successfull, Please Login to continue',
        showConfirmButton: false,
        timer: 1500
      })
   }

   const onRegistrationError = () =>{
    Swal.fire({
        position: 'top-center',
        icon: 'error',
        title: `${registerError}`,
        showConfirmButton: false,
        timer: 1500
      })
   }

   const onSuccessfullLogin = () =>{
    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Successfully logged in',
        showConfirmButton: false,
        timer: 1500
      })
   }

   const onLoginError = () =>{
    Swal.fire({
        position: 'top-center',
        icon: 'error',
        title: `${loginError}`,
        showConfirmButton: false,
        timer: 1500
      })
   }


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
      onSuccessfullRegistration()
      navigate('/Login')
      logOut()
  })
  .catch(error=>{
      console.error(error)
      setRegisterError(error.message)
      onRegistrationError()
  })
}

// create sign in method
const signIn = (email,password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}

// user sign in handle

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
          onSuccessfullLogin()
          navigate(location?.state ? location.state : "/");
        })
        .catch(error => {
          console.error(error.code);
          setLoginError(error.code)
          onLoginError()
        });
    }
  };


  // create log out method
    
  const logOut = () => {
    return signOut(auth);
}

const handleLogOut = () => {
    logOut();
    setRegisterError('')
    setLoginError('')
    setTermsError('')
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
        handleLogin,
        logOut,
        handleLogOut,
        user,
        termsError
    }

    return (
        <Context.Provider value={send}>{children}</Context.Provider>
    );
};

export default AllContext;