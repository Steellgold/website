export type IActivity = {
  details: string;
  name: string;
  state: string;

  created_at: number | null;
  end_at?: number | null;

  isPaused: boolean;
}