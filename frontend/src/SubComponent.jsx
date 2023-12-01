import { Box, Image } from "theme-ui";
import { useState } from "react";

const ImageCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://images.pexels.com/photos/15130357/pexels-photo-15130357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/15316227/pexels-photo-15316227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/videos/7592810/cavalry-cold-dawn-daylight-7592810.jpeg",
    "https://images.pexels.com/photos/14437079/pexels-photo-14437079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/14737533/pexels-photo-14737533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "black",
      }}
    >
      {images.map((src, index) => (
        <Box
          key={index}
          sx={{
            width: "200px",
            height: "200px",
            border: "1px solid gray",
            overflow: "hidden",
            cursor: "pointer",
            mx: 2,
            transition: "all .3s ease-in-out",
            transform: currentImageIndex === index ? "scale(1.5)" : "none",
          }}
          onClick={() => handleImageClick(index)}
        >
          <Image
            src={src}
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default ImageCarousel;
