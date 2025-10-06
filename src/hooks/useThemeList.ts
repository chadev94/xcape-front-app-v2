import { useRecoilValue } from "recoil";
import { themeListAtom } from "../recoil/atoms/themeList.ts";
import { currentMerchantAtom } from "../recoil/atoms/currentMerchant.ts";

export const useThemeList = () => {
  const themeListState = useRecoilValue(themeListAtom);
  const currentMerchant = useRecoilValue(currentMerchantAtom);

  const xFilerThemeList = themeListState.filter(
    (theme) => theme.merchantId === currentMerchant?.id && !theme.isCrimeScene && theme.useYn
  );

  const crimeSceneThemeList = themeListState.filter(
    (theme) => theme.merchantId === currentMerchant?.id && theme.isCrimeScene && theme.useYn
  );

  return { xFilerThemeList, crimeSceneThemeList };
};
