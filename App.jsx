import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <h1>Tablero de progreso plataforma educativa</h1>
      <div className="container">
        <Card
          title="Actividades por hacer"
          description="Actividades pendientes por iniciar"
        />
        <Card
          title="Actividad realizada"
          description="Actividades realizadas listas para pruebas"
        />
        <Card
          title="Test y pruebas"
          description="Actividades que se encuentran en pruebas y testing"
        />
        <Card
          title="Actividades Finalizadas"
          description="Cierre de actividades."
        />
      </div>
    </div>
  );
}
export default App;
