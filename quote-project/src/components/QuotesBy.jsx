import { Typography } from "@mui/material";

export default function QuotesBy({ isShow, author }) {
  return (
    <Typography
      mt={1}
      variant="body1"
      align="center"
      component={"p"}
      sx={{ display: isShow ? "block" : "none" }}
    >
      {`Quotes by "${author}"`}
    </Typography>
  );
}
