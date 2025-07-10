import React, { useRef } from "react";
import react from "../assets/front1.png";
import wordpress from "../assets/front2.png";
import shopify from "../assets/front3.png";
import postman from "../assets/front1.png";
import figma from "../assets/front2.png";
import nodejs from "../assets/front3.png";
import postgresql from "../assets/front1.png";
import mui from "../assets/front2.png";
import bootstrap from "../assets/front3.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import {
  Box,
  IconButton,
  useTheme,
  useMediaQuery,
  Typography,
  Button,
  Card,
  CardContent,
  Icon,
} from "@mui/material";
function Banner() {

     const theme = useTheme();
    const tools = [
  {
    name: "Figma",
    info: "Figma is a collaborative design tool for UI and UX.",
    icon: figma,
  },
  {
    name: "Bootstrap",
    info: "Bootstrap is a CSS framework for responsive design.",
    icon: bootstrap,
  },
  {
    name: "React",
    info: "React is a JavaScript library for building UI.",
    icon: react,
  },
  {
    name: "Material UI",
    info: "Material UI is a React UI framework based on Google's Material Design.",
    icon: mui,
  },

  {
    name: "PostgreSQL",
    info: "PostgreSQL is an advanced open-source database.",
    icon: postgresql,
  },
  {
    name: "Node.js",
    info: "Next.js is a React framework for server-side rendering.",
    icon: nodejs,
  },
  {
    name: "Shopify",
    info: "Shopify is a platform for online stores and retail point-of-sale systems.",
    icon: shopify,
  },
  {
    name: "Postman",
    info: "Postman is a tool for API testing.",
    icon: postman,
  },
  {
    name: "WordPress",
    info: "WordPress is a content management system.",
    icon: wordpress,
  },
];

    const orbitTriplets = [
  [tools[0], tools[1], tools[2]],
  [tools[3], tools[4], tools[5]],
  [tools[6], tools[7], tools[8]],
];
      const angleRef = useRef([0, -10, -50]);
    
      const orbitRefs = useRef([]);
      const initialAngles = useRef(
        Array(3)
          .fill()
          .map(() => 10)
      );
    
     const renderOrbit = (toolsPair, radius, orbitIndex) => {
        const currentAngle = angleRef.current[orbitIndex];
    
        const baseAngle = initialAngles.current[orbitIndex];
    
        const iconAngles = toolsPair.map(
          (_, i) => baseAngle + (360 / toolsPair.length) * i
        );
    
        const dotAngles = iconAngles.map((angle, i) => {
          const nextIndex = (i + 1) % iconAngles.length;
          return (angle + iconAngles[nextIndex]) * 8;
        });
    
        return (
          <Box
            key={`orbit-${orbitIndex}`}
            ref={(el) => (orbitRefs.current[orbitIndex] = el)}
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: radius * 2,
              height: radius * 2,
              borderRadius: "50%",
              border: "1px solid rgba(206, 198, 198, 0.3)",
              transition: "transform 0.1s linear",
              zIndex: 4 - orbitIndex,
            }}
            style={{
              transform: `translate(-50%, -50%) rotate(${currentAngle}deg)`,
            }}
          >
            {dotAngles.map((angle, i) => (
              <Box
                key={`dot-${i}`}
                sx={{
                  position: "absolute",
                  top: `calc(50% + ${
                    radius * Math.sin((angle * Math.PI) / 180)
                  }px)`,
                  left: `calc(50% + ${
                    radius * Math.cos((angle * Math.PI) / 180)
                  }px)`,
                  transform: "translate(-50%, -50%)",
                  width: { xs: 6, md: 20 },
                  height: { xs: 6, md: 20 },
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.85)",
                  boxShadow: "0 0 3px rgba(75, 145, 241, 0.5)",
                }}
              />
            ))}
    
            {toolsPair.map((tool, i) => {
              const angle = baseAngle + (360 / toolsPair.length) * i;
              const x = radius * Math.cos((angle * Math.PI) / 180);
              const y = radius * Math.sin((angle * Math.PI) / 180);
    
              return (
                <Box
                  key={tool.name}
                  sx={{
                    position: "absolute",
                    top: `calc(50% + ${y}px)`,
                    left: `calc(50% + ${x}px)`,
    
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 5,
                  }}
                  style={{
                    transform: `translate(-50%, -50%) rotate(${-currentAngle}deg)`,
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: 80, md: 190, lg: 214 },
                      height: { xs: 80, md: 190, lg: 214 },
                      borderRadius: "50%",
                      backgroundColor: "#0d264f",
                      border: "2px solid rgba(206, 198, 198, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.15)",
                        boxShadow: "0 0 5px rgba(75, 145, 241, 0.8)",
                      },
                    }}
                  >
                    <IconButton
                      sx={{
                        width: { xs: 50, md: 120, lg: 140 },
                        height: { xs: 50, md: 120, lg: 140 },
                        borderRadius: "50%",
                        padding: 0,
                        backgroundColor: "transparent",
                      }}
                    >
                      <Box
                        component="img"
                        src={tool.icon}
                        alt={tool.name}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </IconButton>
                  </Box>
                </Box>
              );
            })}
          </Box>
        );
      };
     const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box sx={{ width: "100%", bgcolor: "#072449" }}>
        <Box
          sx={{
             pl: { xs: 2, sm: 3, lg: 12 },
            maxWidth: "1700px",
            margin: "0 auto",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "relative",
              maxHeight: "800px",
              width: "100%",
              height: "100vh",
              overflow: "hidden",
            }}
          >
            {/* from here the animation is starting */}

            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",

                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "40px",
                  zIndex: 5,
                  pointerEvents: "none",
                },
              }}
            >
              {/* texts and buttons left part of the banner */}

              <Box
                sx={{
                  position: "relative",
                  // left: { xs: 0, md: "100px" },
                  maxWidth: { xs: "90%", md: 750, lg: 850 },
                  color: "white",
                  mt: "80px",
                  mx: { xs: "auto", md: 0 },
                  textAlign: { xs: "center", md: "left" },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { xs: "center", md: "flex-start" },
                  pointerEvents: "none",
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: "36px", md: "54px", lg: "64px" },
                    fontWeight: 700,
                    mb: 2,
                    lineHeight: 1.2,
                    zIndex: 2,
                  }}
                >
                  Front-End Development
                  <br />
                  for{" "}
                  <Box
                    component="span"
                    sx={{ color: "#30ECAD", display: "inline" }}
                  >
                    Fast & Scalable
                  </Box>
                  <br />
                  Interfaces
                </Typography>

                <Typography
                  sx={{
                    mb: 4,
                    color: "#E1E0E0",
                    zIndex: 2,
                    fontSize: { xs: "16px", md: "17px", lg: "20px" },
                    fontWeight: 300,
                  }}
                >
                  Hire expert front-end developers skilled in ReactJS, Material
                  UI, and modern frameworks. Ideal for agencies looking to scale
                  delivery without growing overhead.
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    flexWrap: "wrap",
                    justifyContent: { xs: "center", md: "flex-start" },
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#0070FF",
                      color: "white",
                      px: 4,
                      py: 1.5,
                      borderRadius: "16px",
                      fontSize: "1rem",
                      fontWeight: 400,
                      textTransform: "none",
                      zIndex: 2,
                      "&:hover": {
                        backgroundColor: "#0059C7",
                      },
                      pointerEvents: "auto",
                    }}
                  >
                    Hire Developers
                  </Button>

                  <Button
                    variant="outlined"
                    sx={{
                      color: "white",
                      px: 4,
                      py: 1.5,
                      borderRadius: "16px",
                      bgcolor: "#072449",
                      fontSize: "1rem",
                      fontWeight: 400,
                      borderColor: "rgba(255, 255, 255, 0.2)",
                      zIndex: 2,
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      },
                      pointerEvents: "auto",
                    }}
                     endIcon={<ArrowForwardIcon />}
                  >
                    Get a Free Estimate
                  </Button>
                </Box>
              </Box>

              {/* this is right part of the banner the animation */}

              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: { xs: "calc(100% - 180px)", md: "calc(100% - 190px)" },
                  transform: {xs:'translate(10%, 90%)',sm:'translate(-10%, 60%)',lg:"translate(-40%, 10%)"},
                  width: { xs: 240,sm:400, lg: 800 },
                  height: { xs: 240,sm:400, lg: 800 },
                  zIndex: 1,
                  opacity: { xs: 0.4, md: 1 },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                >
                  {orbitTriplets.map((triplet, index) =>
                    renderOrbit(
                      triplet,
                      isMobile ? 180 + index * 100 : 300 + index * 250,
                      index
                    )
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
  )
}

export default Banner