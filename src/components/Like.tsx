import { useState } from "react";
import { BsFillHeartFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

interface LikeProps {
  onClick: () => void;
}

const Like = ({ onClick }: LikeProps) => {
  const [liked, setLiked] = useState(false);

  const toggle = () => {
    setLiked(!liked);
    onClick();
  };

  if (liked) {
    return <BsFillHeartFill color="pink" size={"40px"} onClick={toggle} />;
  } else {
    return <AiOutlineHeart size={"40px"} onClick={toggle} />;
  }
};

export default Like;
