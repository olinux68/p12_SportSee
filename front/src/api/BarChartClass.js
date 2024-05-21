
// Définition de la classe BarChartClass
class BarChartClass {
  // Constructeur de la classe qui prend en argument les données à utiliser
  constructor(data) {
    // Stockage de l'ID de l'utilisateur dans la propriété id de l'instance
    this.id = data.userId;
    // Stockage des sessions de l'utilisateur dans la propriété sessions de l'instance
    this.sessions = data.sessions;
    // Transformation des sessions en un tableau de jours en utilisant la méthode map
    // Si sessions est indéfini, un tableau vide est utilisé à la place
    this.days = this.sessions?.map((session) => session.day) || [];
    // Transformation des sessions en un tableau de kilogrammes en utilisant la méthode map
    // Si sessions est indéfini, un tableau vide est utilisé à la place
    this.kilos = this.sessions?.map((session) => session.kilogram) || [];
    // Transformation des sessions en un tableau de calories en utilisant la méthode map
    // Si sessions est indéfini, un tableau vide est utilisé à la place
    this.calories = this.sessions?.map((session) => session.calories) || [];
  }
}

// Exportation de la classe BarChartClass pour qu'elle puisse être utilisée dans d'autres fichiers
export default BarChartClass;