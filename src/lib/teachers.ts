export interface Teacher {
  name: string;
  subject: string;
  photo: string; // path relative to /public, e.g. /teachers/ahmed.jpg
}

export const teachers: Teacher[] = [
  {
    name: "Muhammad Yousuf Memon",
    subject: "Pakistan Studies & Islamiyat",
    photo: "/teachers/yousuf.jpg",
  },
  {
    name: "Muhammad Fazil Maniya",
    subject: "Islamiyat",
    photo: "/teachers/fazil.jpg",
  },
  {
    name: "Bilal Khan",
    subject: "Urdu",
    photo: "/teachers/bilal.jpg",
  },
];
