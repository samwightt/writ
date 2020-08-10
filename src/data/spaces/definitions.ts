import { TimestampType } from "../base";

export interface SpaceType {
  id: string;
  name: string;
  stub: string;
  user_id: string;
  create_date: TimestampType;
  update_date: TimestampType;
}

export interface SpaceInputType {
  name: string;
  stub: string;
}

export interface SpaceCreateType extends SpaceInputType {
  user_id: string;
  create_date: Date;
  update_date: Date;
}

export type SpaceList = SpaceType[];

export const SPACES_COLLECTION_NAME = "spaces";
