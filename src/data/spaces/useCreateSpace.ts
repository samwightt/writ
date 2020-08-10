import { useFirestore, useUser } from "reactfire";
import { SpaceInputType, SpaceCreateType } from "./definitions";
import { createTimestamps, UserType } from "data/base";
import { useState } from "react";

interface UseCreateSpaceInput {
  onCreate?: (id: string) => any;
}

export const useCreateSpace = (props: UseCreateSpaceInput) => {
  const user = useUser<UserType>();
  const firestore = useFirestore();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const create = async (input: SpaceInputType) => {
    const docToAdd: SpaceCreateType = {
      ...input,
      user_id: user.uid,
      ...createTimestamps(),
    };
    try {
      setIsLoading((_) => true);
      const result = await firestore.collection("spaces").add(docToAdd);
      setIsLoading((_) => false);
      props.onCreate && props.onCreate(result.id);
    } catch (e) {
      setError((_) => e);
    }
  };

  return {
    create,
    error,
    isLoading,
  };
};
