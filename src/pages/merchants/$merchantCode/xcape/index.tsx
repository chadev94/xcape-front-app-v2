import styles from "@/styles/pages/xcape.module.scss";
import { useEffect, useState } from "react";
import NotionPage from "../../../../modules/components/notion/NotionRenderer.tsx";
import { useRecoilValue } from "recoil";
import { currentMerchantAtom } from "../../../../recoil/atoms/currentMerchant.ts";

const XcapePage = () => {
  const currentMerchant = useRecoilValue(currentMerchantAtom);

  const [activeTab, setActiveTab] = useState(0);
  const [notionPageId, setNotionPageId] = useState<string>("");

  const updateNotionPageId = () => {
    if (!currentMerchant) return;

    if (activeTab === 0) {
      setNotionPageId(currentMerchant.brandInfoNotionId);
    } else if (activeTab === 1) {
      setNotionPageId(currentMerchant.usingInfoNotionId);
    } else if (activeTab === 2) {
      setNotionPageId(currentMerchant.addressInfoNotionId);
    }
  };

  useEffect(() => {
    updateNotionPageId();
  }, [activeTab, currentMerchant]);

  return (
    <div>
      <div className={styles.menu}>
        <div className={`${styles.item} ${activeTab === 0 ? styles.active : ""}`} onClick={() => setActiveTab(0)}>
          브랜드 소개
        </div>
        <div className={`${styles.item} ${activeTab === 1 ? styles.active : ""}`} onClick={() => setActiveTab(1)}>
          이용안내
        </div>
        <div className={`${styles.item} ${activeTab === 2 ? styles.active : ""}`} onClick={() => setActiveTab(2)}>
          오시는 길
        </div>
      </div>

      <div className={styles.brand}>
        <NotionPage notionPageId={notionPageId} />
      </div>
    </div>
  );
};

export default XcapePage;
