import React from "react";
import { Box, Typography, Button } from "@mui/material";
import bgImage from "../assets/rectangle-25.png";

const LetsTalk = () => {
  return (
    <Box
  sx={{
    width: "100%",
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <Box
    sx={{
      maxWidth: "1700px",
      margin: "0 auto",
      width: "100%",
      height: { xs: "auto", md: 600 },
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      px: { xs: 2, md: 12 },
      py: { xs: 6, md: 0 },
    }}
  >
    <Box
      sx={{
        bgcolor: "#072449",
        color: "white",
        borderRadius: 3,
        p: { xs: 3, md: 5 },
        maxWidth: 790,
        height:{xs:'auto',md:"428px"},
        display: "flex",
        flexDirection: "column",
        alignContent:'center',
        justifyContent:"center",
        boxShadow: 3,
      }}
    >
      <Typography
        fontSize={{ xs: "28px", sm: "34px", md: "40px",lg:"56px" }}
        fontWeight={500}
      >
        Let’s Build Together
      </Typography>
      <Typography variant="subtitle2" fontWeight={400}  sx={{ mb: 5 , fontSize:{xs:'14px',md:'16px',lg:'18px'}}}>
        — Efficiently, Flexibly, and Reliably
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 ,fontSize:{xs:'15px',md:'17px',lg:'20px'}}}>
        Whether you're scaling a team or shipping a project, Teamgrid is your
        partner in dependable delivery.
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexDirection: { xs: "column", sm: "row" },
          width: "100%",
        }}
      >
        <Button
          variant="contained"
          sx={{
            bgcolor: "white",
            color: "black",
            px: 4,
            py: 1.5,
            borderRadius: 999,
            fontSize:{xs:'16px',md:"18px"},
            fontWeight:400,
            textTransform: "none",
            width: { xs: "100%", sm: "auto" },
            "&:hover": {
              bgcolor: "#f0f0f0",
            },
          }}
        >
          Let’s Talk
        </Button>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#FF4D00",
            color: "white",
            px: 4,
            py: 1.5,
            borderRadius: 999,
            textTransform: "none",
            fontSize:{xs:'16px',md:"18px"},
            fontWeight:400,
            width: { xs: "100%", sm: "auto" },
            "&:hover": {
              bgcolor: "#e14a00",
            },
          }}
        >
          Request a Free Quote
        </Button>
      </Box>
    </Box>
  </Box>
</Box>

  );
};

export default LetsTalk;
