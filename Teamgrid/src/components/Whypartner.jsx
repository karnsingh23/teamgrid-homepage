import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";



const WhyPartner = ({cardData,heading}) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ 
      px: { xs: 2,sm:3 ,lg: 12 }, 
      py: 6,
      backgroundColor: "#fff",
      maxWidth:'1700px',
      margin:'0 auto',
    }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems={isSmall ? "flex-start" : "center"}
        flexDirection={isSmall ? "column" : "row"}
        mb={4}
        gap={2}
      >
        <Typography
          fontSize={{ xs: 28, sm: 36, md: 48 }}
          fontWeight="500"
          lineHeight={1.2}
          maxWidth={599}
        >
          {heading}
        </Typography>
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

      <Grid 
        container 
        spacing={3}
        sx={{
          justifyContent: {xs:'center',sm:'center',md:"center",lg:'start'}
        }}
      >
        {cardData.map((card, index) => (
          <Grid 
            item 
            xs={12} 
            sm={6} 
            md={4} 
            key={index}
            sx={{
              display: 'flex',
              // justifyContent: 'center'
              width:{xs:'100%',md:'32%'}
            }}
          >
            <Paper
              elevation={0}
              sx={{
                backgroundColor: card.bgColor,
                width: { xs: "100%", sm: "100%", md: "100%", lg: "100%", xl: "100%" },
                height: { xs: "auto", md: "242px" },
                p: { xs: 2, md: "24px" },
                borderRadius: "24px",
                display: "flex",
                flexDirection: "column",
                // maxWidth: '450px'
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
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhyPartner;