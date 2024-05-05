import { Suspense, lazy } from "react";
import Loader from "./components/Loader/Loader.jsx";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";

const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const LoginPage = lazy(() => import("./pages/LoginPage.jsx"));
const ContactsPage = lazy(() => import("./pages/ContactsPage.jsx"));
const RegistrationForm = lazy(() => import("./pages/RegistrationForm.jsx"));

function App() {
  return (
    <>
      <div>
        <Layout>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/register" element={<RegistrationForm />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/contacts" element={<ContactsPage />} />
            </Routes>
          </Suspense>
        </Layout>
      </div>
    </>
  );
}

export default App;
