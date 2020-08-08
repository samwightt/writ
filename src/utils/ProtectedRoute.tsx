import { FC, Suspense, useEffect } from "react";
import { useUser } from "reactfire";
import { useRouter } from "next/router";
import ClientSideOnly from "./ClientSideOnly";

const ProtectedRoute: FC = (props) => {
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push("/auth/signin");
  }, [user]);

  if (!user) return <></>;
  return <>{props.children}</>;
};

const WrappedProtectRoute: FC = (props) => {
  return (
    <ClientSideOnly>
      <Suspense fallback={<h1>Loading...</h1>}>
        <ProtectedRoute>{props.children}</ProtectedRoute>
      </Suspense>
    </ClientSideOnly>
  );
};

export default WrappedProtectRoute;
