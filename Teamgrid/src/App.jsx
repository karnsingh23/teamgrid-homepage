
import './App.css'
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./components/theme";
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import FooterSection from './components/FooterSection';


function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar/>
      <Homepage/>
      <FooterSection/>
      </ThemeProvider>
    </>
  )
}

export default App
