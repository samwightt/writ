import { useFirestore, useFirestoreCollectionData, useUser } from "reactfire";
import { SPACES_COLLECTION_NAME, SpaceType } from "./definitions";
import { UserType } from "../base";

export const useUserSpaces = () => {
  const user = useUser<UserType>();
  const firestore = useFirestore();

  const spacesRef = firestore
    .collection(SPACES_COLLECTION_NAME)
    .where("user_id", "==", user.uid);

  const spaces = useFirestoreCollectionData<SpaceType>(spacesRef);

  return spaces;
};
