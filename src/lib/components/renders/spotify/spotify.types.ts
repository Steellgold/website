export interface ISpotify {
  song?: string;
  artist?: string;
  trackUrl?: string;
  timestamps: {
    start: number;
    end: number;
  }
}