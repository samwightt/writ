import { FC, useState, useEffect } from "react";

const ClientSideOnly: FC = (props) => {
  const [isClient, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  return <>{isClient ? props.children : <h1>Loading...</h1>}</>;
};

export default ClientSideOnly;
