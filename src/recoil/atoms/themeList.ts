import { recoilPersist } from "recoil-persist";
import { atom } from "recoil";
import type { ThemeType } from "../../types/api/Theme.type.ts";

const { persistAtom } = recoilPersist();

export const themeListAtom = atom<ThemeType[]>({
  key: "themeList",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
