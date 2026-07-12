const CDN = "https://cdn.gaetanhus.fr/cats";

export const KITTY = {
  name: "Kitty",
  birth: new Date(2015, 3, 16),
  death: new Date(2025, 11, 22),
};

export const NOISETTE = {
  name: "Noisette",
  birth: new Date(2018, 4, 29),
};

export type CatPhoto = {
  src: string;
  cats: ("kitty" | "noisette")[];
  width: number;
  height: number;
  date: Date | null;
  description: { fr: string; en: string };
  zoom?: number;
};

export const KITTY_FEATURED_PHOTO: CatPhoto = {
  src: `${CDN}/kitty_looking_up_at_me.jpg`,
  cats: ["kitty"],
  width: 1600,
  height: 840,
  date: null,
  description: { fr: "Me regardant", en: "Looking up at me" },
};

export const GALLERY_PHOTOS: CatPhoto[] = [
  {
    src: `${CDN}/noisette_sunbathing.jpg`,
    cats: ["noisette"],
    width: 602,
    height: 803,
    date: new Date(2025, 11, 28),
    description: { fr: "Bronzant au soleil", en: "Sunbathing" },
  },
  {
    src: `${CDN}/kitty_wants_to_grow.jpg`,
    cats: ["kitty"],
    width: 602,
    height: 803,
    date: new Date(2024, 11, 31),
    description: { fr: "Envie de grandir", en: "Wants to grow" },
  },
  {
    src: `${CDN}/noisette_chasing_the_string.jpg`,
    cats: ["noisette"],
    width: 602,
    height: 803,
    date: new Date(2025, 0, 4),
    description: { fr: "Chassant la ficelle", en: "Chasing the string" },
  },
  {
    src: `${CDN}/kitty_caught_in_the_act_of_spying.jpg`,
    cats: ["kitty"],
    width: 602,
    height: 803,
    date: new Date(2025, 1, 5),
    description: { fr: "Prise en flagrant délit d'espionnage", en: "Caught in the act of spying" },
  },
  {
    src: `${CDN}/noisette_peeking_from_behind_the_curtain.jpg`,
    cats: ["noisette"],
    width: 602,
    height: 803,
    date: new Date(2026, 2, 20),
    description: { fr: "Épiant derrière le rideau", en: "Peeking from behind the curtain" },
  },
  {
    src: `${CDN}/kitty_sit_on_bed.jpg`,
    cats: ["kitty"],
    width: 602,
    height: 803,
    date: new Date(2022, 0, 26),
    description: { fr: "Assise sur le lit", en: "Sitting on the bed" },
  },
  {
    src: `${CDN}/noisette_relaxing_in_the_sun.jpg`,
    cats: ["noisette"],
    width: 602,
    height: 803,
    date: new Date(2022, 8, 24),
    description: { fr: "Se relaxant au soleil", en: "Relaxing in the sun" },
  },
  {
    src: `${CDN}/kitty_security_camera.jpg`,
    cats: ["kitty"],
    width: 602,
    height: 803,
    date: new Date(2025, 7, 11),
    description: { fr: "Sous vidéosurveillance", en: "On security camera" },
    zoom: 1.1,
  },
  {
    src: `${CDN}/noisette_sitting_on_the_chair.jpg`,
    cats: ["noisette"],
    width: 597,
    height: 796,
    date: new Date(2024, 11, 8),
    description: { fr: "Assise sur la chaise", en: "Sitting on the chair" },
  },
  {
    src: `${CDN}/kitty_sitting_in_the_sun.jpg`,
    cats: ["kitty"],
    width: 602,
    height: 803,
    date: new Date(2024, 3, 24),
    description: { fr: "Assise au soleil", en: "Sitting in the sun" },
  },
  {
    src: `${CDN}/noisette_and_kitty_looking_out_the_window.jpg`,
    cats: ["kitty", "noisette"],
    width: 750,
    height: 1000,
    date: new Date(2025, 11, 21),
    description: { fr: "Regardant par la fenêtre", en: "Looking out the window" },
    zoom: 1.1,
  },
  {
    src: `${CDN}/noisette_basking_in_the_morning_su.jpg`,
    cats: ["noisette"],
    width: 602,
    height: 803,
    date: new Date(2026, 2, 2, 8, 1),
    description: { fr: "Profitant du soleil du matin", en: "Basking in the morning sun" },
  },
];