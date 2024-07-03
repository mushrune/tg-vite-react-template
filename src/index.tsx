import * as React from 'react'
import * as ReactDOM from 'react-dom/client'

import './index.css'
import Theme from "./theme/theme";
import { createTheme, CssBaseline, StyledEngineProvider, ThemeProvider } from "@mui/material";

import Routes from './routes';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const rootElement = document.getElementById('root') as HTMLElement;

const themeOptions = Theme;
themeOptions.components = {
    MuiPopover: { defaultProps: { container: rootElement }},
    MuiPopper: { defaultProps: { container: rootElement }}
}
const theme = createTheme( themeOptions );

const router = createBrowserRouter( Routes );

ReactDOM.createRoot(rootElement!).render(
    <React.StrictMode>
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <RouterProvider router={router} />
            </ThemeProvider>
        </StyledEngineProvider>
    </React.StrictMode>
)
