import React, { useState } from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const faqs = [
  {
    question: 'Can I hire a front-end developer for just a week or two?',
    answer:
      'Yes, we offer short-term engagements perfectly suited for urgent UI needs, one-off tasks, or overflow support when your internal team is at capacity.',
  },
  {
    question:
      'Do your developers follow responsive and accessibility guidelines?',
    answer:
      'Absolutely. We adhere to WCAG and modern responsiveness principles to ensure inclusive, performant interfaces across all devices.',
  },
  {
    question: 'Can you work with our in-house backend team?',
    answer:
      'Yes, our front-end team can seamlessly integrate with your in-house backend team using APIs or custom coordination workflows.',
  },
];

const FAQ = () => {
  const [expanded, setExpanded] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (index) => {
    setExpanded((prev) => (prev === index ? null : index));
  };

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4 },
        py: { xs: 4, sm: 8 },
        backgroundColor: '#F3F8FF',
        minHeight: '100vh',
        textAlign: 'center',
      }}
    >
      <Box sx={{ width: { xs: '100%', sm: '477px' }, m: '0 auto' }}>
        <Typography fontSize={{ xs: '32px', sm: '48px' }} fontWeight="500">
          Got Questions
        </Typography>
        <Typography 
          fontSize={{ xs: '16px', sm: '18px' }} 
          fontWeight={500} 
          sx={{ mb: { xs: 3, sm: 5 } }}
        >
          Clear responses to common questions about how we work and what we deliver.
        </Typography>
      </Box>

      <Box sx={{ 
        width: '100%', 
        maxWidth: 588, 
        mx: 'auto',
        px: { xs: 2, sm: 0 } 
      }}>
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expanded === index}
            onChange={() => handleChange(index)}
            disableGutters
            elevation={0}
            sx={{
              mb: 2,
              backgroundColor: '#fff',
              borderRadius: '24px !important',
              border: '1px solid #D2E6FF',
              overflow: 'hidden',
              '&::before': { display: 'none' },
            }}
          >
            <AccordionSummary
              expandIcon={
                <IconButton>
                  {expanded === index ? (
                    <RemoveIcon sx={{ color: '#0048B1' }} />
                  ) : (
                    <AddIcon sx={{ color: '#0048B1' }} />
                  )}
                </IconButton>
              }
              sx={{
                px: { xs: 2, sm: 3 },
                py: 2,
                minHeight: 'unset !important',
                '& .MuiAccordionSummary-content': {
                  my: '12px !important',
                },
                color: '#0048B1',
              }}
            >
              <Typography 
                fontWeight={400} 
                fontSize={{ xs: '16px', sm: '18px' }} 
                sx={{ color: '#05408E' }}
              >
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails 
              sx={{ 
                textAlign: 'left', 
                px: { xs: 2, sm: 3 }, 
                pb: 3,
                pt: 0 
              }}
            >
              <Typography fontWeight={400} fontSize={{ xs: '14px', sm: '16px' }} color='#140E13'>
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default FAQ;