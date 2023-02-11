import dayjs from "dayjs";

export function fromStart(start: string) {
  return `${start} → aujourd'hui`;
}

export function fromStartToEnd(start: string, end: string) {
  return `${start} → ${end}`;
}