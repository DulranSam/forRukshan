import { Box, Image } from "theme-ui";
import { useEffect, useState } from "react";
import Axios from "axios";

const ImageCarousel = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function FetchMyShit() {
      try {
        const r = await Axios.get("http://localhost:8000/rukshan")
          .then((r) => {
            setData(r.data);
          })
          .finally(() => {
            console.log("Data Saved to Setter");
          });
      } catch (err) {
        console.error(err);
      }
    }

    FetchMyShit();
  }, []);

  return (
    <>
      <p>{JSON.stringify(data)}</p>
    </>
  );
};

export default ImageCarousel;
