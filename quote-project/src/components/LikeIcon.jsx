import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";

export default function LikeIcon() {
  const [like, isLike] = useState(false);
  const handleClickHeart = () => isLike((beforeState) => !beforeState);
  return (
    <div onClick={handleClickHeart}>
      {like ? (
        <FavoriteIcon fontSize="small" sx={{ cursor: "pointer" }} />
      ) : (
        <FavoriteBorderIcon fontSize="small" sx={{ cursor: "pointer" }} />
      )}
    </div>
  );
}
