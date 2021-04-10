import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default function ProtectedApp({component: Component, user, ...rest}) {
    return (
        <Route 
            {...rest} 
            render={
                props => {
                    if(user) {
                        return <div>  
                            <Component match={props.match}/>
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
