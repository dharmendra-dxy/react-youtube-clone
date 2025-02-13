import { Avatar } from "@material-tailwind/react";
 
const AvatarComp = ({src, size}) => {
  return (
    <Avatar 
    src={src} 
    alt="avatar" 
    size={size ? size: "lg"}
    className="object-contain cursor-pointer"
    />
  )
} 

export default AvatarComp;