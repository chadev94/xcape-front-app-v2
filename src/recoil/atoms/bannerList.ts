import { recoilPersist } from "recoil-persist";
import { atom } from "recoil";
import type { BannerType } from "../../types/api/Banner.type.ts";

const { persistAtom } = recoilPersist();

export const bannerListAtom = atom<BannerType[]>({
  key: "bannerList",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
