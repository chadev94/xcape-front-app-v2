import { useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { merchantListAtom } from "../../recoil/atoms/merchantList.ts";
import CautionLine from "../../modules/components/common/CautionLine.tsx";
import Menu from "../../modules/components/merchant/Menu.tsx";
import { bannerListAtom } from "../../recoil/atoms/bannerList.ts";
import Slider from "react-slick";
import ThemeList from "../../modules/components/merchant/ThemeList.tsx";
import { themeListAtom } from "../../recoil/atoms/themeList.ts";

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

const Merchant = () => {
  const location = useLocation();

  const merchantListState = useRecoilValue(merchantListAtom);
  const themeListState = useRecoilValue(themeListAtom);
  const bannerListState = useRecoilValue(bannerListAtom);

  const currentMerchant = merchantListState.find((merchant) => location.pathname === `/merchant/${merchant.code}`);

  const sliderBannerList = bannerListState.filter(
    (banner) => banner.merchantId === currentMerchant?.id && banner.type === "SLIDER" && banner.useYn
  );

  const xFilerThemeList = themeListState.filter(
    (theme) => theme.merchantId === currentMerchant?.id && !theme.isCrimeScene && theme.useYn
  );

  const crimeSceneThemeList = themeListState.filter(
    (theme) => theme.merchantId === currentMerchant?.id && theme.isCrimeScene && theme.useYn
  );

  return (
    <div>
      <Menu />
      <div>
        <CautionLine />
        <Slider {...sliderConfig}>
          {sliderBannerList.map((sliderBanner) => {
            return <img key={`sliderBanner-${sliderBanner.id}`} src={sliderBanner.imagePath} alt="slider-banner" />;
          })}
        </Slider>
        <CautionLine />
        {xFilerThemeList.length > 0 && <ThemeList themeList={xFilerThemeList} isCrimScene={false} />}
        {crimeSceneThemeList.length > 0 && <ThemeList themeList={crimeSceneThemeList} isCrimScene={true} />}
      </div>
    </div>
  );
};

export default Merchant;
