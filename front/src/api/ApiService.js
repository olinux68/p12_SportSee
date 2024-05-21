// Importation des données simulées et des paramètres de l'API
import { dataMocked } from "./ApiSetting";
import {
  USER_ACTIVITY,
  USER_PERFORMANCE,
  USER_AVERAGE_SESSIONS,
} from "../mockedData";
import { USER_MAIN_DATA } from "../mockedData";

// Définition de l'objet ApiService
const ApiService = {
  // Méthode pour obtenir les données d'un utilisateur
  getUser: async (userId) => {
    // Si les données sont simulées
    if (dataMocked) {
      // Recherche des données de l'utilisateur dans les données simulées
      const userData = USER_MAIN_DATA.find(
        (item) => item.id === parseInt(userId)
      );
      // Retour des données trouvées
      return { data: userData };
    } else {
      // Si les données ne sont pas simulées
      try {
        // Tentative de récupération des données de l'utilisateur depuis le serveur
        const response = await fetch(`http://localhost:3000/user/${userId}`);
        // Si la réponse est OK
        if (response.ok) {
          // Conversion de la réponse en JSON et retour des données
          const data = await response.json();
          return data;
        } else {
          // Si la réponse n'est pas OK, affichage d'une erreur et lancement d'une exception
          console.error(`Status code: ${response.status}`);
          throw new Error("Serveur inaccessible");
        }
      } catch (error) {
        // Si une erreur se produit, affichage de l'erreur et lancement d'une exception
        console.error(error);
        throw new Error("Serveur inaccessible");
      }
    }
  },

  // Méthode pour obtenir l'activité d'un utilisateur
  getUserActivity: async (userId) => {
    // Si les données sont simulées
    if (dataMocked) {
      // Recherche de l'activité de l'utilisateur dans les données simulées
      const userActivity = USER_ACTIVITY.find(
        (item) => item.userId === parseInt(userId)
      );
      // Retour de l'activité trouvée
      return { data: userActivity };
    } else {
      // Si les données ne sont pas simulées
      try {
        // Tentative de récupération de l'activité de l'utilisateur depuis le serveur
        const response = await fetch(
          `http://localhost:3000/user/${userId}/activity`
        );
        // Si la réponse est OK
        if (response.ok) {
          // Conversion de la réponse en JSON et retour des données
          const data = await response.json();
          return data;
        } else {
          // Si la réponse n'est pas OK, affichage d'une erreur et lancement d'une exception
          console.error(`Status code: ${response.status}`);
          throw new Error("Serveur inaccessible");
        }
      } catch (error) {
        // Si une erreur se produit, affichage de l'erreur et lancement d'une exception
        console.error(error);
        throw new Error("Serveur inaccessible");
      }
    }
  },

  // Méthode pour obtenir les sessions moyennes d'un utilisateur
  getUserAverageSessions: async (userId) => {
    // Si les données sont simulées
    if (dataMocked) {
      // Recherche des sessions moyennes de l'utilisateur dans les données simulées
      const userAverageSessions = USER_AVERAGE_SESSIONS.find(
        (item) => item.userId === parseInt(userId)
      );
      // Retour des sessions moyennes trouvées
      return { data: userAverageSessions };
    } else {
      // Si les données ne sont pas simulées
      try {
        // Tentative de récupération des sessions moyennes de l'utilisateur depuis le serveur
        const response = await fetch(
          `http://localhost:3000/user/${userId}/average-sessions`
        );
        // Si la réponse est OK
        if (response.ok) {
          // Conversion de la réponse en JSON et retour des données
          const data = await response.json();
          return data;
        } else {
          // Si la réponse n'est pas OK, affichage d'une erreur et lancement d'une exception
          console.error(`Status code: ${response.status}`);
          throw new Error("Serveur inaccessible");
        }
      } catch (error) {
        // Si une erreur se produit, affichage de l'erreur et lancement d'une exception
        console.error(error);
        throw new Error("Serveur inaccessible");
      }
    }
  },

  // Méthode pour obtenir les performances d'un utilisateur
  getUserPerformance: async (userId) => {
    // Si les données sont simulées
    if (dataMocked) {
      // Recherche des performances de l'utilisateur dans les données simulées
      const userPerformance = USER_PERFORMANCE.find(
        (item) => item.userId === parseInt(userId)
      );
      // Retour des performances trouvées
      return { data: userPerformance };
    } else {
      // Si les données ne sont pas simulées
      try {
        // Tentative de récupération des performances de l'utilisateur depuis le serveur
        const response = await fetch(
          `http://localhost:3000/user/${userId}/performance`
        );
        // Si la réponse est OK
        if (response.ok) {
          // Conversion de la réponse en JSON et retour des données
          const data = await response.json();
          return data;
        } else {
          // Si la réponse n'est pas OK, affichage d'une erreur et lancement d'une exception
          console.error(`Status code: ${response.status}`);
          throw new Error("Serveur inaccessible");
        }
      } catch (error) {
        // Si une erreur se produit, affichage de l'erreur et lancement d'une exception
        console.error(error);
        throw new Error("Serveur inaccessible");
      }
    }
  },
};

// Exportation de l'objet ApiService pour qu'il puisse être utilisé dans d'autres fichiers
export default ApiService;
