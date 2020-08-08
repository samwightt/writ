import AppWrapper from "utils/AppWrapper";
import ProtectedRoute from "utils/ProtectedRoute";
import ApplicationLayout from "components/layouts/ApplicationLayout";
import Home from "views/app/Home";

export default function HomePage() {
  return (
    <AppWrapper>
      <ApplicationLayout>
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      </ApplicationLayout>
    </AppWrapper>
  );
}
