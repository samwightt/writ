import type { FC } from "react";
import { firebaseConfig } from "config/firebase";
import { FirebaseAppProvider } from "reactfire";

const AppWrapper: FC = (props) => {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      {props.children}
    </FirebaseAppProvider>
  );
};

export default AppWrapper;
