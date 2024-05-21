// Définition de la classe UserPerformance
class UserPerformance {
  // Constructeur de la classe qui prend en argument l'ID de l'utilisateur, le type de performance et les données de performance
  constructor(userId, kind, performanceData) {
    // Stockage de l'ID de l'utilisateur dans la propriété userId de l'instance
    this.userId = userId;
    // Stockage du type de performance dans la propriété kind de l'instance
    this.kind = kind;
    // Transformation des données de performance en un format plus facile à utiliser pour créer un graphique radar
    // Chaque élément des données de performance est transformé en un objet avec une valeur et un type
    this.data = performanceData.map((item) => {
      return {
        value: item.value,
        kind: this.kind[item.kind],
      };
    });
  }
}

// Exportation de la classe UserPerformance pour qu'elle puisse être utilisée dans d'autres fichiers
export default UserPerformance;