// Importation des dépendances nécessaires
import React, { useReducer, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import ApiService from "../../api/ApiService";
// Importation des composants
import Header from "../../components/header/Header";
import VerticalNavBar from "../../components/sideNavBar/SideNavBar";
import BarChartUser from "../../components/barChartUser/BarChartUser";
import LineChartUser from "../../components/lineChartUser/LineChartUser";
import RadarChartUser from "../../components/radarChartUser/RadarChartUser";
import RadialBarChartUser from "../../components/radialBarChartUser/RadialBarChartUser ";
import UserName from "../../components/greeting/Greetings";
import UserMainData from "../../components/useMain/UserMainData";
// Importation des classes
import User from "../../api/UserMainDataClass";
import BarChartClass from "../../api/BarChartClass";
import UserPerformance from "../../api/RadarChartClass";
import LineChartClass from "../../api/LineChartClass";
import Loader from "../../components/loader/Loader";

// Initialisation de l'état initial
const initialState = {
  userName: null,
  userActivity: null,
  userScore: null,
  userData: null,
  userPerformance: null,
  transformedData: null,
  isDataLoaded: false,
  redirectToErrorPage: false,
  isLoading: true,
};

// Définition du reducer
function reducer(state, action) {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        ...action.payload,
        isDataLoaded: true,
        isLoading: false,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        redirectToErrorPage: true,
        isLoading: false,
      };
    default:
      throw new Error();
  }
}

// Définition du composant Dashboard
const Dashboard = () => {
  // Récupération de l'ID de l'utilisateur à partir des paramètres de l'URL
  const { userId } = useParams();
  // Utilisation du useReducer pour gérer l'état du composant
  const [state, dispatch] = useReducer(reducer, initialState);

  // Utilisation de useEffect pour effectuer des opérations d'effet de bord
  useEffect(() => {
    // Définition de la fonction fetchData pour récupérer les données de l'utilisateur
    const fetchData = async () => {
      try {
        // Récupération des données de l'utilisateur à partir de l'API
        const [
          userData,
          userActivityData,
          performanceData,
          userAverageSessionsData,
        ] = await Promise.all([
          ApiService.getUser(userId),
          ApiService.getUserActivity(userId),
          ApiService.getUserPerformance(userId),
          ApiService.getUserAverageSessions(userId),
        ]);

        // Formatage des données récupérées
        const formattedUserName = new User(userData.data);
        const formattedUserActivity = new BarChartClass(userActivityData.data);
        const formattedUserScore = new User(userData.data);
        const formattedUser = new User(userData.data);
        const userPerformanceInstance = new UserPerformance(
          userId,
          performanceData.data.kind,
          performanceData.data.data
        );
        const formattedUserAverageSessions = new LineChartClass(
          userAverageSessionsData.data
        );
        const transformedData =
          formattedUserAverageSessions.transformedData.map((entry) => ({
            day: entry.day,
            [`User${userId}`]: entry[userId],
          }));

        // Dispatch de l'action FETCH_SUCCESS avec les données formatées en payload
        dispatch({
          type: "FETCH_SUCCESS",
          payload: {
            userName: formattedUserName,
            userActivity: formattedUserActivity,
            userScore: formattedUserScore,
            userData: formattedUser,
            userPerformance: userPerformanceInstance,
            transformedData: transformedData,
          },
        });
      } catch (error) {
        // Dispatch de l'action FETCH_ERROR en cas d'erreur
        dispatch({ type: "FETCH_ERROR" });
      }
    };

    // Appel de la fonction fetchData
    fetchData();
  }, [userId]); // Dépendance à userId pour éviter les appels infinis

  // Affichage du loader si les données sont en cours de chargement
  if (state.isLoading) {
    return <Loader />;
  }

  // Redirection vers la page d'erreur si une erreur s'est produite lors de la récupération des données
  if (state.redirectToErrorPage) {
    return <Navigate to="/notFoundPage" />;
  }

  // Rendu du composant Dashboard
  return (
    <div>
      <Header />
      <main>
        <VerticalNavBar />
        <section className="dashboard">
          <UserName userName={state.userName} />
          <section className="user_data">
            <div className="user_data--activity">
              <BarChartUser userActivity={state.userActivity} />
              <div className="user_performances">
                <LineChartUser
                  userId={parseInt(userId)}
                  transformedData={state.transformedData}
                />
                <RadarChartUser
                  userPerformance={state.userPerformance}
                  isDataLoaded={state.isDataLoaded}
                />
                <RadialBarChartUser userScore={state.userScore} />
              </div>
            </div>
            <UserMainData userData={state.userData} />
          </section>
        </section>
      </main>
    </div>
  );
};

// Exportation du composant
export default Dashboard;
