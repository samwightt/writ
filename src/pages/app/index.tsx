import AppWrapper from "utils/AppWrapper";
import ClientSideOnly from "utils/ClientSideOnly";

export default function Home() {
  return (
    <AppWrapper>
      <ClientSideOnly>
        <h1>This works!</h1>
      </ClientSideOnly>
    </AppWrapper>
  );
}
