import React from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default ({ children, ...rest }) => {
    const { token } = useSelector(state => state.auth);

    return (
        <Route
            {...rest}
            render={() => (
                token
                    ? children
                    : <span>loading...</span>
                )
            }
        />
    );
};