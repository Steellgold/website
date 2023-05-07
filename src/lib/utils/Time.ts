export function fromStart(start: string): string {
  return `${start} → aujourd'hui`;
}

export function fromStartToEnd(start: string, end: string): string {
  return `${start} → ${end}`;
}