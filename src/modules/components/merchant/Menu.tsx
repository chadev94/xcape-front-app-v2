import styles from "@/styles/modules/menu.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { currentMerchantAtom } from "../../../recoil/atoms/currentMerchant.ts";

const Menu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentMerchant = useRecoilValue(currentMerchantAtom);

  const handleNavigate = (path: string) => {
    if (currentMerchant) {
      return navigate(`/merchant/${currentMerchant.code}/${path}`);
    }
  };

  const isActive = (path: string) => {
    if (!currentMerchant) return false;
    return location.pathname.startsWith(`/merchant/${currentMerchant.code}/${path}`);
  };

  return (
    <div className={styles.menuContainer}>
      <div
        className={`${styles.menu} ${isActive("xcape") ? styles.active : ""}`}
        onClick={() => handleNavigate("xcape")}
      >
        XCAPE
      </div>
      <div
        className={`${styles.menu} ${isActive("rooms") ? styles.active : ""}`}
        onClick={() => handleNavigate("rooms")}
      >
        ROOMS
      </div>
      <div
        className={`${styles.menu} ${isActive("reservations") ? styles.active : ""}`}
        onClick={() => handleNavigate("reservations")}
      >
        RESERVATION
      </div>
    </div>
  );
};

export default Menu;
