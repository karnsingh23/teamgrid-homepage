import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  useTheme,
} from "@mui/material";
import { FaUsers, FaHandshake, FaProjectDiagram, FaCode } from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";

import dedicatedicon from "../assets/wordpress6.svg"
import ndaicon from "../assets/wordpress8.svg"
import flexibleicon from "../assets/wordpress7.svg"
import modularicon from "../assets/wordpress9.svg"
import qualityicon from "../assets/wordpress10.svg"


const cardData = [
  {
    icon: dedicatedicon,
    title: "Dedicated developers or full teams",
    description:
      "Get skilled individuals or complete teams tailored to your project needs.",
  },
  {
    icon: ndaicon,
    title: "NDA-compliant & agency-friendly",
    description:
      "We protect your privacy and work seamlessly under your brand.",
  },
  {
    icon: flexibleicon,
    title: "Flexible engagement models",
    description:
      "Choose hourly, retainer, or project-based models that fit your workflow.",
  },
  {
    icon: modularicon,
    title: "Modular code with documentation",
    description:
      "We write scalable code that’s easy to maintain and well-documented.",
  },
  {
    icon: qualityicon,
    title: "Quality Assured. High Performance.",
    description:
      "Every solution is thoroughly tested for speed, stability, and reliability.",
  },
];

const WhyChooseUs = () => {
  const theme = useTheme();

  return (
    <Box sx={{ px: { xs: 2,sm:3 ,lg: 12 }, py: { xs: 6, md: 10 } ,maxWidth:'1700px',mx:'auto'}}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "flex-start", sm: "center" },
          mb: 4,
          gap: 2,
          
        }}
      >
        <Typography
          variant="h4"
          fontWeight={500}
          sx={{ fontSize: { xs: "24px", sm: "32px", md: "36px",lg:"48px" } ,maxWidth:'599px'}}
        >
          Why Choose Teamgrid for Web Development?
        </Typography>
         <Button
                  variant="outlined"
                  sx={{
                    mt: { xs: 2, sm: 0 },
                    fontSize: { xs: "14px", sm: "16px", md: "18px" },
                    fontWeight: 400,
                    color: "#140E13",
                    borderColor: "#CACACA",
                    borderRadius: "16px",
                    textTransform: "none",
                    width: { xs: "100%", sm: "200px", md: "246px" },
                    height: { xs: "45px", sm: "52px", md: "59px" },
                  }}
                >
                  Explore Services →
                </Button>
      </Box>

            <Grid 
        container 
        spacing={3}
        sx={{
          justifyContent: {xs:'center',sm:'center',md:"center",lg:'start'}
        }}
      >
        {cardData.map((card, index) => (
          <Grid 
            item 
            xs={12} 
            sm={6} 
            md={4} 
            key={index}
            sx={{
              display: 'flex',
              // justifyContent: 'center'
              width:{xs:'100%',md:'32%'}
            }}
          >
            <Paper
              elevation={0}
              sx={{
                backgroundColor: "#F3F3F6",
                border: '1px solid #E9E9EB',
                width: { xs: "100%", sm: "100%", md: "100%", lg: "100%", xl: "100%" },
                height: 'auto',
                p: { xs: 2, md: "24px" },
                borderRadius: "24px",
                display: "flex",
                flexDirection: "column",
                // maxWidth: '450px'
              }}
            >
              <Box
              component="img"
              src={card.icon}
                sx={{               
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 2,
                }}
              />
                
              
              <Typography
                fontSize={{ xs: 16, md: 20 }}
                color="#05408E"
                fontWeight="500"
                gutterBottom
              >
                {card.title}
              </Typography>
              <Typography
                fontSize={{ xs: 14, md: 16 }}
                fontWeight={400}
                color="#140E13"
              >
                {card.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhyChooseUs;
