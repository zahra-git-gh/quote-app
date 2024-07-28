import {
  Box,
  Container,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

export default function Footer() {
  const navItems = ["Home", "About", "Contact"];
  return (
    <Box sx={{ bgcolor: "#052659" }} width={"100%"} py={3}>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        maxWidth="md"
      >
        <Typography
          variant="h5"
          component={"h5"}
          alignItems={"center"}
          sx={{ color: "#c1e8ff" }}
        >
          Home Work
        </Typography>
        <Box
          display={"flex"}
          mt={2}
          flexDirection={"row"}
          flexWrap={"wrap"}
          justifyContent={"center"}
        >
          {navItems.map((item) => (
            <ListItem
              sx={{ width: { xs: "290px", sm: "180px" }, display: "inline" }}
              key={item}
              disablePadding
            >
              <ListItemButton
                sx={{ textAlign: "center", padding: 0, display: "inline" }}
              >
                <ListItemText
                  color="#c1e8ff"
                  sx={{ color: "#c1e8ff" }}
                  primary={item}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </Box>
        <Typography
          mt={2}
          variant="subtitle1"
          color={"primary.light"}
          component={"p"}
          fontSize={"13px"}
        >
          © 2024 Nereus All rights reserved
        </Typography>
      </Container>
    </Box>
  );
}
