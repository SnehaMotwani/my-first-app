import './vehicle.css'

const vehicle = props => (
    <div className='car col-lg-3'>
        <h1>
            Vehicle: {props.VehicleType}
        </h1>
        <p>Name: {props.Name}</p>
        <p>Manufacturer:{props.Manufacturer}</p>
        <p>Fuel: {props.FuelType}</p>
    </div>
);

export default vehicle;