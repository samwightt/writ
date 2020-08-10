export interface TimestampType {
  toDate: () => Date;
}

export interface UserType {
  emailVerified: boolean;
  isAnonymous: boolean;
  photoURL: string;
  uid: string;
  email: string;
  displayName: string;
}

export const createTimestamps = () => ({
  create_date: new Date(),
  update_date: new Date(),
});
