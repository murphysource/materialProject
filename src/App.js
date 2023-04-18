import React from 'react';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { SetThemeProvider } from "./components/theme/SetThemeProvider";
import CssBaseline from '@mui/material/CssBaseline';
import { Home } from "./components/pages/Home";

function App() {
  return (
    <Router>
      <SetThemeProvider>
        <CssBaseline />
        <Grid container>
          <Navbar />
          <Routes>
            <Route exact path ="/" component={Home} />
          </Routes>
          <Outlet />
        </Grid>
      </SetThemeProvider>
    </Router>
  );
}

export default App;