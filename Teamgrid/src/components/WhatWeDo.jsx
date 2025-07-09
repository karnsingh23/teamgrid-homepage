import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { BsArrowLeft } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";
import ecommerceImg from "../assets/Group-111.png";
import webDevelopment from "../assets/Rectangle-82.png";
import ui from "../assets/ui.png";
import app from "../assets/app.png";
import team from "../assets/dedicated-team.jpg";
import ai from "../assets/Rectangle.png";

const categories = [
  {
    title: "E-commerce",
    subtitle: "Sell smarter online",
    description:
      "We design and develop high-performing e-commerce platforms tailored to your brand. From storefront to checkout, we build seamless, scalable, and conversion-focused experiences that drive sales and customer loyalty.",
    image: ecommerceImg,
  },
  {
    title: "Web Development",
    subtitle: "Fast. Clean. Scalable.",
    description:
      "Custom web solutions with modern technologies to meet your unique business needs. Clean code, responsive designs, and fast performance at scale.",
    image: webDevelopment,
  },
  {
    title: "UI / UX",
    subtitle: "Design with purpose",
    description:
      "We craft intuitive, user-centered designs that boost engagement and conversion. Strategy meets creativity for purposeful user experiences.",
    image: ui,
  },
  {
    title: "Mobile App Development",
    subtitle: "Apps that perform",
    description:
      "Cross-platform and native apps that are fast, reliable, and user-friendly. We build mobile experiences your users will love.",
    image: app,
  },
  {
    title: "Dedicated Teams",
    subtitle: "Scale your squad",
    description:
      "Extend your team with top-tier developers, designers, and engineers. Scalable and flexible models tailored to your project needs.",
    image: team,
  },
  {
    title: "AI / ML / GenAI",
    subtitle: "Smart tech & real results",
    description:
      "Harness the power of AI, ML, and Generative AI to unlock new efficiencies and insights. From automation to advanced analytics, we've got you covered.",
    image: ai,
  },
];

const WhatWeDo = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === categories.length - 1 ? 0 : prev + 1));
  };

  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  const currentCategory = categories[activeIndex] || categories[0];
  const { title, subtitle, description, image } = currentCategory;

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 3, lg: 12 },
        py: { xs: 6, md: 2 },
        bgcolor: "#fff",
        maxWidth: "1700px",
        margin: "0 auto",
      }}
    >
      <Typography
        fontSize={{ xs: "28px", sm: "34px", md: "40px", lg: "56px" }}
        fontWeight="500"
        mb={2}
      >
        What We Do
      </Typography>
      <Typography
        color="#000"
        mb={6}
        sx={{ width: "100%" }}
        fontSize={{ xs: "15px", sm: "16px", md: "17px", lg: "18px" }}
      >
        We build AI-powered web and mobile apps with innovative design and
        scalable development. Our team delivers seamless UI/UX and solutions to
        help your business grow smarter and faster.
      </Typography>

      <Box
        sx={{
          position: "relative",
          borderRadius: 4,
          overflow: "hidden",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "stretch",
          bgcolor: "#e1ebf5",
          minHeight: { xs: "auto", md: "500px" },
          height: { xs: "auto", md: "600px" },
        }}
      >
        {/* Left Text */}
        <Box
          sx={{
            zIndex: 2,
            ml: { md: 7 },
            p: { xs: 3, md: 10 },
            pb: { xs: 6, md: 12 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: { xs: "100%", md: "50%" },
            minHeight: { xs: "280px", md: "auto" },
            order: { xs: 2, md: 1 },
          }}
        >
<Box sx={{ flex: {xs:0,md:1}, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
  <Box>
    <Typography
      fontSize={{ xs: "20px", sm: "25px", md: "30px", lg: "40px" }}
      fontWeight={500}
      mb={2}
    >
      {title}
    </Typography>
    <Typography
      fontSize={{ xs: "14px", sm: "15px", md: "16px" }}
      color="#000"
      mb={4}
    >
      {description}
    </Typography>
  </Box>

  <Box>
    <Button
      variant="outlined"
      sx={{
        borderRadius: "16px",
        textTransform: "none",
        borderColor: "#A8BDD3",
        fontSize: { xs: "14px", sm: "15px", md: "16px" },
        fontWeight: 500,
        color: "#000",
        mb:3,
        px: 4,
        py: 1.5,
        "&:hover": {
          borderColor: "#A8BDD3",
        },
      }}
    >
      Explore Our Portfolio →
    </Button>
  </Box>
</Box>


          {!isMobile && (
            <Box sx={{ mb: 10 }}>
            <IconButton
              onClick={handlePrev}
              sx={{
                bgcolor: "#fff",
                mr: 1,
                p:1.5,
                fontSize: { xs: "20px", md: "25px" },
              }}
            >
              <BsArrowLeft color="#000" />
            </IconButton>
            <IconButton
              onClick={handleNext}
              sx={{ bgcolor: "#fff",p:1.5, fontSize: { xs: "20px", md: "25px" } }}
            >
              <GoArrowRight color="#000" />
            </IconButton>
          </Box>
          )}
        </Box>

        {/* Right Image */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            mr: { xs: 0, md: 5 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            position: "relative",
            order: { xs: 2, md: 2 },
            height: { xs: "500px", md: "100%" },
          }}
        >
          <Box
            component="img"
            src={image}
            alt={title}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              maxWidth: "100%",
              maxHeight: "100%",
              borderRadius: 3,
            }}
          />
        </Box>

        {/* Tabs */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            position: { xs: "absolute", md: "absolute" },
            bottom: { xs: "5px", md: "24px" },
            left: { xs: "0%", md: "50%" },
            transform: { xs: "none", md: "translateX(-50%)" },
            mt: { xs: 2, md: 0 },
            zIndex: 5,
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "98%" },
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(3, 1fr)",
                sm: "repeat(6, 1fr)",
              },
              bgcolor: "#fff",
              borderRadius: "15px",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
              overflow: "hidden",
              p: 1,
              backdropFilter: "blur(156.9px)",
              backgroundColor: "rgba(255, 255, 255, 0.6)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
            }}
          >
            {categories.map((cat, index) => (
              <Box key={index} sx={{ position: "relative",  }}>
                <Button
                  fullWidth
                  onClick={() => handleTabClick(index)}
                  variant={index === activeIndex ? "contained" : "text"}
                  sx={{
                    textTransform: "none",
                    borderRadius: "10px",
                    color: index === activeIndex ? "#fff" : "#000",
                    backgroundColor:
                      index === activeIndex ? "#002b5b" : "transparent",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    py: { xs: 1, sm: 1.8 },
                    minHeight: { xs: 75, sm: 90 },
                    fontSize: { xs: "11px", sm: "14px" },
                    "&:hover": {
                      backgroundColor: "#002b5b",
                      color: "#fff",
                      "& .MuiTypography-root": {
                        color: "#fff",
                      },
                    },
                  }}
                >
                  <Typography
                    fontSize={{ xs: 12, sm: 13, lg: 14 }}
                    fontWeight={500}
                  >
                    {cat.title}
                  </Typography>
                  <Typography
                    color={index === activeIndex ? "#fff" : "#0724498C"}
                    fontSize={{ xs: 10.5, sm: 12, lg: 13 }}
                    fontWeight={400}
                  >
                    {cat.subtitle}
                  </Typography>
                </Button>

                {index !== categories.length - 1 && (
                  <Box
                    sx={{
                      position: "absolute",
                      right: 0,
                      top: "35%",
                      bottom: "35%",
                      width: "1.5px",
                      backgroundColor: "rgba(0, 0, 0, 0.32)",
                      display: { xs: "none", sm: "block" },
                    }}
                  />
                )}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WhatWeDo;
