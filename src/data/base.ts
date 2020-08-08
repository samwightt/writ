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
