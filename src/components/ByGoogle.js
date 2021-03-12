import React, {Component} from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app'
import 'firebase/auth'
import firebaseConfig from '../firebaseConfig'

const firebaseApp = firebase.initializeApp(firebaseConfig)

class ByGoogle extends Component{
    render()
    {
        const{
            user,
            signOut,
            signInWithGoogle,
        } = this.props

        return(
            <>
                {
                    user
                    ? <div>Bienvenido</div>
                    :<div>Logeate</div>
                }
                {
                    user
                    ? <button onClick= {signOut}>SIGN OUT</button>
                    :<button onClick= {signInWithGoogle}>SIGN IN WITH GOOGLE</button>
                }
            </>
        )
    }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
}

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(ByGoogle);