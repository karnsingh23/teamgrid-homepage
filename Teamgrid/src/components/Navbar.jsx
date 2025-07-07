import React, { useState, useEffect, useRef } from "react";
import { FaAngleDown } from "react-icons/fa6";
import {
  Box,
  Typography,
  IconButton,
  AppBar,
  Toolbar,
  Button,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Popper,
  Paper,
  Grid,
  Collapse,
  Divider,
  Drawer,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Logo from "../assets/Logo.png";
import darkLogo from "../assets/Logo2.png";
import img1 from "../assets/i1.png";
import img2 from "../assets/i2.png";
import img3 from "../assets/i3.png";
import img4 from "../assets/i4.png";
import img5 from "../assets/i5.png";
import img6 from "../assets/i6.png";
import img7 from "../assets/i7.png";
import img8 from "../assets/i8.png";
import img9 from "../assets/i9.png";
import img10 from "../assets/i10.png";
import img11 from "../assets/i11.png";

function Navbar() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePopoverOpen = (event) => {
    if (!isMobile) setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const toggleMobileServices = () => {
    setMobileServicesOpen(!mobileServicesOpen);
  };

  const serviceCategories = [
    {
      title: "WEB DEVELOPMENT",
      services: [
        {
          name: "Front-End Development",
          icon: img1,
          path: "front-end-development",
          desc: "Fast, responsive, and pixel-perfect user interfaces.",
        },
        {
          name: "Back-End Development",
          icon: img2,
          desc: "Scalable, secure, and efficient architecture.",
        },
        {
          name: "WordPress & CMS",
          icon: img3,
          desc: "Custom WordPress sites with Elementor, and more.",
        },
      ],
    },
    {
      title: "MOBILE APP DEVELOPMENT",
      services: [
        {
          name: "iOS & Android Development",
          icon: img4,
          desc: "Native mobile experiences that perform and scale.",
        },
        {
          name: "Cross-Platform Apps",
          icon: img5,
          desc: "Build and deploy everywhere with React Native or Flutter.",
        },
        {
          name: "Progressive Web Apps",
          icon: img6,
          desc: "Web apps that work offline and feel native.",
        },
      ],
    },
    {
      title: "UI/UX & DESIGN",
      services: [
        {
          name: "UI/UX Design",
          icon: img7,
          desc: "Intuitive, user-focused design for web and mobile.",
        },
        {
          name: "Prototyping & Wireframing",
          icon: img8,
          desc: "Visualize fast using tools like Figma and Adobe XD.",
        },
        {
          name: "Design Systems",
          icon: img9,
          desc: "Scalable design libraries to maintain brand consistency.",
        },
      ],
    },
    {
      title: "E-COMMERCE SOLUTIONS",
      services: [
        {
          name: "Shopify Development",
          icon: img10,
          desc: "Custom stores with fast checkout and optimized UX.",
        },
        {
          name: "WooCommerce Integration",
          icon: img11,
          desc: "Extend WordPress with powerful features.",
        },
      ],
    },
  ];

  return (
    <>
      <Box sx={{ width: "100%", bgcolor: "#072449" }}>
        <Box
          sx={{
            maxWidth: "1700px",
            margin: "0 auto",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <AppBar
            position="fixed"
            elevation={0}
            sx={{
              width: "100%", // full screen
              background: scrolled
                ? "#fff"
                : "linear-gradient(to bottom, #000E1F,#05234A00)",
              transition: "background-color 0.3s ease",
              color: "white",
              minHeight: { xs: "60px", md: "80px" },
              zIndex: 10,
            }}
          >
            <Toolbar
              sx={{
                maxWidth: "1700px",
                width: "100%",
                mx: "auto", // center horizontally
                justifyContent: "space-between",
                alignItems: "center",
                minHeight: { xs: "60px", md: "80px" },
                px: { xs: 2, md: 12 }, // padding inside
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img
                  src={scrolled?darkLogo:Logo}
                  alt="Logo"
                  style={{
                    width: isMobile ? 130 : 160,
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </Box>

              {/* Desktop Nav */}
              {!isMobile && (
                <>
                  <Box sx={{ display: "flex", alignItems: "center",gap:2 }}>
                    <Button
                      sx={{
                        color: scrolled?"#0B3C7B": "#fff",
                        textTransform: "none",
                        fontSize: "16px",
                        px: 2,
                        borderRadius: "12px",
                        "&:hover": { bgcolor: "#3082EC3B" },
                      }}
                      onClick={()=>navigate('/')}
                    >
                      Home
                    </Button>
                    <Button
                      sx={{
                        color: scrolled?"#0B3C7B": "#fff",
                        textTransform: "none",
                        fontSize: "16px",
                        px: 2,
                        borderRadius: "12px",
                        "&:hover": { bgcolor: "#3082EC3B" },
                      }}
                    >
                      About us
                    </Button>

                    <Box
                      onMouseEnter={handlePopoverOpen}
                      sx={{ position: "relative" }}
                    >
                      <Button
                        sx={{
                          textTransform: "none",
                          borderRadius: "12px",
                          fontSize: "16px",
                          px: 2,
                          gap: 1,
                          color: scrolled?"#0B3C7B": "#fff",
                          fontWeight: "medium",
                          "&:hover": { bgcolor: "#3082EC3B" },
                        }}
                      >
                        What We Do
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            mt: "-3px",
                          }}
                        >
                          <FaAngleDown />
                        </Box>
                      </Button>

                      <Popper
                        onMouseLeave={handlePopoverClose}
                        open={Boolean(anchorEl)}
                        anchorEl={anchorEl}
                        transition
                        placement="bottom-start"
                        disablePortal
                        modifiers={[
                          { name: "offset", options: { offset: [0, 8] } },
                        ]}
                        sx={{
                          mt: 11,
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          px: 12,
                        }}
                      >
                        <Paper
                          onMouseEnter={handlePopoverOpen}
                          onMouseLeave={handlePopoverClose}
                          sx={{
                            p: 3,
                            borderRadius: '24px',
                            boxShadow: 3,
                            width: "90vw",
                            backgroundColor: "background.paper",
                          }}
                        >
                          <Grid
                            container
                            spacing={2}
                            sx={{ justifyContent: "space-around" }}
                          >
                            {serviceCategories.map((category, index) => (
                              <Grid item key={index}>
                                <Typography
                                  color="#898989"
                                  fontWeight={400}
                                  fontSize={12}
                                  textTransform="uppercase"
                                  mb={2}
                                >
                                  {category.title}
                                </Typography>
                                {category.services.map((service, idx) => (
                                  <Box
                                    key={idx}
                                    sx={{
                                      display: "flex",
                                      p: 1.5,
                                      mb: 1,
                                      borderRadius: 2,
                                      "&:hover": {
                                        cursor:'pointer',
                                        backgroundColor: "#F3F3F6",
                                        "& .icons":{
                                          bgcolor:'#fff'
                                        }
                                      },
                                      
                                    }}
                                    onClick={() => {navigate(`${service.path}`)
                                                    handlePopoverClose()}}
                                  >
                                    <Box
                                    className="icons"
                                      component="img"
                                      src={service.icon}
                                      alt={service.name}
                                      sx={{ width: 37, height: 40, mr: 2, p:1, borderRadius:'8px',color:'#05408E'}}
                                      bgcolor='#F3F3F6'
                                    />
                                    <Box>
                                      <Typography
                                        sx={{ color: "#0B3C7B" }}
                                        fontWeight={500}
                                        fontSize={14}
                                        mb={0.5}
                                      >
                                        {service.name}
                                      </Typography>
                                      <Typography
                                        fontSize={14}
                                        color="#767676"
                                        sx={{ width: { md: "200px" } }}
                                      >
                                        {service.desc}
                                      </Typography>
                                    </Box>
                                  </Box>
                                ))}
                              </Grid>
                            ))}
                          </Grid>
                        </Paper>
                      </Popper>
                    </Box>

                    <Button
                      sx={{
                        color: scrolled?"#0B3C7B": "#fff",
                        textTransform: "none",
                        fontSize: "16px",
                        px: 2,
                        borderRadius: "12px",
                        "&:hover": { bgcolor: "#3082EC3B" },
                      }}
                    >
                      Technologies We Use
                    </Button>
                    <Button
                      sx={{
                        color: scrolled?"#0B3C7B": "#fff",
                        textTransform: "none",
                        fontSize: "16px",
                        px: 2,
                        borderRadius: "12px",
                        "&:hover": { bgcolor: "#3082EC3B" },
                      }}
                    >
                      How we work
                    </Button>
                  </Box>

                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#05408E",
                      borderRadius: "12px",
                      textTransform: "none",
                      color: "#fff",
                      px: { xs: 2, sm: 3, md: 3, lg: 4 },
                      py: { xs: 0.8, sm: 1, md: 1, lg: 1.2 },
                      fontSize: { xs: 13, sm: 14, md: 14, lg: 16 },
                      "&:hover": { backgroundColor: "#0059C7" },
                    }}
                  >
                    Let's Talk
                  </Button>
                </>
              )}

              {/* Mobile Nav */}
              {isMobile && (
                <>
                  <IconButton onClick={toggleDrawer} edge="end">
                    <MenuIcon sx={{ color: scrolled?"#0B3C7B": "#fff" }} />
                  </IconButton>
                  <Drawer
                    anchor="right"
                    open={drawerOpen}
                    onClose={toggleDrawer}
                    sx={{
                      "& .MuiDrawer-paper": {
                        width: "100vw",
                        backgroundColor: "#061d3b",
                        color: "white",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: "100vw",
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        height: "100%",
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "flex-end",
                          mb: 2,
                        }}
                      >
                        <IconButton onClick={toggleDrawer}>
                          <CloseIcon sx={{ color: "#fff", fontSize: 30 }} />
                        </IconButton>
                      </Box>

                      <List sx={{ width: "100%" }}>
                        <ListItem button onClick={toggleDrawer}>
                          <ListItemText
                            primary="Home"
                            primaryTypographyProps={{ color: "#fff" }}
                          />
                        </ListItem>
                        <ListItem button onClick={toggleDrawer}>
                          <ListItemText
                            primary="About us"
                            primaryTypographyProps={{ color: "#fff" }}
                          />
                        </ListItem>

                        <ListItem button onClick={toggleMobileServices}>
                          <ListItemText
                            primary="What We Do"
                            primaryTypographyProps={{ color: "#fff" }}
                          />
                          {mobileServicesOpen ? (
                            <ExpandLess sx={{ color: "#fff" }} />
                          ) : (
                            <ExpandMore sx={{ color: "#fff" }} />
                          )}
                        </ListItem>

                        <Collapse
                          in={mobileServicesOpen}
                          timeout="auto"
                          unmountOnExit
                        >
                          {serviceCategories.map((category, index) => (
                            <Box key={index} sx={{ pl: 2 }}>
                              <Typography
                                variant="caption"
                                sx={{ mt: 2, color: "rgba(255,255,255,0.7)" }}
                              >
                                {category.title}
                              </Typography>
                              {category.services.map((service, idx) => (
                                <Box
                                  key={idx}
                                  sx={{
                                    display: "flex",
                                    alignItems: "flex-start",
                                    p: 1,
                                    "&:hover": {
                                      backgroundColor: "rgba(255,255,255,0.1)",
                                      borderRadius: 1,
                                    },
                                  }}
                                  onClick={() => {
    navigate(`${service.path}`);
    toggleDrawer(); // close drawer after nav
  }}
                                >
                                  <Box
                                    component="img"
                                    src={service.icon}
                                    alt={service.name}
                                    sx={{ width: 24, height: 24, mr: 1 }}
                                  />
                                  <Box>
                                    <Typography
                                      variant="subtitle2"
                                      sx={{ color: "#fff" }}
                                    >
                                      {service.name}
                                    </Typography>
                                    <Typography
                                      variant="caption"
                                      sx={{ color: "rgba(255,255,255,0.7)" }}
                                    >
                                      {service.desc}
                                    </Typography>
                                  </Box>
                                </Box>
                              ))}
                              <Divider
                                sx={{
                                  my: 1,
                                  backgroundColor: "rgba(255,255,255,0.1)",
                                }}
                              />
                            </Box>
                          ))}
                        </Collapse>

                        <ListItem button onClick={toggleDrawer}>
                          <ListItemText
                            primary="Technologies we use"
                            primaryTypographyProps={{ color: "#fff" }}
                          />
                        </ListItem>
                        <ListItem button onClick={toggleDrawer}>
                          <ListItemText
                            primary="How we work"
                            primaryTypographyProps={{ color: "#fff" }}
                          />
                        </ListItem>

                        <ListItem sx={{ mt: 2 }}>
                          <Button
                            fullWidth
                            variant="contained"
                            sx={{
                              backgroundColor: "#0070FF",
                              borderRadius: 5,
                              textTransform: "none",
                              color: "#fff",
                              py: 1.2,
                              fontSize: 16,
                              "&:hover": {
                                backgroundColor: "#0059C7",
                              },
                            }}
                            onClick={toggleDrawer}
                          >
                            Let's Talk
                          </Button>
                        </ListItem>
                      </List>
                    </Box>
                  </Drawer>
                </>
              )}
            </Toolbar>
          </AppBar>
        </Box>
      </Box>
    </>
  );
}

export default Navbar;
