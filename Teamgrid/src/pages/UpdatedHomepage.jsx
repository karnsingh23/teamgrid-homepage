import React from "react";
import { useRef } from "react";
import { GoPeople } from "react-icons/go";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import { HiMiniArrowLongLeft } from "react-icons/hi2";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  Icon,
  IconButton,
  CardContent,
  Link,
  Paper,
  // GroupsIcon
} from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import Animated from "../components/Animated";
import Timage from "../assets/Timage.png";
import Ai from "../assets/Ai.png";
import ecommerce from "../assets/ecommerce.png";
import mobile from "../assets/mobile.png";
import remote from "../assets/remote.png";
import web from "../assets/web.jpg";
import ui from "../assets/ui.jpg";
import gimage from "../assets/gimage.png";
import bgImage from "../assets/rectangle-25.png";
import dedicatedicon from "../assets/wordpress6.svg";
import ndaicon from "../assets/wordpress8.svg";
import flexibleicon from "../assets/wordpress7.svg";
import modularicon from "../assets/wordpress9.svg";
import qualityicon from "../assets/wordpress10.svg";
import HowWeWork from "../components/HowWeWork";
import CapabilitiesSection from "../components/CapabilitiesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import LetsTalk from "../components/Letstalk";

function UpdatedHomepage() {
  const data = {
    title: `Let’s Build Together`,
    paraone: "— Efficiently, Flexibly, and Reliably",
    paratwo: `Whether you're scaling a team or shipping a project, Teamgrid is your partner in dependable delivery.`,
    btnone: `Let’s Talk`,
    btntwo: "Request a Free Quote",
  };
  const steps = [
    {
      id: "01",
      title: "Discovery & Requirements",
      description:
        "We define goals, user types, and key screens to ensure alignment before design or development begins.",
    },
    {
      id: "02",
      title: "Design Handoff & Planning",
      description:
        "We review design files, clarify edge cases, and outline technical scope for smooth project execution.",
    },
    {
      id: "03",
      title: "API Integration",
      description:
        "We connect front-end with backend or CMS APIs to handle real-time data and error states reliably.",
    },
    {
      id: "04",
      title: "Development",
      description:
        "We build responsive, pixel-perfect interfaces using React and modern CSS with clean, scalable code.",
    },
    {
      id: "05",
      title: "QA & Testing",
      description:
        "We test on all screen sizes, ensure WCAG compliance, and validate performance across major browsers.",
    },
    {
      id: "06",
      title: "Deployment or Handover",
      description:
        "We deliver clean, version-controlled code or coordinate handoff to backend teams for integration.",
    },
  ];
  const cardData = [
    {
      icon: dedicatedicon,
      title: "Dedicated developers or full teams",
      description:
        "Get skilled individuals or complete teams tailored to your project needs.",
      bgColor: "#FFF7C7",
      iconbg: "#FDE658",
    },
    {
      icon: ndaicon,
      title: "NDA-compliant & agency-friendly",
      description:
        "We protect your privacy and work seamlessly under your brand.",
      bgColor: "#EAEAFF",
      iconbg: "#DADAFD",
    },
    {
      icon: flexibleicon,
      title: "Flexible engagement models",
      description:
        "Choose hourly, retainer, or project-based models that fit your workflow.",
      bgColor: "#E7FFD7",
      iconbg: "#CDF5B3",
    },
    {
      icon: modularicon,
      title: "Modular code with documentation",
      description:
        "We write scalable code that’s easy to maintain and well-documented.",
      bgColor: "#FFEFFC",
      iconbg: "#FFDDF9",
    },
    {
      icon: qualityicon,
      title: "Quality Assured. High Performance.",
      description:
        "Every solution is thoroughly tested for speed, stability, and reliability.",
      bgColor: "#ECF9FF",
      iconbg: "#CBEFFF",
    },
  ];

  const services = [
    {
      title: "Web Development",
      highlight: "Web",
      description:
        "Custom websites, next-gen frontend stack, and CMS-powered solutions.",
      image: Ai,
    },
    {
      title: "Mobile App Development",
      highlight: "Mobile App",
      description:
        "Cross-platform mobile applications tailored for performance and usability.",
      image: mobile,
    },
    {
      title: "Remote Team Support",
      highlight: "Remote Team",
      description:
        "Skilled professionals to support your operations, projects, and workflows.",
      image: Ai,
    },
    {
      title: "AI/ML/GenAI",
      highlight: "GenAI",
      description:
        "Empower your products with intelligent features using AI, ML, and LLMs.",
      image: Ai,
    },
    {
      title: "UI/UX Design",
      highlight: "UI/UX",
      description:
        "Stunning, seamless user interfaces that align with your brand needs.",
      image: ui,
    },
    {
      title: "E-commerce Solutions",
      highlight: "E-commerce",
      description:
        "Smooth, responsive online stores across all devices and platforms.",
      image: ecommerce,
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

  return (
    <>
      <Animated />
      <Box
        sx={{
          width: "100%",
          px: { xs: 2, sm: 3, lg: 12 },
          py: { xs: 4, sm: 6, md: 8 },
          maxWidth: "1700px",
          m: "0 auto",
        }}
      >
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
          direction={{ xs: "column", md: "row" }}
        >
          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={Timage}
              alt="Teamgrid Visual"
              sx={{
                width: {
                  xs: "100%",
                  sm: "300px",
                  md: "450px",
                  lg: "550px",
                  xl: "597px",
                },
                height: "auto",
                maxHeight: { xs: "auto", md: "850px" },
                objectFit: "contain",
                mx: "auto",
                display: "block",
              }}
            />
          </Grid>

          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                maxWidth: { xs: "100%", md: "467px" },
                mx: { xs: "auto", md: 0 },
              }}
            >
              <Typography
                fontSize={{ xs: "28px", sm: "34px", md: "40px", lg: "56px" }}
                fontWeight={500}
                color="#140E13"
                gutterBottom
              >
                Who We Help
              </Typography>

              <Typography
                fontSize={{ xs: "16px", md: "18px" }}
                fontWeight={400}
                sx={{ mb: 3 }}
              >
                A Trusted Partner for Growing Teams
              </Typography>

              <Typography
                fontSize={{ xs: "14px", md: "16px" }}
                fontWeight={400}
                sx={{ mb: 4, whiteSpace: "pre-line" }}
              >
                We partner with growing teams — from startups to digital
                agencies — who need flexible, dependable talent to move faster
                and stay focused. Whether you're short on capacity or scaling up
                delivery, we help you fill the gaps without adding overhead.
                {"\n\n"}Our clients typically come to us when they’re ready to
                scale but don’t want to manage the complexities of in-house
                hiring or the risks of unreliable freelancers. With Teamgrid,
                they get access to experienced professionals — developers,
                designers, AI specialists, or remote staff — who integrate
                seamlessly into their workflow and contribute from day one.
                {"\n\n"}Whether you're launching a new product, clearing a
                project backlog, or simply need extra hands to keep things
                running smoothly, we’re here to help you deliver.
              </Typography>

              <Button
                variant="outlined"
                sx={{
                  color: "white",
                  bgcolor: "#05408E",
                  px: 4,
                  py: 1.5,
                  borderRadius: "39px",
                  fontSize: "1rem",
                  fontWeight: 400,
                  textTransform: "none",
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                Explore Services →
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          px: { xs: 2, sm: 3, lg: 12 },
          py: 4,
          maxWidth: "1700px",
          m: "0 auto",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Typography
            fontSize={{ xs: "28px", sm: "34px", md: "40px", lg: "56px" }}
            fontWeight={500}
            gutterBottom
          >
            What We Do
          </Typography>
          <Typography
            color="#000000"
            sx={{
              mb: 6,
              maxWidth: "800px",
              width: "100%",
              px: { xs: 1, sm: 2 },
              fontSize: "16px",
              fontWeight: 400,
            }}
          >
            We build AI-powered web and mobile apps with innovative design and
            scalable development. Our team delivers seamless UI/UX and solutions
            to help your business grow smarter and faster.
          </Typography>
        </Box>

        <Grid
          container
          spacing={{ xs: 2, sm: 3, md: 4 }}
          justifyContent="center"
        >
          {services.map((service, index) => (
            <Card
              sx={{
                borderRadius: 4,
                height: { xs: "360px", sm: "400px", md: "484px" },
                width: "100%",
                maxWidth: { xs: "100%", sm: "30%", md: "31%", lg: "31.6%" },
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <CardMedia
                component="img"
                height="100%"
                width="100%"
                image={service.image}
                alt={service.title}
                sx={{ objectFit: "cover" }}
              />
              <CardContent
                sx={{
                  flexGrow: 1,
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "linear-gradient(to top, #101010ff,#05234A00)",
                  p: { xs: 2, sm: 3 },
                }}
              >
                <Typography
                  color="#FFFFFF"
                  fontSize={{ xs: "24px", sm: "32px", md: "40px" }}
                  fontWeight={500}
                  lineHeight={1}
                >
                  {service.title.split(service.highlight)[0]}
                  <Box component="span" color="#30ECAD">
                    {service.highlight}
                  </Box>
                  {service.title.split(service.highlight)[1]}
                </Typography>
                <Typography
                  variant="body2"
                  color="#E0DFE0"
                  sx={{ mt: 1, mb: 2 }}
                >
                  {service.description}
                </Typography>
                <Link
                  href="#"
                  underline="none"
                  color="#fff"
                  sx={{ fontWeight: 500, fontSize: "18px" }}
                >
                  Know more →
                </Link>
              </CardContent>
            </Card>
          ))}
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
          <Button
            variant="contained"
            sx={{
              borderRadius: "25px",
              px: 4,
              py: 1.5,
              backgroundColor: "#05408E",
              textTransform: "none",
              fontSize: "1rem",
              fontWeight: 500,
            }}
          >
            Explore Services →
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, 
          alignItems: "center",
          px: { xs: 2, sm: 3, md: 4, lg: 12 },
          py: 6,
          gap: { xs: 4, md: 6 }, 
          maxWidth:'1700px',
          m:'0 auto'
        }}
      >
        {/* Image Section */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={gimage}
            sx={{
              width: {
                xs: "100%",
                sm: "300px",
                md: "450px",
                lg: "550px",
                xl: "597px",
              },
              maxWidth: "570px",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Box>

        {/* Content Section */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {/* Header with Title and Buttons */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", sm: "center" },
              width: "100%",
              gap: 2,
            }}
          >
            <Box>
              <Typography
                fontSize={{
                  xs: "28px",
                  sm: "34px",
                  md: "40px",
                  lg: "56px",
                }}
                fontWeight={500}
                lineHeight={1.2}
              >
                Why Teamgrid
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "16px", sm: "18px" },
                  fontWeight: 400,
                  mt: 1,
                }}
              >
                Flexible Talent. Reliable Delivery. Scalable Results.
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: 1,
                mt: { xs: 2, sm: 0 },
              }}
            >
              <IconButton
                onClick={() => scroll("left")}
                sx={{ bgcolor: "#E2E8F0", p: { xs: 1, sm: 2 } }}
              >
                <HiMiniArrowLongLeft fontSize="inherit" />
              </IconButton>
              <IconButton
                onClick={() => scroll("right")}
                sx={{ bgcolor: "#E2E8F0", p: { xs: 1, sm: 2 } }}
              >
                <HiMiniArrowLongRight fontSize="inherit" />
              </IconButton>
            </Box>
          </Box>

          {/* Cards Section */}
          <Box sx={{ width: "100%" }}>
            <Box sx={{ position: "relative" }}>
              <Box
                ref={scrollRef}
                sx={{
                  display: "flex",
                  gap: { xs: 1.5, md: 2 },
                  overflowX: "auto",
                  scrollBehavior: "smooth",
                  pb: 2,
                  "&::-webkit-scrollbar": { display: "none" },
                }}
              >
                {Array.from({ length: Math.ceil(cardData.length / 2) }).map(
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
                        const card = cardData[index];
                        if (!card) return null;

                        return (
                          <Paper
                            elevation={0}
                            sx={{
                              backgroundColor: card.bgColor,
                              width: {
                                xs: "100%",
                                sm: "100%",
                                md: "100%",
                                lg: "100%",
                                xl: "100%",
                              },
                              height: { xs: "auto", md: "218px" },
                              p: { xs: 2, md: "24px" },
                              borderRadius: "24px",
                              display: "flex",
                              flexDirection: "column",
                              maxWidth: "384px",
                            }}
                          >
                            <Box
                              sx={{
                                backgroundColor: card.iconbg,
                                borderRadius: "14px",
                                width: "64px",
                                height: "64px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                mb: 2,
                              }}
                            >
                              <GroupsIcon color="primary" />
                            </Box>
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
                        );
                      })}
                    </Box>
                  )
                )}
              </Box>
            </Box>
            <Button
              variant="outlined"
              sx={{
                color: "white",
                bgcolor: "#05408E",
                px: 4,
                py: 1.5,
                mt: 4,
                borderRadius: "39px",
                fontSize: "1rem",
                fontWeight: 400,
                textTransform: "none",
                width: { xs: "100%", sm: "auto" },
              }}
            >
              Explore Services →
            </Button>
          </Box>
        </Box>
      </Box>

      <HowWeWork
        steps={steps}
        bgColor="#ECF9FF"
        headingColor="#000"
        cardbgcolor="#CBEFFF"
        numBoxbgcolor="#05408E"
        idcolor="#fff"
        titlecolor="#05408E"
        desccolor="#363840"
        heading2color="#140E13"
        arrowColor="#05408E"
      />
      <CapabilitiesSection />
      <TestimonialsSection />
      <LetsTalk
        bgImage={bgImage}
        title={data.title}
        paraone={data.paraone}
        paratwo={data.paratwo}
        btnone={data.btnone}
        btntwo={data.btntwo}
      />
    </>
  );
}

export default UpdatedHomepage;
