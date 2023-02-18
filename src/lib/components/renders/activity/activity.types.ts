export type IActivity = {
  details: string;
  name: string;
  state: string;

  created_at: number;
  end_at?: number;

  isPaused: boolean;
}