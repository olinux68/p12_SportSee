
// Définition de la classe LineChartClass
class LineChartClass {
  // Constructeur de la classe qui prend en argument les données à utiliser
  constructor(data) {
    // Stockage de l'ID de l'utilisateur dans la propriété id de l'instance
    this.id = data.userId;
    // Transformation des données de sessions en utilisant la méthode transformData
    // et stockage du résultat dans la propriété transformedData de l'instance
    this.transformedData = this.transformData(data.sessions);
  }

  // Méthode pour transformer les données de sessions
  transformData(sessions) {
    // Initialisation d'un tableau vide pour stocker les données transformées
    const transformedData = [];

    // Parcours de chaque session
    sessions.forEach((session) => {
      // Recherche d'une entrée dans les données transformées qui a le même jour que la session actuelle
      const dayData = transformedData.find(
        (entry) => entry.day === session.day
      );

      // Si une telle entrée est trouvée, la longueur de la session est ajoutée à cette entrée sous l'ID de l'utilisateur
      if (dayData) {
        dayData[this.id] = session.sessionLength;
      } else {
        // Si aucune entrée n'est trouvée, une nouvelle entrée est créée avec le jour et la longueur de la session
        transformedData.push({
          day: session.day,
          [this.id]: session.sessionLength,
        });
      }
    });
    // Les données transformées sont triées par jour et renvoyées
    return transformedData.sort((a, b) => a.day - b.day);
  }
}

// Exportation de la classe LineChartClass pour qu'elle puisse être utilisée dans d'autres fichiers
export default LineChartClass;