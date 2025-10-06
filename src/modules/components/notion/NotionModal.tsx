import NotionPage from "./NotionRenderer.tsx";
import NotionModalPortal from "../../portals/NotionModalPortal.tsx";
import type { Dispatch, SetStateAction } from "react";
import styles from "@/styles/modules/modal.module.scss";
import Backdrop from "../common/Backdrop.tsx";
import CloseIcon from "../../icons/CloseIcon.tsx";

type Props = {
  notionPageId?: string | null;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const NotionModal = ({ notionPageId, setIsOpen }: Props) => {
  return (
    <NotionModalPortal>
      <Backdrop />
      <div className={styles.container}>
        <div className={styles.header}>
          개인정보처리방침
          <div className={styles["close-button"]} onClick={() => setIsOpen(false)}>
            <CloseIcon />
          </div>
        </div>
        <div className={styles.body}>
          <NotionPage notionPageId={notionPageId} />
        </div>
      </div>
    </NotionModalPortal>
  );
};

export default NotionModal;
