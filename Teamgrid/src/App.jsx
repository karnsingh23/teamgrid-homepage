
import './App.css'
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./components/theme";
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import FooterSection from './components/FooterSection';
import Frontend from './pages/Frontend'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wordpress from './pages/Wordpress';
import UpdatedHomepage from './pages/UpdatedHomepage';
import ContactPage from './components/ContactPage';
import React, { useState, useRef } from "react";
import Dialog from "@mui/material/Dialog";

function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const scrollPosition = useRef(0);

  const handleOpen = () => {
    scrollPosition.current = window.scrollY;
    setContactOpen(true);
  };

  const handleClose = () => {
    setContactOpen(false);
    setTimeout(() => {
      window.scrollTo(0, scrollPosition.current);
    }, 0);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <div style={{ filter: contactOpen ? 'blur(2px)' : 'none', transition: 'filter 0.3s' }}>
            <Navbar onLetsTalkClick={handleOpen} />
            <Routes>
              <Route path='/' element={<UpdatedHomepage/>}/>
              <Route path='front-end-development' element={<Frontend/>}/>
              <Route path='teamgrid/wordpress' element={<Wordpress/>}/>
            </Routes>
            <FooterSection/>
          </div>
          <Dialog
            open={contactOpen}
            onClose={handleClose}
            maxWidth="xl"
            fullWidth
            PaperProps={{
              style: {
                borderRadius: 20,
                overflow: "hidden",
                maxWidth: '1300px',
                minHeight: '600px'
              }
            }}
            BackdropProps={{
              style: {
                backgroundColor: "rgba(0,0,0,0.1)"
              }
            }}
          >
            <ContactPage onClose={handleClose} />
          </Dialog>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App
