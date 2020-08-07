import AppWrapper from "utils/AppWrapper";
import NoSSR from "react-no-ssr";
import ClientSideOnly from "../../utils/ClientSideOnly";
import { NextPage } from "next";

export default function HomePage() {
  return (
    <ClientSideOnly>
      <h1>Example!</h1>
    </ClientSideOnly>
  );
}
