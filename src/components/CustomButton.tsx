import { ReactNode, useState } from "react";
import "./CustomButton.css";
import MegaMenu from "./MegaMenu";
const CustomButton = ({
  text,
  InnerContent,
}: {
  text: string;
  InnerContent: string | ReactNode;
}) => {
  const [hoverd, setHoverd] = useState(false);
  console.log(hoverd);
  return (
    <>
      <button
        className="customBtn"
        onMouseEnter={() => setHoverd(true)}
        onMouseLeave={() => setHoverd(false)}>
        {text}
        {hoverd && <MegaMenu content={InnerContent} />}
      </button>
    </>
  );
};

export default CustomButton;
