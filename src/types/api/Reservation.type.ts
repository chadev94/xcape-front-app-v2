export type ReservationType = {
  id: string;
  seq: number;
  merchantName: string;
  themeId: number;
  themeName: string;
  date: string;
  time: string;
  isReserved: true;
  participantCount: number;
  roomType: "GENERAL" | "OPEN_ROOM";
};
