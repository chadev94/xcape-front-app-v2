import { recoilPersist } from "recoil-persist";
import { atom } from "recoil";
import type { MerchantType } from "../../types/api/Merchant.type.ts";

const { persistAtom } = recoilPersist();

export const merchantListAtom = atom<MerchantType[]>({
  key: "merchantList",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
