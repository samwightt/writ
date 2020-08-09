import type { FC, ComponentType } from "react";
import AppWrapper from "./AppWrapper";
import ProtectedRoute from "./ProtectedRoute";
import ApplicationLayout from "components/layouts/ApplicationLayout";

interface AppPreludeProps {
  layout?: ComponentType;
}

const AppPrelude: FC<AppPreludeProps> = ({ children, layout }) => {
  const Layout = layout || ApplicationLayout;
  return (
    <Layout>
      <ProtectedRoute>{children}</ProtectedRoute>
    </Layout>
  );
};

export default AppPrelude;
