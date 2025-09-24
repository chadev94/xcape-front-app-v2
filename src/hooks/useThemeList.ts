import { useRecoilValue } from "recoil";
import { merchantListAtom } from "../recoil/atoms/merchantList.ts";
import { themeListAtom } from "../recoil/atoms/themeList.ts";
import { useLocation } from "react-router-dom";

export const useThemeList = () => {
  const location = useLocation();
  const merchantListState = useRecoilValue(merchantListAtom);
  const themeListState = useRecoilValue(themeListAtom);

  const currentMerchant = merchantListState.find((merchant) =>
    location.pathname.startsWith(`/merchant/${merchant.code}`)
  );

  console.log(currentMerchant);

  const xFilerThemeList = themeListState.filter(
    (theme) => theme.merchantId === currentMerchant?.id && !theme.isCrimeScene && theme.useYn
  );

  const crimeSceneThemeList = themeListState.filter(
    (theme) => theme.merchantId === currentMerchant?.id && theme.isCrimeScene && theme.useYn
  );

  return { xFilerThemeList, crimeSceneThemeList };
};
