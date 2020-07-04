import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MuiThemeProvider, Box } from '@material-ui/core';
import Router from './router';
import Header from './components/layout/Header';
import theme from './theme';
import './i18n';
import { getAuthenticationToken } from './store/actions/auth';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAuthenticationToken());
    }, []);

    return (
        <div id="app">
            <MuiThemeProvider theme={theme}>
                <Header />
                <Box p={2}>
                    <Router />
                </Box>
            </MuiThemeProvider>
        </div>
    );
}

export default App;
