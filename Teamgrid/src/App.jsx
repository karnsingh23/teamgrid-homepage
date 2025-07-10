
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

function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='front-end-development' element={  <Frontend/>}/>
          <Route path='teamgrid/wordpress' element={ <Wordpress/>}/>
        </Routes>
        <FooterSection/>
      </Router>     
    
      </ThemeProvider>
    </>
  )
}

export default App
