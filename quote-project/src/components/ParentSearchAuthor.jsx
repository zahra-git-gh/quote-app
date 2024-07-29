import { Container } from "@mui/material";
import InputSearchAuthor from "./InputSearchAuthor";
import ListQuote from "./ListQuote";
import QuotesBy from "./QuotesBy";
import NotFoundAuthor from "./NotFoundAuthor";
import { useEffect, useState } from "react";

export default function ParentSearchAuthor() {
  const apikey = "cc0dc3dbe2mshaa28c7991a84973p1eb95ejsnd012ae315685";
  const [author, setAuthor] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(data);
  function withDash(str) {
    const array = str.split(" ");
    return array.join("-");
  }
  function filterData(array) {
    return array.filter(
      (value, index, self) =>
        index === self.findIndex((t) => t.quote === value.quote)
    );
  }
  useEffect(() => {
    setIsLoading(true);
    setData([]);
    const dashedNameAuthor = withDash(author);
    fetch(`https://get-quotes-api.p.rapidapi.com/author/${dashedNameAuthor}`, {
      headers: {
        "x-rapidapi-key": apikey,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.quotes) {
          setIsLoading(false);
          const filterDataQuotes = filterData(data.quotes);
          setData(filterDataQuotes);
        } else {
          setIsLoading(false);
          setData([]);
        }
      });
  }, [author]);
  return (
    <Container maxWidth={"md"} sx={{ mt: 10, mb: 10 }}>
      <InputSearchAuthor setAuthor={setAuthor} />
      <QuotesBy isShow={author ? true : false} author={author} />
      <ListQuote
        data={data}
        isShow={author && data.length > 0 ? true : false}
      />
      <NotFoundAuthor
        author={author}
        isShow={!isLoading && author && !data.length > 0 ? true : false}
      />
    </Container>
  );
}
