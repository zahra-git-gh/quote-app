import Button from "@mui/material/Button";

export default function BasicBtn({text, handleClick}){
    return  <Button onClick={handleClick} sx={{ color: "#c1e8ff" }}>
    {text}
  </Button>
}