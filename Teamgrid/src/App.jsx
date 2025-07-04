
import './App.css'
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./components/theme";
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import FooterSection from './components/FooterSection';
import Frontend from './pages/Frontend';

function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar/>
      <Homepage/>
      {/* <Frontend/> */}
      <FooterSection/>
      </ThemeProvider>
    </>
  )
}

export default App
