import CautionLine from "../modules/components/common/CautionLine.tsx";
import styles from "@/styles/pages/index.module.scss";

const Index = () => {
  return (
    <div>
      <CautionLine />
      <div className={styles.banner}>상단에서 지점을 선택해주세요!</div>
      <CautionLine />

      <iframe
        className={styles.youtube}
        src="https://www.youtube.com/embed/lTRs8EiuONE?autoplay=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Index;
