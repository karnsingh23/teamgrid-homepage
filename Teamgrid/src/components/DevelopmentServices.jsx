import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  List,
  ListItem,
  ListItemIcon,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import fullstackicon from "../assets/wordpress3.svg";
import frontendicon from "../assets/wordpress5.svg";
import backendicon from "../assets/wordpress4.svg";
import wordpressicon from "../assets/wordpress2.svg";
import ReactIcon from '../assets/Group.png';
import JSIcon from '../assets/icons8-javascript.png';
import TSIcon from '../assets/icons8-typescript.png';
import HTMLIcon from '../assets/icons8-html5.png';
import CSSIcon from '../assets/icons8-css3.png';
import MUIIcon from '../assets/icons8-material-ui.png';
import BootstrapIcon from '../assets/icons8-bootstrap.png';

const techStack = [
  { name: 'ReactJS', icon: ReactIcon },
  { name: 'JavaScript', icon: JSIcon },
  { name: 'TypeScript', icon: TSIcon },
  { name: 'HTML5', icon: HTMLIcon },
  { name: 'CSS3', icon: CSSIcon },
  { name: 'Material UI', icon: MUIIcon },
  { name: 'Bootstrap', icon: BootstrapIcon },
];

const services = [
  {
    icon: frontendicon,
    title: "Front-End Development",
    description: "Fast, responsive, and pixel-perfect user interfaces.",
  },
  {
    icon: backendicon,
    title: "Back-End Development",
    description: "Scalable, secure, and efficient architecture.",
  },
  {
    icon: fullstackicon,
    title: "Full-Stack Development",
    description: "End-to-end development for fully integrated web apps.",
  },
  {
    icon: wordpressicon,
    title: "WordPress & CMS",
    description: "Custom WordPress sites with Elementor, and more.",
  },
];

const offerings = [
  "Responsive UI development",
  "Component-based architecture using ReactJS",
  "PSD/Figma to code conversion",
  "SEO-ready and accessible markup",
  "Integration with REST APIs",
];


const DevelopmentServices = () => {
    const theme = useTheme();
 const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [activeIndex , setActiveIndex] = useState(0);
    

const handleClick =(index)=>{
    setActiveIndex(index)
}
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        pl: { xs: 2, sm: 3, lg: 12 },
        gap: {xs:2,sm:4,lg:8},
        maxWidth:'1700px',
        mx:'auto'
      }}
    >
      {/* Sidebar */}
      <Box
        sx={{
          width: { xs: "100%", md: "25%" },
        }}
      >
        <Stack spacing={2} sx={{ mt:{xs:0,md:6}}}>
          {services.map((service, index) => (
            <Box
              key={index}
              onClick={()=>handleClick(index)}
              sx={{
                borderTopLeftRadius: "24px",
                borderTopRightRadius: "5px",
                borderBottomLeftRadius: "24px",
                borderBottomRightRadius: "24px",
                backgroundColor: index === activeIndex ? "#05408E" : "transparent",
                color: index === activeIndex ? "#fff" : "#000",
                p: 2,
                cursor:'pointer',
               
              }}
            >
              <Stack direction="row" spacing={2} >
                <Box
                  sx={{
                    backgroundColor: index === activeIndex ?"#fff":"#E5F1FF",
                    borderRadius: "12px",
                    height: "40px",
                    width: "60px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    
                  }}
                >
                  <Box component="img" src={service.icon} />
                </Box>
                <Box>
                  <Typography fontWeight={500} fontSize={20}>
                    {service.title}
                  </Typography>
                  <Typography fontWeight={400} fontSize={16} sx={{color:index===activeIndex?"#B2D2FC":"#000"}}>
                    {service.description}
                  </Typography>
                </Box>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Box>

      {/* Main Content */}
      <Box
        elevation={2}
        sx={{
          flex: 1,
          borderRadius: 3,
          p: { xs: 3, md: 6 },
          backgroundColor: "#F4F9FF",
        }}
      >
       <Box sx={{width:'80%'}}>
         <Typography
          variant="h5"
          fontWeight={500}
          mb={2}
          sx={{ fontSize: { xs: "22px", md: "28px",lg:'40px' } }}
          lineHeight={1}
        >
          Build modern, responsive interfaces that users love.
        </Typography>

        <Typography fontSize={16} fontWeight={400} mb={3}>
          Our front-end developers bring designs to life using clean, performant
          code. We specialize in ReactJS, HTML/CSS, and popular UI libraries
          like Material UI and Bootstrap.
        </Typography>

        <Typography fontSize={32} fontWeight={500} mb={1}>
          What we offer
        </Typography>
        <List dense>
          {offerings.map((offer, index) => (
            <ListItem sx={{ml:5}} key={index} disableGutters>
              <ListItemIcon sx={{ minWidth: 28 }}>
                <IoCheckmarkDoneSharp color="#3BB226" fontSize="20px"/>
              </ListItemIcon>
              <Typography fontSize={16} fontWeight={400}  >{offer}</Typography>
            </ListItem>
          ))}
        </List>

        <Typography fontSize={32} fontWeight={500} mt={3} mb={1}>
          Tech Stack
        </Typography>
        <Grid container spacing={isSmallMobile ? 1 : 2}>
            {techStack.map((tech, index) => (
              <Grid item xs={6} sm={4} md={4} key={index}>
                <Card
                  variant="outlined"
                  sx={{ 
                    textAlign: 'center', 
                    py: isSmallMobile ? 1 : 2, 
                    borderColor: '#CFE5FF',
                    borderRadius: '16px', 
                    width: isSmallMobile ? '100px' : '123px',
                    height: isSmallMobile ? '95px' : '115px',
                    display: 'flex',
                    justifyContent: 'center',
                    mx: 'auto'
                  }}
                >
                  <CardContent sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    p: '8px !important'
                  }}>
                    <Box
                      component="img"
                      sx={{
                        width: isSmallMobile ? '40px' : '56px',
                        height: isSmallMobile ? '40px' : '56px',
                        objectFit: 'contain'
                      }}
                      src={tech.icon}
                      alt={tech.name}
                    />
                    <Typography color='#05408E' fontWeight="500" mt={1} fontSize={isSmallMobile ? 12 : 14}>
                      {tech.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
       </Box>
      </Box>
    </Box>
  );
};

export default DevelopmentServices;
