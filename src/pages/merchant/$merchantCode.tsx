import { useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { merchantListAtom } from "../../recoil/atoms/merchantList.ts";

const MerchantCode = () => {
  const location = useLocation();

  const merchantListState = useRecoilValue(merchantListAtom);

  const currentMerchant = merchantListState.find((merchant) => location.pathname === `/merchant/${merchant.code}`);
  return <div>{currentMerchant?.name}</div>;
};

export default MerchantCode;
