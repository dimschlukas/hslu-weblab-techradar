export interface Log {
  _id: string;
  type: string;
  success: boolean;
  email: string;
  reason: string;
  timestamp: Date;
}

export interface LogPage {
  logs: Log[];
  total: number;
  page: number;
  limit: number;
}
