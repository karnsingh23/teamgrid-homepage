import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from '@mui/material';

import ReactIcon from '../assets/Group.png';
import JSIcon from '../assets/icons8-javascript.png';
import TSIcon from '../assets/icons8-typescript.png';
import HTMLIcon from '../assets/icons8-html5.png';
import CSSIcon from '../assets/icons8-css3.png';
import MUIIcon from '../assets/icons8-material-ui.png';
import BootstrapIcon from '../assets/icons8-bootstrap.png';
import image from "../assets/Rectangle-84.png";

const techStack = [
  { name: 'ReactJS', icon: ReactIcon },
  { name: 'JavaScript', icon: JSIcon },
  { name: 'TypeScript', icon: TSIcon },
  { name: 'HTML5', icon: HTMLIcon },
  { name: 'CSS3', icon: CSSIcon },
  { name: 'Material UI', icon: MUIIcon },
  { name: 'Bootstrap', icon: BootstrapIcon },
];

const TechStackPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ px: { xs: 2, md: 12 }, py: { xs: 5, md: 8 },maxWidth:'1700px',m:'0 auto' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: { xs: 4, md: 8 },
        }}
      >
        {/* Left side - Image */}
        <Box sx={{ 
          position: 'relative',
          width: { xs: '100%', md: '588px' },
          flexShrink: 0
        }}>
          <Box
            component="img"
            src={image}
            alt="Team Working"
            sx={{
              width: isMobile ? '100%' : '486px',
          minWidth: isMobile ? 'unset' : '486px',
              height: isMobile ? 'auto' : '591px',
              maxHeight: isSmallMobile ? '300px' : '400px',
              borderRadius: 4,
              objectFit: 'cover',
            }}
          />
          <Typography 
            variant="h5" 
            fontWeight="500" 
            sx={{
              position: 'absolute',
              bottom: isSmallMobile ? 40 : 80,
              left: isSmallMobile ? 15 : 30,
              color: '#fff',
              fontSize: isSmallMobile ? '24px' : { xs: '32px', md: '48px' },
              lineHeight: 1.2
            }}
          >
            We use{' '}
            <Box component="span" sx={{ color: '#00c897', fontWeight: 'bold' }}>
              modern,
            </Box>
            <Box component="span" sx={{ color: '#00c897', fontWeight: 'bold' }}>
              <br />scalable
            </Box>{' '}
            front-end <br />technologies
          </Typography>
        </Box>

        {/* Right side - Content */}
        <Box sx={{
          width: '100%',
          // pl: isMobile ? 0 : 4
        }}>
          <Typography 
            variant="h4" 
            fontWeight="500" 
            fontSize={isSmallMobile ? 32 : { xs: 36, md: 56 }} 
            gutterBottom
          >
            Our Tech Stack
          </Typography>
          <Typography 
            fontSize={isSmallMobile ? 14 : 16} 
            fontWeight={400}  
            mb={3}
          >
            We use modern, scalable front-end technologies to build fast, responsive, and modular interfaces.
            Our tech stack ensures performance, maintainability, and future-ready web experiences.
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

export default TechStackPage;