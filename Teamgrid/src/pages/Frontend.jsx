
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
import Banner from "../components/Banner";




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

  const steps = [
  {
    id: '01',
    title: 'Discovery & Requirements',
    description: 'We define goals, user types, and key screens to ensure alignment before design or development begins.',
  },
  {
    id: '02',
    title: 'Design Handoff & Planning',
    description: 'We review design files, clarify edge cases, and outline technical scope for smooth project execution.',
  },
  {
    id: '03',
    title: 'API Integration',
    description: 'We connect front-end with backend or CMS APIs to handle real-time data and error states reliably.',
  },
  {
    id: '04',
    title: 'Development',
    description: 'We build responsive, pixel-perfect interfaces using React and modern CSS with clean, scalable code.',
  },
  {
    id: '05',
    title: 'QA & Testing',
    description: 'We test on all screen sizes, ensure WCAG compliance, and validate performance across major browsers.',
  },
  {
    id: '06',
    title: 'Deployment or Handover',
    description: 'We deliver clean, version-controlled code or coordinate handoff to backend teams for integration.',
  },
];

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
 
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  const data = {
    title: "Need expert front-end developers?",
    paraone:
      "Lets talk about how we can support your agency or project. Our flexible team structure lets you start fast and scale when needed.",
    btnone: "Contact Us",
    btntwo: "Schedule a Call",
  };

  const cardData = [
    {
      title: "Agency-Centric",
      description:
        "Specifically designed to support digital and creative agencies with reliable, scalable front-end development services.",
      bgColor: "#FFF7C7",
      iconbg: "#FDE658",
    },
    {
      title: "Speed & Flexibility",
      description:
        "Kickstart projects quickly and scale up or down as your client demands change — no overhead, just results.",
      bgColor: "#EAEAFF",
      iconbg: "#DADAFD",
    },
    {
      title: "UI-First Thinking",
      description:
        "Our developers prioritize design fidelity with responsive, pixel-perfect implementations that bring your mockups to life flawlessly.",
      bgColor: "#E7FFD7",
      iconbg: "#CDF5B3",
    },
    {
      title: "NDA-Compliant",
      description:
        "We work under strict non-disclosure agreements, ensuring full confidentiality while representing your brand seamlessly.",
      bgColor: "#FFEFFC",
      iconbg: "#FFDDF9",
    },
    {
      title: "Seamless Integration",
      description:
        "We collaborate smoothly with your in-house designers, backend developers, and project managers.",
      bgColor: "#ECF9FF",
      iconbg: "#CBEFFF",
    },
  ];

  return (
    <>
      <Banner/>
      
      {/* what we offer */}
      <Box sx={{ maxWidth: "1700px", m: "0 auto" }}>
        <Box
          sx={{
            pl: { xs: 2, sm: 3, lg: 12 },
            pr:{xs:2,md:0},
            py: { xs: 6, md: 0 },
            mt:{xs:0,lg:10},
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
                mt: { xs: 0, md: 8 },
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
      <WhyPartner 
       cardData={cardData}
       heading={"Why Partner With Us"}
        />
      <HowWeWork
  steps={steps}
  bgColor="#0B3C7B"
  headingColor="#fff"
  cardbgcolor="#005DD5"
  numBoxbgcolor="#30ECAD"
  idcolor="#089767"
  titlecolor="#fff"
  desccolor="#B2D2FC"
  heading2color="#fff"
  arrowColor="#30ECAD"
/>
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
