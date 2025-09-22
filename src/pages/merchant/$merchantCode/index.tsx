import { useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { merchantListAtom } from "../../../recoil/atoms/merchantList.ts";
import ThemeList from "../../../modules/components/merchant/ThemeList.tsx";
import { themeListAtom } from "../../../recoil/atoms/themeList.ts";

const Index = () => {
  const location = useLocation();

  const merchantListState = useRecoilValue(merchantListAtom);
  const themeListState = useRecoilValue(themeListAtom);

  const currentMerchant = merchantListState.find((merchant) => location.pathname === `/merchant/${merchant.code}`);

  const xFilerThemeList = themeListState.filter(
    (theme) => theme.merchantId === currentMerchant?.id && !theme.isCrimeScene && theme.useYn
  );

  const crimeSceneThemeList = themeListState.filter(
    (theme) => theme.merchantId === currentMerchant?.id && theme.isCrimeScene && theme.useYn
  );

  return (
    <div>
      {xFilerThemeList.length > 0 && <ThemeList themeList={xFilerThemeList} isCrimScene={false} />}
      {crimeSceneThemeList.length > 0 && <ThemeList themeList={crimeSceneThemeList} isCrimScene={true} />}
    </div>
  );
};

export default Index;
