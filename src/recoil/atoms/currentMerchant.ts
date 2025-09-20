import { recoilPersist } from "recoil-persist";
import { atom } from "recoil";
import type { MerchantType } from "../../types/api/Merchant.type.ts";

const { persistAtom } = recoilPersist();

export const currentMerchantAtom = atom<MerchantType | null | undefined>({
  key: "currentMerchant",
  default: null,
  effects_UNSTABLE: [persistAtom],
});
