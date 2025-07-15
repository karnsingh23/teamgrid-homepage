import Banner from "../components/Banner";
import wordpress1 from "../assets/wordpress1.png";
import { Box, Typography } from "@mui/material";
import DevelopmentServices from "../components/DevelopmentServices";
import WhyChooseUs from "../components/WhyChooseUs";
import WhyPartner from "../components/Whypartner";


import dedicatedicon from "../assets/wordpress6.svg"
import ndaicon from "../assets/wordpress8.svg"
import flexibleicon from "../assets/wordpress7.svg"
import modularicon from "../assets/wordpress9.svg"
import qualityicon from "../assets/wordpress10.svg"

function Wordpress() {

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

  return (
    <>
      <Banner />

      <Box
        sx={{
            maxWidth:'1700px',
            mx:'auto',
          display: "flex",
          justifyContent: { xs: "center", md: "space-between" },
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
          gap: 8,
          px: { xs: 2, sm: 3, lg: 12 },
          py: { xs: 5, lg: 10 },
        }}
      >
        {/* Left Text Section */}
        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <Box sx={{ maxWidth: "600px", mx: { xs: "auto", md: 0 } }}>
            <Typography
              lineHeight={1.1}
              fontWeight={500}
              sx={{ fontSize: { xs: "30px", sm: "40px", md: "56px" } }}
              gutterBottom
            >
              Web Development Made Easy
            </Typography>
            <Typography fontWeight={400} fontSize={16}>
              At <strong>Teamgrid</strong>, we help digital and web agencies
              deliver high-performing websites and web applications—without the
              cost and hassle of expanding in-house teams. Whether you need a
              single developer or a complete team, we provide vetted talent
              skilled in modern frameworks and tools.
              <br />
              <br />
              We specialize in the{" "}
              <strong>
                MERN stack, custom WordPress development, and agile development
                practices
              </strong>
              —ensuring scalable, maintainable, and secure web solutions.
            </Typography>
          </Box>
        </Box>

        {/* Right Image Section */}
        <Box
          component="img"
          src={wordpress1}
          alt="WordPress Development"
          sx={{
            width: { xs: "100%", sm: "80%", md: "50%" },
            maxWidth: "588px",
            height: "auto",
            objectFit: "contain",
            display: "block",
            mx: { xs: "auto", md: 0 },
          }}
        />
      </Box>
      <DevelopmentServices/>
      <WhyPartner cardData={cardData} heading={"Why Choose Teamgrid for Web Development?"}/>
    </>
  );
}

export default Wordpress;
