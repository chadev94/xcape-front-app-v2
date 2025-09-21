import Menu from "../modules/components/merchant/Menu.tsx";
import CautionLine from "../modules/components/common/CautionLine.tsx";
import Slider from "react-slick";
import { useRecoilValue } from "recoil";
import { merchantListAtom } from "../recoil/atoms/merchantList.ts";
import { bannerListAtom } from "../recoil/atoms/bannerList.ts";
import { Outlet, useLocation, useMatch } from "react-router-dom";
import styles from "@/styles/layouts/merchantLayout.module.scss";
import { useEffect } from "react";
import Timer from "../modules/components/merchant/Timer.tsx";

const sliderConfig = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 3000,
};

const MerchantLayout = () => {
  const matchRoot = useMatch("/merchant/:merchantCode");
  const matchChild = useMatch("/merchant/:merchantCode/:subPath");

  const location = useLocation();
  const merchantListState = useRecoilValue(merchantListAtom);
  const bannerListState = useRecoilValue(bannerListAtom);

  const currentMerchant = merchantListState.find((merchant) => location.pathname === `/merchant/${merchant.code}`);

  const sliderBannerList = bannerListState.filter(
    (banner) => banner.merchantId === currentMerchant?.id && banner.type === "SLIDER" && banner.useYn
  );

  useEffect(() => {
    const timer = setInterval(() => {}, 10);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <Menu />
      <div>
        {matchRoot && sliderBannerList.length > 0 && (
          <>
            <CautionLine />
            <Slider {...sliderConfig}>
              {sliderBannerList.map((sliderBanner) => {
                return <img key={`sliderBanner-${sliderBanner.id}`} src={sliderBanner.imagePath} alt="slider-banner" />;
              })}
            </Slider>
            <CautionLine />
          </>
        )}
        {matchChild && matchChild.params.subPath !== "reservations" && (
          <div className={styles.timerContainer}>
            <CautionLine />
            <img className={styles.background} src={"/assets/images/timer-background.png"} alt="timer-background" />
            <Timer className={styles.timer} />
            <CautionLine />
          </div>
        )}
        <Outlet />
      </div>
    </div>
  );
};

export default MerchantLayout;
