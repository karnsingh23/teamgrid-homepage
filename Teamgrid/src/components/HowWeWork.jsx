import React from 'react';
import { Box, Typography } from '@mui/material';
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";
import { PiArrowBendRightDownLight, PiArrowBendLeftDownLight } from "react-icons/pi";

const steps = [
  {
    id: '01',
    title: 'Discovery & Requirements',
    description:
      'We define goals, user types, and key screens to ensure alignment before design or development begins.',
  },
  {
    id: '02',
    title: 'Design Handoff & Planning',
    description:
      'We review design files, clarify edge cases, and outline technical scope for smooth project execution.',
  },
  {
    id: '04',
    title: 'API Integration',
    description:
      'We connect front-end with backend or CMS APIs to handle real-time data and error states reliably.',
  },
  {
    id: '03',
    title: 'Development',
    description:
      'We build responsive, pixel-perfect interfaces using React and modern CSS with clean, scalable code.',
  },
  {
    id: '05',
    title: 'QA & Testing',
    description:
      'We test on all screen sizes, ensure WCAG compliance, and validate performance across major browsers.',
  },
  {
    id: '06',
    title: 'Deployment or Handover',
    description:
      'We deliver clean, version-controlled code or coordinate handoff to backend teams for integration.',
  },
];

const StepCard = ({ id, title, description }) => (
  <Box
    sx={{
      width: {xs:'100%',sm:'100%',md:'330px',xl:'384px'},
      height: '160px',
      backgroundColor: '#005DD5',
      borderRadius: '24px',
      p: 2,
      position: 'relative',
      color: 'white',
      pl: {sm:6,xl:10},
      flexShrink: 0,
      '@media (max-width: 420px)': {
        width: '100%',
        height: 'auto',
        pl: 8,
        pr: 2,
      },
    }}
  >
    <Box
      sx={{
        width: {xs:'60px',xl:'80px'},
        height: {xs:'60px',xl:'80px'},
        backgroundColor: '#30ECAD',
        borderRadius: '24px',
        position: 'absolute',
        top: -20,
        left: -20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '300',
        fontSize: {xs:'30px',xl:'40px'},
        color: '#089767',
        '@media (max-width: 420px)': {
          width: 60,
          height: 60,
          fontSize: '30px',
        },
      }}
    >
      {id}
    </Box>

    <Typography fontSize={{ xs: '18px', xl: '20px' }} fontWeight={500} sx={{ mb: 1, mt: 1 }}>
      {title}
    </Typography>
    <Typography fontSize={{ xs: '14px', xl: '16px' }} fontWeight={400} color='#B2D2FC'>
      {description}
    </Typography>
  </Box>
);

const HowWeWork = () => {
  return (
    <Box sx={{ px: { xs: 2,sm:3 ,lg: 12 }, py: 6 ,maxWidth:'1700px',m:'0 auto'}}>
  <Box
    sx={{
      backgroundColor: '#0B3C7B',
      borderRadius: { xs: '24px', md: '40px' },
      p: { xs: 3, sm: 4, md: 5 },
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: 'white',
      width: '100%',
      maxWidth: '100vw', 
      mx: 'auto',         
      overflowX: 'hidden',
    }}
  >
    <Typography
      fontSize={{ xs: '28px', sm: '36px', md: '56px' }}
      fontWeight={500}
      mb={1}
      textAlign="center"
    >
      How We Work
    </Typography>

    <Typography
      sx={{
        fontWeight: 300,
        fontSize: { xs: '14px', md: '16px' },
        opacity: 0.8,
        mb: 6,
        textAlign: 'center',
        maxWidth: 458,
      }}
    >
      Our front-end development process is built to deliver speed, quality, and collaboration.
    </Typography>

    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 5, md: 7 },
      }}
    >
          {/* Row 1 */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              gap: 5,
              mb: 2,
              width: '100%',
              px: { xs: 2, md: 10 },
            }}
          >
            <StepCard {...steps[0]} />
            <Box sx={{ display: { xs: 'none', md: 'block' },fontSize:{sm:40,lg:80} }}>
              <HiArrowLongRight  color='#30ECAD' />
            </Box>
            <StepCard {...steps[1]} />
            <Box sx={{ display: { xs: 'none', md: 'block' },fontSize:{sm:40,lg:80} }}>
              <PiArrowBendRightDownLight color='#30ECAD' />
            </Box>
          </Box>

          {/* Row 2 */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              justifyContent: { xs: 'center', lg: 'flex-end' },
              gap: 5,
              mb: 2,
              pl: { md: 10 },
              px: { xs: 2, md: 10 },
              width: '100%',
            }}
          >
            <Box sx={{ display: { xs: 'none', md: 'block' },fontSize:{sm:40,lg:80} }}>
              <PiArrowBendLeftDownLight color='#30ECAD' />
            </Box>
            <StepCard {...steps[2]} />
            <Box sx={{ display: { xs: 'none', md: 'block' },fontSize:{sm:40,lg:80} }}>
              <HiArrowLongLeft color='#30ECAD' />
            </Box>
            <StepCard {...steps[3]} />
          </Box>

          {/* Row 3 */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              gap: 5,
              px: { xs: 2, md: 10 },
              width: '100%',
            }}
          >
            <StepCard {...steps[4]} />
            <Box sx={{ display: { xs: 'none', md: 'block' },fontSize:{sm:40,lg:80} }}>
              <HiArrowLongRight color='#30ECAD' />
            </Box>
            <StepCard {...steps[5]} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HowWeWork;
