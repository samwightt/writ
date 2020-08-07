import { Suspense } from "react";
import AppWrapper from "utils/AppWrapper";
import ClientSideOnly from "utils/ClientSideOnly";
import SignInForm from "views/auth/SignInForm";

export default function SignInPage() {
  return (
    <AppWrapper>
      <ClientSideOnly>
        <Suspense fallback={<h1>This works!</h1>}>
          <SignInForm />
        </Suspense>
      </ClientSideOnly>
    </AppWrapper>
  );
}
