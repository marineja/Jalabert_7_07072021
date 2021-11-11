import * as React from 'react'
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, isAuth, ...rest }) => {
    return (
      <Route {...rest} render={({location}) => {
        // console.log(location)
        return (isAuth === true) ? children : <Redirect to={{
          pathname: '/connexion',
          state: {from: location} 
        }}/>
      }} />
    )
}

export default PrivateRoute;