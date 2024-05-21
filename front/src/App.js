// Importation des dépendances nécessaires
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/dashbord/DashboardUser";
import Home from "./pages/home/Home";
import NotFoundPage from "./pages/Error/NotFoundPage";

// Définition des routes de l'application
const routes = [
  // Route pour la page d'accueil
  { path: "/home", element: <Home /> },
  // Route par défaut qui redirige vers la page d'accueil
  { path: "/", element: <Navigate to="/home" /> },
  // Route pour le tableau de bord de l'utilisateur, avec un paramètre d'URL pour l'ID de l'utilisateur
  { path: "/home/dashboard/:userId", element: <Dashboard /> },
  // Route pour gérer les URL non reconnues, redirige vers une page d'erreur 404
  { path: "*", element: <NotFoundPage /> }
];

// Composant principal de l'application
const App = () => {
  return (
    // Utilisation de BrowserRouter pour gérer le routage de l'application
    <BrowserRouter>
      <Routes>
        {/* 
          Mappage de chaque route définie dans le tableau de routes à un composant Route.
          Chaque Route reçoit une clé unique (l'index du tableau), un chemin et un élément (le composant à rendre pour ce chemin).
        */}
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

// Exportation du composant App pour être utilisé dans d'autres parties de l'application
export default App;