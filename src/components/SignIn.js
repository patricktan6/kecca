import React, {useContext, useCallback} from 'react';
import { withRouter, Redirect } from 'react-router';
import fire from '../config/Fire';
import AuthContext from '../Auth';

const SignIn = ({ history }) => {
    const handleSignIn = useCallback(
        async event => {
            event.preventDefault();
            const {email, password} = event.target.elements;
            try {
                await fire
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push('/');
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );

    const { currentUser } = useContext(AuthContext);
    
    if (currentUser) {
        return <Redirect to='/' />;
    }

    return (
        <div>
            <h1>Sign In</h1>
            <form onSubmit={handleSignIn} >
                <label>
                    Email address:
                    <input name='email' type='email' placeholder='Email address' />
                </label>
                <label>
                    Password:
                    <input name='password' type='password' placeholder='Password' />
                </label>
                <button type='submit' >Sign In</button>
            </form>
        </div>
    );
}

export default withRouter(SignIn);
