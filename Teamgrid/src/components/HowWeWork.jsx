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
      width: '384px',
      height: '160px',
      backgroundColor: '#005DD5',
      borderRadius: '24px',
      p: 2,
      position: 'relative',
      color: 'white',
      pl: 10,
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
        width: '80px',
        height: '80px',
        backgroundColor: '#30ECAD',
        borderRadius: '24px',
        position: 'absolute',
        top: -20,
        left: -20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '300',
        fontSize: '40px',
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

    <Typography fontSize={{ xs: '18px', md: '20px' }} fontWeight={500} sx={{ mb: 1, mt: 1.5 }}>
      {title}
    </Typography>
    <Typography fontSize={{ xs: '14px', md: '16px' }} fontWeight={400} color='#B2D2FC'>
      {description}
    </Typography>
  </Box>
);

const HowWeWork = () => {
  return (
    <Box sx={{ px: { xs: 0, md: 12 }, py: 6 }}>
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
      maxWidth: '100vw', // make it full width on large screens
      mx: 'auto',         // center it horizontally
      overflowX: 'hidden', // in case something overflows
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
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <HiArrowLongRight fontSize={80} color='#30ECAD' />
            </Box>
            <StepCard {...steps[1]} />
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <PiArrowBendRightDownLight fontSize={80} color='#30ECAD' />
            </Box>
          </Box>

          {/* Row 2 */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              justifyContent: { xs: 'center', md: 'flex-end' },
              gap: 5,
              mb: 2,
              pl: { md: 10 },
              px: { xs: 2, md: 10 },
              width: '100%',
            }}
          >
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <PiArrowBendLeftDownLight fontSize={80} color='#30ECAD' />
            </Box>
            <StepCard {...steps[2]} />
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <HiArrowLongLeft fontSize={80} color='#30ECAD' />
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
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <HiArrowLongRight fontSize={80} color='#30ECAD' />
            </Box>
            <StepCard {...steps[5]} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HowWeWork;
