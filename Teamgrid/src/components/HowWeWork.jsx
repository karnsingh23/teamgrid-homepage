import React from 'react';
import { Box, Typography } from '@mui/material';
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";
import { PiArrowBendRightDownLight, PiArrowBendLeftDownLight } from "react-icons/pi";


const StepCard = ({ id, title, description, cardbgcolor, numBoxbgcolor, idcolor, titlecolor, desccolor }) => (
  <Box
    sx={{
      width: { xs: '100%', sm: '100%', md: '330px', xl: '384px' },
      height: '160px',
      backgroundColor: cardbgcolor,
      borderRadius: '24px',
      p: 2,
      position: 'relative',
      pl: {xs:6, sm: 6, xl: 10 },
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
        width: { xs: '60px', xl: '80px' },
        height: { xs: '60px', xl: '80px' },
        backgroundColor: numBoxbgcolor,
        borderRadius: '24px',
        position: 'absolute',
        top: -20,
        left: -20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '300',
        fontSize: { xs: '30px', xl: '40px' },
        color: idcolor,
      }}
    >
      {id}
    </Box>
    <Typography color={titlecolor} fontSize={{ xs: '18px', xl: '20px' }} fontWeight={500} sx={{ mb: 1, mt: 1 }}>
      {title}
    </Typography>
    <Typography fontSize={{ xs: '14px', xl: '16px' }} fontWeight={400} color={desccolor}>
      {description}
    </Typography>
  </Box>
);

// Reusable HowWeWork Component
const HowWeWork = ({
  steps = [],
  bgColor,
  headingColor ,
  heading2color,
  cardbgcolor ,
  numBoxbgcolor ,
  idcolor ,
  titlecolor ,
  desccolor,
  arrowColor
}) => {
  return (
    <Box sx={{ px: { xs: 2, sm: 3, lg: 12 }, py: 6, maxWidth: '1700px', m: '0 auto' }}>
      <Box
        sx={{
          backgroundColor: bgColor,
          borderRadius: { xs: '24px', md: '40px' },
          p: { xs: 3, sm: 4, md: 5 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          overflowX: 'hidden',
        }}
      >
        <Typography
          fontSize={{ xs: '28px', sm: '36px', md: '56px' }}
          fontWeight={500}
          mb={1}
          textAlign="center"
          color={headingColor}
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
            color:heading2color
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
            <StepCard {...steps[0]} cardbgcolor={cardbgcolor} numBoxbgcolor={numBoxbgcolor} idcolor={idcolor} titlecolor={titlecolor} desccolor={desccolor} />
            <Box sx={{ display: { xs: 'none', md: 'block' }, fontSize: { sm: 40, lg: 80 } }}>
              <HiArrowLongRight color={arrowColor} />
            </Box>
            <StepCard {...steps[1]} cardbgcolor={cardbgcolor} numBoxbgcolor={numBoxbgcolor} idcolor={idcolor} titlecolor={titlecolor} desccolor={desccolor} />
            <Box sx={{ display: { xs: 'none', md: 'block' }, fontSize: { sm: 40, lg: 80 } }}>
              <PiArrowBendRightDownLight color={arrowColor} />
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
              px: { xs: 2, md: 10 },
              width: '100%',
            }}
          >
            <Box sx={{ display: { xs: 'none', md: 'block' }, fontSize: { sm: 40, lg: 80 } }}>
              <PiArrowBendLeftDownLight color={arrowColor} />
            </Box>
            <StepCard {...steps[2]} cardbgcolor={cardbgcolor} numBoxbgcolor={numBoxbgcolor} idcolor={idcolor} titlecolor={titlecolor} desccolor={desccolor} />
            <Box sx={{ display: { xs: 'none', md: 'block' }, fontSize: { sm: 40, lg: 80 } }}>
              <HiArrowLongLeft color={arrowColor} />
            </Box>
            <StepCard {...steps[3]} cardbgcolor={cardbgcolor} numBoxbgcolor={numBoxbgcolor} idcolor={idcolor} titlecolor={titlecolor} desccolor={desccolor} />
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
            <StepCard {...steps[4]} cardbgcolor={cardbgcolor} numBoxbgcolor={numBoxbgcolor} idcolor={idcolor} titlecolor={titlecolor} desccolor={desccolor} />
            <Box sx={{ display: { xs: 'none', md: 'block' }, fontSize: { sm: 40, lg: 80 } }}>
              <HiArrowLongRight color={arrowColor} />
            </Box>
            <StepCard {...steps[5]} cardbgcolor={cardbgcolor} numBoxbgcolor={numBoxbgcolor} idcolor={idcolor} titlecolor={titlecolor} desccolor={desccolor} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HowWeWork;
