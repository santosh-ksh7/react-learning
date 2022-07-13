import { useState } from "react";
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';

export function Counter() {

  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  return (
    <div>
      <IconButton onClick={() => setLike(like + 1)} color="primary" aria-label="like">
        <Badge badgeContent={like} color="primary">
          <ThumbUpIcon color="action" />
        </Badge>
      </IconButton>
      <IconButton onClick={() => setDislike(dislike + 1)} color="primary" aria-label="like">
        <Badge badgeContent={dislike} color="error">
          <ThumbDownIcon color="action" />
        </Badge>
      </IconButton>
    </div>
  );
}
