// import logo from './logo.svg';
import './App.css';
import Vehicle from './Vehicle/vehicle';

function App() {
  return (
    <div className="App">
      <Vehicle VehicleType="Car" Name="Altroz" Manufacturer="Tata" FuelType="Petrol" />
      <Vehicle VehicleType="Car" Name="Seltos" Manufacturer="Kia" FuelType="Diesel" />
    </div>
  );
}

export default App;
