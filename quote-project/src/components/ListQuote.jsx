import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

import { Box } from "@mui/material";
import LikeIcon from "./LikeIcon";
export default function ListQuote({ isShow, data }) {
  console.log(data);
  return (
    <List
      sx={{
        width: "100%",
        mt: 2,
        display: isShow && data.length > 0 ? "block" : "none",
      }}
    >
      {data.map((quote, i) => {
        return (
          <>
            <ListItem key={i} alignItems="flex-start">
              <ListItemText
                sx={{ borderLeft: "4px solid black", borderRadius: 1, pl: 2 }}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "block", fontSize: "13px" }}
                      component="span"
                      variant="subtitle2"
                      color="text.primary"
                    >
                      {quote.category}
                    </Typography>
                    <Box
                      display={"flex"}
                      flexDirection={"row"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Typography
                        mt={1}
                        component={"h6"}
                        variant="h6"
                        sx={{ fontWeight: "bold", fontStyle: "italic" }}
                      >
                        {`"${quote.quote}"`}
                      </Typography>

                      <LikeIcon />
                    </Box>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        );
      })}
    </List>
  );
}
