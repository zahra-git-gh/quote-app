import { Typography } from "@mui/material";

export default function NotFoundAuthor({ isShow, author }) {
  return (
    <Typography
      component={"p"}
      sx={{ display: isShow ? "block" : "none" }}
      align="center"
      mt={2}
    >{`No quotes found for the specified filter - '${author}'.`}</Typography>
  );
}
