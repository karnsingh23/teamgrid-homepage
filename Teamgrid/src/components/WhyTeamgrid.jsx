import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import teamImage from "../assets/Rectangle-51.png";
import tickSign from "../assets/Vector.png";

const features = [
  {
    title: "Right Talent, Matched Your Needs",
    description:
      "We align expertise with your business objectives and workflows.",
  },
  {
    title: "Flexible Engagement Models",
    description:
      "Work the way you prefer — retainers, sprints, or fixed-cost projects.",
  },
  {
    title: "Trustworthy and Confidential",
    description:
      "NDA-backed, process-driven, and fully aligned with your brand.",
  },
  {
    title: "Optional Project Oversight",
    description:
      "NDA-backed, process-driven, and fully aligned with your brand.",
  },
  {
    title: "Seamless Collaboration",
    description: "Slack, Trello, GitHub, or your tools — we work your way.",
  },
];

const WhyTeamgrid = () => {
  return (
    <Box
      sx={{
        px: { xs: 2, md: 12 },
        py: { xs: 6, md: 10 },
        bgcolor: "#fff",
        maxWidth: "1700px",
        margin: "0 auto",
      }}
    >
      {/* Header Row */}
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 4 }}
        spacing={2}
      >
        <Grid item xs={12} md={8}>
          <Typography
            fontSize={{ xs: "28px", sm: "34px", md: "40px",lg:"56px" }}
            fontWeight={500}
          >
            Why Teamgrid
          </Typography>
          <Typography
            fontSize={{ xs: "15px", sm: "16px", md: "17px",lg:"18px" }}
            color="#000"
          >
            Flexible Talent. Reliable Delivery. Scalable Results.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            justifyContent: { xs: "flex-start", md: "flex-end" },
          }}
        >
          <Button
            variant="outlined"
            sx={{
              borderRadius: "50px",
              textTransform: "none",
              fontSize: { xs: "15px", sm: "17px", md: "18px" },
              fontWeight:400,
              color: "#000",
              px: { xs: 3, sm: 3.5, md: 4 },
              py: { xs: 1, sm: 1.2, md: 1.5 },
              minHeight: "52px",
              borderColor: "#000",
              mt: { xs: 2, md: 0 },
            }}
          >
            Explore Services →
          </Button>
        </Grid>
      </Grid>

      {/* Content Row */}
      <Grid
        container
        spacing={2}
        alignItems="flex-start"
        direction={{ xs: "column", md: "row" }}
      >
        {/* Image (Left side) */}
        <Grid item xs={12} md={4} lg={3.5}>
  <Box
    component="img"
    src={teamImage}
    alt="Team collaboration"
    sx={{
      width: { xs: "100%", md: "100%", lg: "90%" },  // Reduce width at lg
      height: "auto",
      borderRadius: 3,
    }}
  />
</Grid>


        {/* Feature List (Right side) */}
        <Grid item xs={12} md={8} lg={8.5}>
  <List disablePadding>
    {features.map((feature, index) => (
      <ListItem
        key={index}
        disableGutters
        sx={{ alignItems: "flex-start", mb: { xs: 1, md: 2 } }}
      >
        <ListItemIcon sx={{ minWidth: 32, mt: 2, mr: 1 }}>
          <img src={tickSign} alt="tick" />
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography
              sx={{
                color: "#05408E",
                fontSize: { xs: "16px", sm: "18px", md: "19px", lg: "20px" },
                fontWeight: 500,
              }}
            >
              {feature.title}
            </Typography>
          }
          secondary={
            <Typography
              fontWeight={400}
              fontSize={{ xs: "14px", sm: "15px", md: "16px" }}
              color="#000"
            >
              {feature.description}
            </Typography>
          }
        />
      </ListItem>
    ))}
  </List>
</Grid>

      </Grid>
    </Box>
  );
};

export default WhyTeamgrid;
