import { Bike, Book, BookHeart, Clapperboard, Coins, Cpu, Disc3, Globe2, Pencil, ScrollText, Slash, TestTubeDiagonal, Users, Vote } from "lucide-react";
import { ReactElement } from "react";

export enum TagEnum {
  GEOGRAPHY = "GEOGRAPHY",
  HISTORY = "HISTORY",
  SCIENCE = "SCIENCE",
  LITERATURE = "LITERATURE",
  ART = "ART",
  MUSIC = "MUSIC",
  CINEMA = "CINEMA",
  SPORTS = "SPORTS",
  POLITICS = "POLITICS",
  ECONOMY = "ECONOMY",
  PHILOSOPHY = "PHILOSOPHY",
  TECHNOLOGY = "TECHNOLOGY",
  SOCIETY = "SOCIETY",
  RELIGION = "RELIGION",
  VIDEOGAMES = "VIDEOGAMES",
}

export type Tag = {
  names: Record<string, string>;
  enum: TagEnum;
  icon: ReactElement;
}

export type Question = {
  difficulty: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  question: Record<string, string>;
  answers: Record<string, string[]>;
  correct?: number;
  explanation: Record<string, string>;
  tags: string[];

  id: string;
}

export const tags: Tag[] = [
  { names: { fr: "Géographie", en: "Geography" }, icon: <Globe2 />, enum: TagEnum.GEOGRAPHY },
  { names: { fr: "Histoire", en: "History" }, icon: <ScrollText />, enum: TagEnum.HISTORY },
  { names: { fr: "Science", en: "Science" }, icon: <TestTubeDiagonal />, enum: TagEnum.SCIENCE },
  { names: { fr: "Littérature", en: "Literature" }, icon: <Book />, enum: TagEnum.LITERATURE },
  { names: { fr: "Art", en: "Art" }, icon: <Pencil />, enum: TagEnum.ART },
  { names: { fr: "Musique", en: "Music" }, icon: <Disc3 />, enum: TagEnum.MUSIC },
  { names: { fr: "Cinéma", en: "Cinema" }, icon: <Clapperboard />, enum: TagEnum.CINEMA },
  { names: { fr: "Sports", en: "Sports" }, icon: <Bike />, enum: TagEnum.SPORTS },
  { names: { fr: "Politique", en: "Politics" }, icon: <Vote />, enum: TagEnum.POLITICS },
  { names: { fr: "Économie", en: "Economy" }, icon: <Coins />, enum: TagEnum.ECONOMY },
  { names: { fr: "Philosophie", en: "Philosophy" }, icon: <Slash />, enum: TagEnum.PHILOSOPHY },
  { names: { fr: "Technologie", en: "Technology" }, icon: <Cpu />, enum: TagEnum.TECHNOLOGY },
  { names: { fr: "Société", en: "Society" }, icon: <Users />, enum: TagEnum.SOCIETY },
  { names: { fr: "Religion", en: "Religion" }, icon: <BookHeart />, enum: TagEnum.RELIGION },
  { names: { fr: "Jeux vidéo", en: "Video Games" }, icon: <BookHeart />, enum: TagEnum.VIDEOGAMES },
];