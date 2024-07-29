import { CardContent, Card, Container } from "@mui/material";
const apikey = "cc0dc3dbe2mshaa28c7991a84973p1eb95ejsnd012ae315685";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
export default function RandomQuotCard() {
  const [quote, setQuote] = useState("");
  function today() {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    const formattedToday = dd + "/" + mm + "/" + yyyy;
    return formattedToday;
  }

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
        setQuote(data.quote);
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
            {today()}
          </Typography>
          {quote && (
            <Typography
              data-testid="quote-paragraph"
              mt={1}
              align="center"
              sx={{ fontStyle: "italic" }}
              variant="h5"
              component="div"
              color={"#052659"}
            >
              {`${quote.quote}`}
            </Typography>
          )}
          {quote && (
            <Typography
              data-testid="author-paragraph"
              color={"#052659"}
              align="center"
              mt={2}
              variant="body2"
            >
              {quote ? quote.author : ""}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Container>
  );
}
