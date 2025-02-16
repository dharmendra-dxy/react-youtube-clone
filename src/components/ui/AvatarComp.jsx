import { Avatar } from "@material-tailwind/react";
 
const AvatarComp = ({src, size}) => {
  return (
    <Avatar 
    src={src ? src : "https://cdn-icons-png.flaticon.com/512/6596/6596121.png"} 
    alt="avatar" 
    size={size ? size: "lg"}
    className="object-contain cursor-pointer"
    />
  )
} 

export default AvatarComp;