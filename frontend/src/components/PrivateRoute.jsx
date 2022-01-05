import * as React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, isAuth, ...rest }) => {
    return (
      <Route {...rest} render={({location}) => {
        // console.log(location)
        return (isAuth === true) ? children : <Navigate to={{
          pathname: '/connexion',
          state: {from: location} 
        }}/>
      }} />
    )
}

export default PrivateRoute;