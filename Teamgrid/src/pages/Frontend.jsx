import react from "../assets/front1.png";
import wordpress from "../assets/front2.png";
import shopify from "../assets/front3.png";
import postman from "../assets/front1.png";
import figma from "../assets/front2.png";
import nodejs from "../assets/front3.png";
import postgresql from "../assets/front1.png";
import mui from "../assets/front2.png";
import bootstrap from "../assets/front3.png";
import { GoPeople } from "react-icons/go";
import React, { useRef } from "react";

import { HiMiniArrowLongRight } from "react-icons/hi2";
import { HiMiniArrowLongLeft } from "react-icons/hi2";

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
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TechStackPage from "../components/TechStackPage";
import WhyPartner from "../components/Whypartner";
import HowWeWork from "../components/HowWeWork";
import EngagementModels from "../components/EngagementModels";
import FAQ from "../components/FAQ";
import LetsTalk from "../components/Letstalk";
import bgImage from "../assets/Rectangle-83.png";

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

const services = [
  {
    title: "Design-to-Code Conversion",
    description: "Pixel-perfect UI from Figma, Sketch, or PSD files.",
  },
  {
    title: "Responsive Web Design",
    description: "Optimized layouts for mobile, tablet, and desktop.",
  },
  {
    title: "React Component Development",
    description: "Reusable components for modern React apps.",
  },
  {
    title: "API-Driven Integration Service",
    description: "Seamless UI integration with RESTful or headless APIs.",
  },
  {
    title: "Performance Optimisation",
    description: "Fast-loading, efficient front-end experiences.",
  },
  {
    title: "Cross-Browser Compatibility",
    description:
      "Consistent rendering across Chrome, Safari, Firefox, and Edge.",
  },
  {
    title: "Performance Optimisation",
    description: "Fast-loading, efficient front-end experiences.",
  },
  {
    title: "Cross-Browser Compatibility",
    description:
      "Consistent rendering across Chrome, Safari, Firefox, and Edge.",
  },
  {
    title: "Performance Optimisation",
    description: "Fast-loading, efficient front-end experiences.",
  },
  {
    title: "Cross-Browser Compatibility",
    description:
      "Consistent rendering across Chrome, Safari, Firefox, and Edge.",
  },
  {
    title: "Performance Optimisation",
    description: "Fast-loading, efficient front-end experiences.",
  },
  {
    title: "Cross-Browser Compatibility",
    description:
      "Consistent rendering across Chrome, Safari, Firefox, and Edge.",
  },
  {
    title: "Performance Optimisation",
    description: "Fast-loading, efficient front-end experiences.",
  },
  {
    title: "Cross-Browser Compatibility",
    description:
      "Consistent rendering across Chrome, Safari, Firefox, and Edge.",
  },
  {
    title: "Performance Optimisation",
    description: "Fast-loading, efficient front-end experiences.",
  },
  {
    title: "Cross-Browser Compatibility",
    description:
      "Consistent rendering across Chrome, Safari, Firefox, and Edge.",
  },
];

function Frontend() {
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

  const scrollRef = useRef();

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  const data = {
    title: "Need expert front-end developers?",
    paraone:
      "Lets talk about how we can support your agency or project. Our flexible team structure lets you start fast and scale when needed.",
    btnone: "Contact Us",
    btntwo: "Schedule a Call",
  };

  return (
    <>
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

      {/* what we offer */}

      <Box sx={{ maxWidth: "1700px", m: "0 auto" }}>
        <Box
          sx={{
            pl: { xs: 2, sm: 3, lg: 12 },
            py: { xs: 6, md: 0 },
            mt:10,
            overflowX: "hidden",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 4, md: 8 },
              alignItems: "flex-start",
            }}
          >
            {/* Left Side: Text Content */}
            <Box
              sx={{
                flex: 1,
                mt: { xs: 4, md: 8 },
                minWidth: { sm: "400px", lg: "588px" },
                width: { xs: "100%", md: "auto" },
                maxWidth: "100%",
              }}
            >
              <Box sx={{ maxWidth: "486px", width: "100%" }}>
                <Typography
                  fontSize={{ xs: "32px", sm: "40px", md: "56px" }}
                  fontWeight={500}
                  gutterBottom
                >
                  What We Offer
                </Typography>
                <Typography
                  fontSize={{ xs: "16px", sm: "17px", md: "18px" }}
                  fontWeight={500}
                  mb={4}
                >
                  Pixel-Perfect Front-End Development, Aligned with Your Designs
                  and Deadlines
                </Typography>
                <Typography
                  fontSize={{ xs: "14px", md: "16px" }}
                  fontWeight={400}
                  color="#000"
                >
                  We help web and digital agencies deliver high-quality user
                  interfaces that are responsive, accessible, and fast. Whether
                  you're building a simple landing page or a complex web app,
                  our front-end developers work as an extension of your team to
                  bring your vision to life.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "16px",
                    textTransform: "none",
                    fontSize: { xs: "16px", md: "18px" },
                    fontWeight: 400,
                    width: { xs: "100%", sm: "246px" },
                    height: "59px",
                    backgroundColor: "#05408E",
                    mt: 4,
                    "&:hover": {
                      backgroundColor: "#003d9a",
                    },
                  }}
                  endIcon={<ArrowForwardIcon />}
                >
                  Explore Services
                </Button>
              </Box>
            </Box>

            {/* Right Side: Scrollable Cards */}
            <Box sx={{ flex: 1.5, width: "100%" }}>
              <Box sx={{ position: "relative" }}>
                <Box
                  ref={scrollRef}
                  sx={{
                    display: "flex",
                    gap: 2,
                    overflowX: "auto",
                    scrollBehavior: "smooth",
                    pb: 1,
                    px: { xs: 1, md: 0 },
                    "&::-webkit-scrollbar": { display: "none" },
                  }}
                >
                  {Array.from({ length: Math.ceil(services.length / 2) }).map(
                    (_, colIndex) => (
                      <Box
                        key={colIndex}
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          flexShrink: 0,
                        }}
                      >
                        {[0, 1].map((rowOffset) => {
                          const index = colIndex * 2 + rowOffset;
                          const service = services[index];
                          if (!service) return null;

                          return (
                            <Card
                              key={index}
                              sx={{
                                width: 282,
                                height: 242,
                                borderRadius: "24px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                bgcolor: "#F3F3F6",
                                color: "inherit",
                                boxShadow: 0,
                                flexShrink: 0,
                                "&:hover": {
                                  bgcolor: "#05408E",
                                  cursor: "pointer",
                                  "& .icon-box": {
                                    backgroundColor: "#1777F6",
                                  },
                                  "& .icon": {
                                    color: "#fff",
                                  },
                                  "& .title": {
                                    color: "#fff",
                                  },
                                  "& .desc": {
                                    color: "#EBF4FF",
                                  },
                                },
                              }}
                            >
                              <CardContent sx={{ p: 2 }}>
                                <Box
                                  component={Icon}
                                  className="icon-box"
                                  sx={{
                                    width: 64,
                                    height: 64,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: "#fff",
                                    borderRadius: "14px",
                                    mb: 2,
                                  }}
                                >
                                  <GoPeople className="icon" color="#05408E" />
                                </Box>
                                <Typography
                                  className="title"
                                  fontWeight={500}
                                  sx={{ fontSize: "20px" }}
                                  color={"#05408E"}
                                >
                                  {service.title}
                                </Typography>
                                <Typography
                                  className="desc"
                                  color={"#3E393E"}
                                  sx={{
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    display: "-webkit-box",
                                    fontSize: "16px",
                                    fontWeight: 400,
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: "vertical",
                                  }}
                                >
                                  {service.description}
                                </Typography>
                              </CardContent>
                            </Card>
                          );
                        })}
                      </Box>
                    )
                  )}
                </Box>

                {/* Scroll Buttons */}
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    mt: 2,
                    justifyContent: { xs: "center", md: "flex-start" },
                  }}
                >
                  <IconButton
                    onClick={() => scroll("left")}
                    sx={{ bgcolor: "#E2E8F0", p: 2 }}
                  >
                    <HiMiniArrowLongLeft />
                  </IconButton>
                  <IconButton
                    onClick={() => scroll("right")}
                    sx={{ bgcolor: "#E2E8F0", p: 2 }}
                  >
                    <HiMiniArrowLongRight />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <TechStackPage />
      <WhyPartner />
      <HowWeWork />
      <EngagementModels />
      <FAQ />
      <LetsTalk
        bgImage={bgImage}
        title={data.title}
        paraone={data.paraone}
        btnone={data.btnone}
        btntwo={data.btntwo}
      />
    </>
  );
}

export default Frontend;
