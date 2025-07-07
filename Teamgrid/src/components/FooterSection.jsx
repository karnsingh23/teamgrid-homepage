import React from "react";
import {
  Box,
  Grid,
  Typography,
  Link,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { LuMail } from "react-icons/lu";
import { LuSend } from "react-icons/lu";

const FooterSection = () => {
  return (
    <Box sx={{width:'100%',bgcolor: "#072449"}}>

      <Box
      sx={{
        maxWidth: "1700px",
        margin: "0 auto",
        
        color: "white",
        px: { xs: 3, md: 12 },
        py: { xs: 6, md: 10 },
        fontSize: 14,
        textAlign: { xs: "center", md: "left" },
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{ justifyContent: { xs: "center", md: "space-between" } }}
      >
        {/* Blogs */}
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              display: "flex",
              maxWidth:"382px",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <Typography variant="subtitle1" fontSize="20px" fontWeight={500} gutterBottom>
              Blogs
            </Typography>
            <Link href="#" underline="none" fontSize="16px" color="#A8B6C5" mb={2} sx={{
    "&:hover": {
      color: "#fff",
      textDecoration: "underline",
    },
  }}>
              How AI Is Transforming Web & Mobile App Development in 2025
            </Link>
            <Link href="#" underline="none" fontSize="16px" color="#A8B6C5" mb={2} sx={{
    "&:hover": {
      color: "#fff",
      textDecoration: "underline",
    },
  }}>
              Choosing the Right Tech Stack for Scalable Product Development
            </Link>
            <Link href="#" underline="none" fontSize="16px" color="#A8B6C5" mb={2} sx={{
    "&:hover": {
      color: "#fff",
      textDecoration: "underline",
    },
  }}>
              Design Smarter: Why UI/UX Matters More Than Ever in AI-Powered
              Apps
            </Link>
            <Link href="#" underline="none" fontSize="16px" color="#A8B6C5" sx={{
    "&:hover": {
      color: "#fff",
      textDecoration: "underline",
    },
  }}>
              Fixed-Cost vs. Dedicated Teams: What Works Best for Your Next
              Project?
            </Link>
          </Box>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} sm={6} md={2}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <Typography variant="subtitle1" fontSize="20px" fontWeight={500} gutterBottom>
              Quick Links
            </Typography>
            {[
              "Home",
              "About Us",
              "What We Do",
              "Technologies We Use",
              "How We Work",
              "Let’s Talk",
            ].map((text, i) => (
              <Link
  key={i}
  href="#"
  underline="none"
  fontSize="16px"
  color="#A8B6C5"
  mb={2}
  sx={{
    "&:hover": {
      color: "#fff",
      textDecoration: "underline",
    },
  }}
>
  {text}
</Link>

            ))}
          </Box>
        </Grid>

        {/* Services */}
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <Typography variant="subtitle1" fontSize="20px" fontWeight={500} gutterBottom>
              Services
            </Typography>
            {[
              "Web Development",
              "Mobile App Development",
              "UI/UX Design",
              "AI/ML & GenAI Solutions",
              "E-commerce",
              "WordPress & Shopify",
            ].map((text, i) => (
             <Link
  key={i}
  href="#"
  underline="none"
  fontSize="16px"
  color="#A8B6C5"
  mb={2}
  sx={{
    "&:hover": {
      color: "#fff",
      textDecoration: "underline",
    },
  }}
>
  {text}
</Link>

            ))}
          </Box>
        </Grid>

        {/* Policies */}
        <Grid item xs={12} sm={6} md={2}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <Typography variant="subtitle1" fontSize="20px" fontWeight={500} gutterBottom>
              Policies
            </Typography>
            {[
              "Terms & Conditions",
              "Privacy Policy",
              "NDA Available on Request",
            ].map((text, i) => (
             <Link
  key={i}
  href="#"
  underline="none"
  fontSize="16px"
  color="#A8B6C5"
  mb={2}
  sx={{
    "&:hover": {
      color: "#fff",
      textDecoration: "underline",
    },
  }}
>
  {text}
</Link>

            ))}
          </Box>
        </Grid>
      </Grid>

      {/* Contact & Newsletter */}
      <Box sx={{ my: 6, borderTop: "1px solid #1b3c5e", pt: 4 }}>
        <Grid
          container
          spacing={4}
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          textAlign={{ xs: "center", md: "left" }}
        >
          {/* Contact Info */}
          <Grid item xs={12} md={6}>
            <Box sx={{ maxWidth: 488, mx: "auto" }}>
              <Typography fontWeight={500} fontSize="20px" gutterBottom>
                Need Assistance? Call Us!
              </Typography>
              <Typography color="#b0bfd0" fontSize="16px" mb={2}>
                Our experts are here to help. Contact us for personalised
                guidance or any queries about your project or digital solution.
              </Typography>
              <Typography fontWeight={500} fontSize="20px" mb={0.5}>
                +91 - 98304 42666
              </Typography>
              <Typography fontSize="16px" color="#b0bfd0">
                Mail us at info@teamgrid.com
              </Typography>
            </Box>
          </Grid>

          {/* Newsletter */}
          <Grid item xs={12} md={6}>
            <Box sx={{ maxWidth: 588, mx: "auto" }}>
              <Typography fontWeight={500} fontSize="20px" gutterBottom>
                Stay Connected with Our Newsletter
              </Typography>
              <Typography color="#b0bfd0" fontSize="16px" mb={2}>
                Stay updated with expert insights, smart development tips, and
                exclusive Teamgrid news—delivered straight to your inbox.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: { xs: 1, md: 2 },
                }}
              >
                <TextField
                  fullWidth
                  placeholder="Your email ID"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LuMail color="#fff" fontSize={22} />
                      </InputAdornment>
                    ),
                    sx: {
                      bgcolor: "#1b3c5e",
                      borderRadius: '12px',
                      color: "white",
                      px: 2,
                    },
                  }}
                  variant="outlined"
                />
                <Box
                  sx={{
                    fontSize: { xs: "18px", md: "23px" },
                    fontWeight: 700,
                  }}
                >
                  <LuSend />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Disclaimer & Copyright */}
      <Box
        sx={{
          borderTop: "1px solid #1b3c5e",
          pt: 3,
          fontSize: 13,
          color: "#b0bfd0",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography fontSize="16px" sx={{ mb: 5, mt: 3 }}>
          <strong>Disclaimer:</strong> Content and services on this site are for
          general information only and may change. Teamgrid is not liable for
          outcomes influenced by third-party tools or evolving technologies.
        </Typography>
        <Typography fontSize="16px">© 2025 Teamgrid. All rights reserved.</Typography>
      </Box>
    </Box>
    </Box>
  );
};

export default FooterSection;
