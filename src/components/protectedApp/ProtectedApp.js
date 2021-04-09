import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import history from '../../history';

export default function ProtectedApp({component: Component, user, ...rest}) {
    return (
        <Route 
            {...rest} 
            render={
                props => {
                    if(user) {
                        console.log("**********", user);
                        return <div>  
                            <Component />
                        </div>
                    } else {
                        // history.push('/');
                        return <Redirect to= {
                            {
                                pathname : "/",
                                state : {
                                    from : props.location
                                }
                            }
                        } />
                    }
                }
        }

        />
    )
}
