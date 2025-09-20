import { recoilPersist } from "recoil-persist";
import { atom } from "recoil";
import type { AbilityType } from "../../types/api/Ability.type.ts";

const { persistAtom } = recoilPersist();

export const abilityListAtom = atom<AbilityType[]>({
  key: "abilityList",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
