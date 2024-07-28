import { CardContent, Card, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

export default function RandomQuotCard() {
  const apikey = import.meta.env.VITE_API_KEY;
  const [quote, setQuote] = useState("");
  console.log(apikey);
  useEffect(() => {
    fetch("https://get-quotes-api.p.rapidapi.com/random", {
      headers: {
        "x-rapidapi-key": apikey,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setQuote(data.quote.quote);
      });
  }, []);

  return (
    <Container maxWidth="md">
      <Card
        sx={{
          minWidth: 275,
          mt: 10,
          boxShadow: "none",
          borderLeft: "4px solid #052659",
        }}
      >
        <CardContent sx={{ bgcolor: "#EBF4F6", px: 0 }}>
          <Typography
            align="center"
            sx={{ fontSize: 20, fontWeight: "bold", color: "#052659" }}
            gutterBottom
            variant="h5"
            component={"div"}
          >
            Quote of the Day
          </Typography>
          <Typography color={"#021024"} align="center">
            Jul 28, 2024
          </Typography>
          <Typography
            mt={1}
            align="center"
            sx={{ fontStyle: "italic" }}
            variant="h5"
            component="div"
            color={"#052659"}
          >
            {`"${quote}"`}
          </Typography>

          <Typography color={"#052659"} align="center" mt={2} variant="body2">
            {"John Lennon"}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
