import { Avatar } from "@material-tailwind/react";
 
const AvatarComp = ({src}) => {
  return (
    <Avatar src={src} alt="avatar" 
    size="lg"
    className="object-contain cursor-pointer"
    />
  )
}

export default AvatarComp;