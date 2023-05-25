import React from "react";
import "./App.css";
// import ProjectListScreen from "./screens/project-list";
// import { LoginScreen } from "./screens/login";
import { useAuth } from "./context/auth-context";
import { AuthenticatedApp } from "./authenticated-app";
import { UnauthenticatedApp } from "./unauthenticated-app";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      {/*<LoginScreen />*/}
      {/*<ProjectListScreen />*/}
      {/*  switch between based on user is valid*/}
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
