import ReactDOM from "react-dom";
import type { ReactNode } from "react";

interface PortalProps {
  children: ReactNode;
}

const NotionModalPortal = ({ children }: PortalProps) => {
  const modalRoot = document.getElementById("notionModal") as HTMLElement;
  return ReactDOM.createPortal(children, modalRoot);
};

export default NotionModalPortal;
