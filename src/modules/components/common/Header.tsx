import styles from "@/styles/modules/header.module.scss";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { merchantListAtom } from "../../../recoil/atoms/merchantList.ts";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { currentMerchantAtom } from "../../../recoil/atoms/currentMerchant.ts";
import XcapeIcon from "../../icons/XcapeIcon.tsx";
import UserIcon from "../../icons/UserIcon.tsx";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const merchantListState = useRecoilValue(merchantListAtom);

  const setCurrentMerchant = useSetRecoilState(currentMerchantAtom);

  useEffect(() => {
    const currentMerchant = merchantListState.find((merchant) =>
      location.pathname.startsWith(`/merchant/${merchant.code}`)
    );

    setCurrentMerchant(currentMerchant);
  }, [location, merchantListState, setCurrentMerchant]);

  return (
    <header>
      <div>
        <div className={styles.bannerContainer}>
          <img className={styles.bannerImage} src={"/assets/images/background.png"} alt="background" />
          <div className={styles.xcapeIcon}>
            <XcapeIcon size={"3.5rem"} />
          </div>
          <div className={styles.userIcon}>
            <UserIcon size={"2.5rem"} />
          </div>
        </div>
        <div className={styles.merchantContainer}>
          {merchantListState.map((merchant) => {
            const merchantUrl = `/merchant/${merchant.code}`;
            const isActive = location.pathname.startsWith(merchantUrl);

            return (
              <div
                key={`merchant-${merchant.id}`}
                className={`${styles.merchant} ${isActive ? styles.active : null}`}
                onClick={() => navigate(merchantUrl)}
              >
                {isActive && <div className={styles.triangle}></div>}
                {merchant.name}
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
