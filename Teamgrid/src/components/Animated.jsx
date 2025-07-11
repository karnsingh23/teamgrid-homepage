import React, { useState, useEffect, useRef } from "react";
import { startTransition } from "react";
import {
  Box,
  Typography,
  IconButton,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { RiArrowGoBackLine } from "react-icons/ri";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import logo from "../assets/sun.svg";
import react from "../assets/react-2.png";
import wordpress from "../assets/W.png";
import shopify from "../assets/shopify.png";
import postman from "../assets/postman.png";
import figma from "../assets/figma-icon.png";
import nodejs from "../assets/nodejs-3.png";
import postgresql from "../assets/postgresql.png";
import mui from "../assets/material-ui.png";
import bootstrap from "../assets/bootstrap.png";

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
    name: "GitHub",
    info: "GitHub is a code hosting platform for collaboration.",
    icon: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
  },
  {
    name: "MongoDB",
    info: "MongoDB is a NoSQL document database.",
    icon: "https://cdn-icons-png.flaticon.com/512/919/919836.png",
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
  {
    name: "Next.js",
    info: "Next.js is a React framework for server-side rendering.",
    icon: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
  },
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
    name: "Material UI",
    info: "Material UI is a React UI framework based on Google's Material Design.",
    icon: mui,
  },
  {
    name: "GitHub",
    info: "GitHub is a code hosting platform for collaboration.",
    icon: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
  },
  {
    name: "MongoDB",
    info: "MongoDB is a NoSQL document database.",
    icon: "https://cdn-icons-png.flaticon.com/512/919/919836.png",
  },
  {
    name: "PostgreSQL",
    info: "PostgreSQL is an advanced open-source database.",
    icon: postgresql,
  },
];

const orbitTriplets = [
  [tools[0], tools[1], tools[2], tools[3]],
  [tools[4], tools[5], tools[6], tools[7]],
  [tools[8], tools[9], tools[10], tools[11], tools[12], tools[13]],
  [tools[14], tools[15], tools[16], tools[17], tools[18], tools[19]],
];

const Animated = () => {
  const [showModal, setShowModal] = useState(false);
  const [isHoveringOrbit, setIsHoveringOrbit] = useState(false);
  const angleRef = useRef([0, 0, 0, 0]);

  const [logoZoomed, setLogoZoomed] = useState(false);
  const [selectedTool, setSelectedTool] = useState(null);
  const [logoVisible, setLogoVisible] = useState(true);

  const orbitRefs = useRef([]);
  const animationRef = useRef();
  const initialAngles = useRef(
    Array(4)
      .fill()
      .map(() => Math.random() * 360)
  );


  useEffect(() => {
    if (isHoveringOrbit) {
      cancelAnimationFrame(animationRef.current);
      return;
    }

    const speeds = [0.02, 0.015, 0.01, 0.007];
    let lastTime = performance.now();

    const animate = (time) => {
      const delta = time - lastTime;
      lastTime = time;

      angleRef.current = angleRef.current.map(
        (angle, i) =>
          angle + ((i % 2 === 0 ? speeds[i] : -speeds[i]) * delta) / 16
      );

      // Apply transform to each orbit div directly
      orbitRefs.current.forEach((orbitEl, i) => {
        if (orbitEl) {
          orbitEl.style.transform = `translate(-50%, -50%) rotate(${angleRef.current[i]}deg)`;
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [isHoveringOrbit]);

  const renderOrbit = (toolsPair, radius, orbitIndex) => {
    const currentAngle = angleRef.current[orbitIndex];

    const baseAngle = initialAngles.current[orbitIndex];

    const iconAngles = toolsPair.map(
      (_, i) => baseAngle + (360 / toolsPair.length) * i
    );

    const dotAngles = iconAngles.map((angle, i) => {
      const nextIndex = (i + 1) % iconAngles.length;
      return (angle + iconAngles[nextIndex]) / 2;
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
              width: 6,
              height: 6,
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
              // key={tool.name}
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
                onMouseEnter={() => setIsHoveringOrbit(true)}
                onMouseLeave={() => setIsHoveringOrbit(false)}
                sx={{
                  width: { xs: 40, md: 64 },
                  height: { xs: 40, md: 64 },
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
                  onClick={() => {
                    startTransition(() => {
                      setSelectedTool(tool);
                      if (!isMobile) {
                        setLogoZoomed(true);
                      }
                      // setLogoVisible(true);
                    });

                    setTimeout(() => {
                      startTransition(() => {
                        // setLogoVisible(false);
                        setShowModal(true);
                      });
                    }, 500);
                  }}
                  sx={{
                    width: { xs: 24, md: 40 },
                    height: { xs: 24, md: 40 },
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

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box sx={{ width: "100%", bgcolor: "#072449" }}>
        <Box
          sx={{
            maxWidth: "1700px",
            margin: "0 auto",
            position: "relative",
            overflow: "hidden",
            pl: { xs: 2, sm: 3, lg: 12 },
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
                  maxHeight: "800px",
                  position: "relative",
                  // left: { xs: 0, md: "100px" },
                  maxWidth: { xs: "90%", md: 750, lg: 850 },
                  color: "white",
                  mt: "80px",
                  mx: { xs: "auto", md: 0 },
                  textAlign: { xs: "left", md: "left" },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { xs: "flex-start", md: "flex-start" },
                  pointerEvents: "none",
                }}
              >
                <Typography
                  // variant="subtitle2"
                  sx={{
                    color: "#E1E0E0",
                    mb: 1,
                    fontSize: "18px",
                    zIndex: 2,
                  }}
                >
                  Powering growth through talent
                </Typography>

                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: "36px", md: "54px", lg: "64px" },
                    fontWeight: "700",
                    mb: 2,
                    lineHeight: 1.2,
                    zIndex: 2,
                  }}
                >
                  Extend Your Team,
                  <br />
                  Accelerate Your Growth
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
                  We help agencies and startups scale smarter — with dedicated
                  professionals, high-quality solutions, and flexible engagement
                  models that fit your workflow and goals.
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    flexWrap: "wrap",
                    justifyContent: { xs: "center", md: "flex-start" },
                    width: { xs: "100%", md: "auto" },
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
                      width: { xs: "100%", md: "auto" },
                      "&:hover": {
                        backgroundColor: "#0059C7",
                      },
                      pointerEvents: "auto",
                    }}
                  >
                    Let's Talk
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
                      width: { xs: "100%", md: "auto" },
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      },
                      pointerEvents: "auto",
                    }}
                  >
                    Explore Services →
                  </Button>
                </Box>
              </Box>

              {/* this is right part of the banner the animation */}

              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: { xs: "calc(100% - 180px)", md: "calc(100% - 190px)" },
                  transform: "translate(-50%, -50%)",
                  width: { xs: 240, md: 800 },
                  height: { xs: 240, md: 800 },
                  zIndex: 1,
                  opacity: { xs: 0.4, md: 1 },
                  overflow: "visible",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    overflow: "visible",
                  }}
                >
                  {orbitTriplets.map((triplet, index) =>
                    renderOrbit(
                      triplet,
                      isMobile ? 130 + index * 100 : 300 + index * 150,
                      index
                    )
                  )}
                </Box>

                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: { xs: 60, md: 180, lg: 245 },
                    height: { xs: 60, md: 180, lg: 245 },
                    zIndex: 5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* Define the keyframes once at the parent level */}
                  <style>
                    {`
    @keyframes continuousRipple {
      0% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 0.7;
      }
      50% {
        opacity: 0.4;
      }
      100% {
        transform: translate(-50%, -50%) scale(2);
        opacity: 0;
      }
    }
    `}
                  </style>

                  {/* First ripple - starts immediately */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      width: { xs: 120, md: 210, lg: 250 },
                      height: { xs: 120, md: 210, lg: 250 },
                      borderRadius: "50%",
                      backgroundColor: "#0A2B55",
                      transform: "translate(-50%, -50%) scale(1)",
                      animation: "continuousRipple 4s infinite ",
                    }}
                  />

                  {/* Second ripple - starts after 1s */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      width: { xs: 120, md: 210, lg: 250 },
                      height: { xs: 120, md: 210, lg: 250 },
                      borderRadius: "50%",
                      backgroundColor: "#0B3161",
                      transform: "translate(-50%, -50%) scale(1)",
                      animation: "continuousRipple 4s infinite 1s",
                    }}
                  />

                  {/* Third ripple - starts after 2s */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      width: { xs: 120, md: 210, lg: 250 },
                      height: { xs: 120, md: 210, lg: 250 },
                      borderRadius: "50%",
                      backgroundColor: "#0D3A72",
                      transform: "translate(-50%, -50%) scale(1)",
                      animation: "continuousRipple 4s infinite 2s",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      width: { xs: 120, md: 210, lg: 250 },
                      height: { xs: 120, md: 210, lg: 250 },
                      borderRadius: "50%",
                      backgroundColor: "#0D3A72",
                      transform: "translate(-50%, -50%) scale(1)",
                      animation: "continuousRipple 4s infinite 3s",
                    }}
                  />

                  {/* Central circle with logo */}
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      backgroundColor: "#0F4285",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      position: "relative",
                      overflow: "visible",
                    }}
                  >
                    <Box
                      component="img"
                      src={logo}
                      alt="logo"
                      sx={{
                        width: "auto",
                        height: "65%",
                        maxWidth: "65%",
                        objectFit: "contain",
                        position: "absolute",
                        right: "50%", // Start from center
                        transform: logoZoomed
                          ? "scale(20) translateX(90%) translateY(33%)" // Move right while scaling
                          : "translateX(50%) scale(1)", // Center normally
                        transformOrigin: "right center", // Zoom from right side
                        transition:
                          "transform 1s cubic-bezier(0.4, 0, 0.2, 1)",
                        zIndex: logoZoomed ? 1500 : 2,
                        // opacity: logoVisible ? 1 : 0,
                        // visibility: logoVisible ? "visible" : "hidden",
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* this is the modal which will popup after clicking on any icons */}

          {showModal && selectedTool && !isMobile && (
            <Box
              sx={{
                position: "absolute",
                top: "20%",
                right: 0,
                width: { xs: "100%", md: "400px" },
                height: "80%",
                // backgroundColor: "transparent",
                color: "#fff",
                zIndex: 1400,
                padding: { xs: 6, lg: 4 },
                // boxShadow: "-4px 0 20px rgba(0,0,0,0.3)",
                borderTopLeftRadius: "100px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Back Button */}
              <IconButton
                onClick={() => {
                  setShowModal(false);
                  setLogoZoomed(false);
                  setLogoVisible(true);
                }}
                sx={{
                  color: "#fff",
                  width: 36,
                  height: 36,
                  alignSelf: "flex-start",
                  ml: 3,
                  mt: 4,
                  mb: 4,
                }}
              >
                <RiArrowGoBackLine />
              </IconButton>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  ml: 4,
                  mb: 3,
                  gap: 1,
                }}
              >
                <Box
                  component="img"
                  src={selectedTool.icon}
                  alt={selectedTool.name}
                  sx={{
                    width: 56,
                    height: 56,
                    objectFit: "contain",
                    mr: 2,
                    bgcolor: "#fff",
                    p: 0.7,
                    borderRadius: 4,
                  }}
                />
                <Typography fontSize="35px">{selectedTool.name}</Typography>
              </Box>

              {/* Info Text */}
              <Typography
                sx={{
                  fontSize: "19px",
                  ml: 4,
                }}
              >
                {selectedTool.info}
              </Typography>

              {/* Button */}
              <Box
                sx={{ flexGrow: 0.7, display: "flex", alignItems: "flex-end" }}
              >
                <Button
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    backgroundColor: "#05408E",
                    borderRadius: "999px",
                    textTransform: "none",
                    fontWeight: 500,
                    ml: 4,
                    px: 4,
                    py: 2,
                  }}
                >
                  Explore Services
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Animated;
