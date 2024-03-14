import { ReactNode } from "react";
import "./MegaMenu.css";
const MegaMenu = ({ content }: { content: string | ReactNode }) => {
  return <span className="Wrapper">{content}</span>;
};

export default MegaMenu;
