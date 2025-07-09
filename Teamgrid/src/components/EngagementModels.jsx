import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const cardData = [
  {
    title: "Flexible Time & Material Model for Evolving Needs",
    points: [
      "Pay only for hours worked",
      "Ideal for ongoing or evolving tasks",
      "Transparent weekly timesheets",
    ],
  },
  {
    title: "Dedicated Front-End Developer",
    points: [
      "Full-time resource working under your brand",
      "Monthly fixed cost",
      "Flexible replacement or scaling",
    ],
  },
  {
    title: "Fixed-Cost Model for Defined Scopes",
    points: [
      "Ideal for defined scopes like landing pages or small apps",
      "Detailed estimate upfront",
      "Milestone-based delivery & billing",
    ],
  },
];

const EngagementModels = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ 
      px: { xs: 2,sm:3 ,lg: 12 }, 
      py: 8, 
      backgroundColor: "#fff",
      maxWidth: '1700px',
      mx: 'auto'
    }}>
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          mb: 6,
          // gap: 2,
          // maxWidth: '1200px',
          mx: 'auto'
        }}
      >
        <Box sx={{ }}>
          <Typography
            fontSize={{ xs: "28px", sm: "36px", md: "48px" }}
            fontWeight="500"
          >
            Engagement Models
          </Typography>
          <Typography
            sx={{
              mt: 1,
              fontSize: { xs: "14px", md: "18px" },
              fontWeight: 500,
            }}
          >
            Choose the engagement model that best suits your project needs
          </Typography>
        </Box>

        <Button
          variant="outlined"
          sx={{
            mt: { xs: 2, sm: 0 },
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
            fontWeight: 400,
            color: "#140E13",
            borderColor: "#CACACA",
            borderRadius: "16px",
            textTransform: "none",
            width: { xs: "100%", sm: "200px", md: "246px" },
            height: { xs: "45px", sm: "52px", md: "59px" },
          }}
        >
          Explore Services →
        </Button>
      </Box>

      {/* Cards Section */}
      <Grid 
        container 
        // spacing={4}
        sx={{
          // maxWidth: '1200px',
          mx: 'auto',
          gap:2,
          justifyContent: 'space-between'
        }}
      >
        {cardData.map((card, index) => (
          <Grid 
            item 
            xs={12} 
            sm={6} 
            lg={4} 
            key={index}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width:{xs:'100%',md:'31%',lg:'31.5%'},
            
            }}
          >
            <Paper
              elevation={0}
              sx={{
                p: { xs: 2, sm: 3 },
                borderRadius: "24px",
                backgroundColor: "#F3F3F6",
                width: '100%',
                height: { xs: "auto", md: "322px" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                maxWidth: '420px'
              }}
            >
              <Box>
                <Typography
                  fontSize={{ xs: "18px", md:'20px', lg: "24px" }}
                  fontWeight="500"
                  color="#05408E"
                  gutterBottom
                >
                  {card.title}
                </Typography>

                {/* Bullet Points */}
                <Stack spacing={1.5} sx={{ mb: 3 }}>
                  {card.points.map((point, idx) => (
                    <Box
                      key={idx}
                      sx={{ display: "flex", alignItems: "start" }}
                    >
                      <IoCheckmarkDoneSharp color="#3BB226" fontSize="20px" />
                      <Typography
                        color="#140E13"
                        fontSize={{ xs: "14px",md:'15px', lg: "16px" }}
                        fontWeight={400}
                        px={1}
                      >
                        {point}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>

              {/* Buttons */}
              <Stack
                direction="row"
                // spacing={2}
                sx={{ mt: "auto", flexWrap: "wrap",gap:2 }}
              >
                <Button
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    textTransform: "none",
                    backgroundColor: "#05408E",
                    borderRadius: "12px",
                    fontSize: { xs: "14px", lg: "16px" },
                    width: { xs: "100%", sm: "auto" },
                    height:{xs:'auto',lg:"48px"}, 
                    fontWeight: 400,
                    px: {sm:1,lg:2.5},
                    "&:hover": {
                      backgroundColor: "#003f9e",
                    },
                  }}
                >
                  Reach us
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    borderRadius: "12px",
                    px: {sm:1,lg:2.5},
                    fontSize: { xs: "14px", lg: "16px" },
                    width: { xs: "100%", sm: "auto" },
                     height:{xs:'auto',lg:"48px"}, 
                    fontWeight: 400,
                    color: "#140E13",
                    borderColor: "#D7D7D7",
                  }}
                >
                  Know more...
                </Button>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EngagementModels;