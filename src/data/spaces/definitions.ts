import { TimestampType } from "../base";

export interface SpaceType {
  name: string;
  user_id: string;
  create_date: TimestampType;
  update_date: TimestampType;
}

export type SpaceList = SpaceType[];

export const SPACES_COLLECTION_NAME = "spaces";
