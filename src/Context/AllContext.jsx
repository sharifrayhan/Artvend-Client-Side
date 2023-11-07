import { createContext } from 'react';
import app from '../Firebase/firebase.config'
import getAuth, { } from "firebase/auth"

const auth = getAuth(app)
export const Context = createContext(null)
const AllContext = ({children}) => {



    const send = {
     
    }

    return (
        <Context.Provider value={send}>{children}</Context.Provider>
    );
};

export default AllContext;