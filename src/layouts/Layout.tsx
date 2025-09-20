import { Outlet } from "react-router-dom";
import styles from "@/styles/layouts/layout.module.scss";
import Header from "../modules/components/common/Header.tsx";
import { useEffect } from "react";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { merchantListAtom } from "../recoil/atoms/merchantList.ts";
import { abilityListAtom } from "../recoil/atoms/abilityList.ts";
import { bannerListAtom } from "../recoil/atoms/bannerList.ts";
import { themeListAtom } from "../recoil/atoms/themeList.ts";

const dataCategoryList = ["merchant", "theme", "banner", "ability"];
const urlList = dataCategoryList.map(
  (category) => `https://xcape-business-sdk-uploads.s3.ap-northeast-2.amazonaws.com/json/${category}/release.json`
);

const Layout = () => {
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
          setThemeList(themeRes.data);
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
    </section>
  );
};

export default Layout;
