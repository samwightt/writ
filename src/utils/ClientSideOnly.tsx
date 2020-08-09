import { FC, useContext, useEffect } from "react";
import { ClientSideContext } from "./AppWrapper";

const ClientSideOnly: FC = (props) => {
  const { clientSide, setClientSide } = useContext(ClientSideContext);

  useEffect(() => {
    if (!clientSide) setClientSide(true);
  }, []);

  return <>{clientSide ? props.children : <h1>Loading...</h1>}</>;
};

export default ClientSideOnly;
