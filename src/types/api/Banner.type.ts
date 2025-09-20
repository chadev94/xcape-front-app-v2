export type BannerType = {
  id: number;
  imagePath: string;
  link: string;
  description: string;
  type: "BLOCK" | "SLIDER";
  sequence: number;
  useYn: boolean;
  merchantId: number;
};
