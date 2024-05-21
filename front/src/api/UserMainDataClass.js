// Définition de la classe User
class User {
  // Constructeur de la classe qui prend en argument les données de l'utilisateur
  constructor(data) {
    // Stockage de l'ID de l'utilisateur dans la propriété id de l'instance
    this.id = data.id;
    // Stockage du prénom de l'utilisateur dans la propriété firstName de l'instance
    this.firstName = data.userInfos.firstName;
    // Stockage du score du jour de l'utilisateur dans la propriété todayScore de l'instance
    // Si todayScore n'est pas défini dans les données, score est utilisé à la place
    this.todayScore = data.todayScore || data.score;
    // Stockage des données clés de l'utilisateur dans la propriété keyData de l'instance
    // Les données clés incluent le nombre de calories, de protéines, de glucides et de lipides
    this.keyData = {
      calorieCount: data.keyData.calorieCount,
      proteinCount: data.keyData.proteinCount,
      carbohydrateCount: data.keyData.carbohydrateCount,
      lipidCount: data.keyData.lipidCount,
    };
  }
}

// Exportation de la classe User pour qu'elle puisse être utilisée dans d'autres fichiers
export default User;