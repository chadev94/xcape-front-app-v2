import { Outlet } from "react-router-dom";
import styles from "@/styles/layouts/layout.module.scss";
import Header from "../modules/components/common/Header.tsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { merchantListAtom } from "../recoil/atoms/merchantList.ts";
import { abilityListAtom } from "../recoil/atoms/abilityList.ts";
import { bannerListAtom } from "../recoil/atoms/bannerList.ts";
import { themeListAtom } from "../recoil/atoms/themeList.ts";
import type { ThemeType } from "../types/api/Theme.type.ts";
import NotionModal from "../modules/components/notion/NotionModal.tsx";

const dataCategoryList = ["merchant", "theme", "banner", "ability"];
const urlList = dataCategoryList.map(
  (category) => `https://xcape-business-sdk-uploads.s3.ap-northeast-2.amazonaws.com/json/${category}/release.json`
);

const Layout = () => {
  const [isPrivacyPolicyModalOpen, setIsPrivacyPolicyModalOpen] = useState(false);

  const setMerchantList = useSetRecoilState(merchantListAtom);
  const setThemeList = useSetRecoilState(themeListAtom);
  const setBannerList = useSetRecoilState(bannerListAtom);
  const setAbilityList = useSetRecoilState(abilityListAtom);
  const getAllData = () => {
    axios
      .all(urlList.map((url) => axios.get(url))) //
      .then(([merchantRes, themeRes, bannerRes, abilityRes]) => {
        if (merchantRes.status === 200) {
          setMerchantList(merchantRes.data);
        }

        if (themeRes.status === 200) {
          const themeList = themeRes.data as ThemeType[];
          const availableThemeList = themeList.filter((theme) => theme.nameKo !== "test");
          setThemeList(availableThemeList);
        }

        if (bannerRes.status === 200) {
          setBannerList(bannerRes.data);
        }

        if (abilityRes.status === 200) {
          setAbilityList(abilityRes.data);
        }
      });
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <section className={styles.section}>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div>ⓒ 2025. XCAPE ALL RIGHTS RESERVED</div>
          <div>대표자: 조민후 | 주소: 서울 광진구 동일로 112, 금아빌딩, 엑스케이프 건대점</div>
          <div>사업자등록번호: 851-70-00056 | E-mail: xcaperoom@naver.com</div>
          <div>전화번호: 02-463-9366</div>
          <div className={styles.link} onClick={() => setIsPrivacyPolicyModalOpen(true)}>
            개인정보처리방침
          </div>
        </div>
      </footer>
      {isPrivacyPolicyModalOpen && (
        <NotionModal notionPageId={"fdfef31fe69e4349b35af0c617e42b03"} setIsOpen={setIsPrivacyPolicyModalOpen} />
      )}
    </section>
  );
};

export default Layout;
