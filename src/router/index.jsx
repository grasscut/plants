import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../pages/Dashboard';
import PlantDetails from '../pages/plant';

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <PrivateRoute path="/plant/:id">
                    <PlantDetails />
                </PrivateRoute>
                <PrivateRoute path="/">
                    <Dashboard />
                </PrivateRoute>
            </Switch>
        </BrowserRouter>
    );
};