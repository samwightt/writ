import { FC, createContext, useState, SetStateAction } from "react";
import { firebaseConfig } from "config/firebase";
import { FirebaseAppProvider } from "reactfire";

interface ClientSideContextValue {
  clientSide: boolean;
  setClientSide: (value: boolean) => any;
}

export const ClientSideContext = createContext<ClientSideContextValue>({
  clientSide: false,
  setClientSide: (val) => {},
});

const AppWrapper: FC = (props) => {
  const [clientSide, setClientSide] = useState(false);

  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <ClientSideContext.Provider value={{ clientSide, setClientSide }}>
        {props.children}
      </ClientSideContext.Provider>
    </FirebaseAppProvider>
  );
};

export default AppWrapper;
