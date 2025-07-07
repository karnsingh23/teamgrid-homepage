import React from "react";
import { Box, Typography, Button } from "@mui/material";

const LetsTalk = ({ bgImage, title, paraone, paratwo, btnone, btntwo }) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "auto", md: "600px" },
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      {/* Left 20% Blue Background */}
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "20%",
          backgroundColor: "#085BC8",
          zIndex: 1,
          display: { xs: "none", md: "block" },
        }}
      />

      {/* Content Container */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          maxWidth: "1700px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          px: { xs: 2, md: 12 },
          py: { xs: 6, md: 0 },
        }}
      >
        {/* Content Box */}
        <Box
          sx={{
            bgcolor: "#072449",
            color: "white",
            borderRadius: 3,
            p: { xs: 3, md: 5 },
            maxWidth: 700,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            boxShadow: 3,
          }}
        >
          <Typography
            fontSize={{ xs: "28px", sm: "34px", md: "40px", lg: "56px" }}
            fontWeight={500}
          >
            {title}
          </Typography>

          <Typography
            variant="subtitle2"
            fontWeight={400}
            sx={{ mb: 3, fontSize: { xs: "14px", md: "16px", lg: "18px" } }}
          >
            {paraone}
          </Typography>

          <Typography
            variant="body1"
            sx={{ mb: 4, fontSize: { xs: "15px", md: "17px", lg: "20px" } }}
          >
            {paratwo}
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
                borderRadius: '16px',
                fontSize: { xs: "16px", md: "18px" },
                fontWeight: 400,
                textTransform: "none",
                width: { xs: "100%", sm: "auto" },
                "&:hover": {
                  bgcolor: "#f0f0f0",
                },
              }}
            >
              {btnone}
            </Button>

            <Button
              variant="contained"
              sx={{
                bgcolor: "#FF4D00",
                color: "white",
                px: 4,
                py: 1.5,
                borderRadius: '16px',
                textTransform: "none",
                fontSize: { xs: "16px", md: "18px" },
                fontWeight: 400,
                width: { xs: "100%", sm: "auto" },
                "&:hover": {
                  bgcolor: "#e14a00",
                },
              }}
            >
              {btntwo}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LetsTalk;
