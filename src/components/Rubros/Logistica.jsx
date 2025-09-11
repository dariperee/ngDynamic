import { useEffect } from "react";

const Logistica = () =>{

    useEffect(() => {document.title = "Logística | NG Dynamic";}, []);

    return(<>
        <h2>Logística</h2>
        <p>Áreas de acción principales: Logística, transporte y distribución: Contamos con la capacidad operativa para el traslado 
        de mercaderías en todo el territorio nacional, incluyendo transporte pesado y servicios de guía de cargas especiales, 
        asegurando seguridad y cumplimiento normativo.</p>

        <p>Vehículos y maquinarias: Ofrecemos comercialización, alquiler y mantenimiento de equipos, vehículos y maquinarias de 
        distintos rubros, con soluciones orientadas a la industria, la construcción y el sector agroindustrial. </p>

        <p>Agropecuaria y exportación: Desarrollamos actividades de producción y comercialización de productos agropecuarios, con especialización en la 
        exportación de fardos y servicios de valor agregado en el sector. Actualmente contamos con 100 hectáreas en el Noroeste 
        del país donde cosechamos alfalfa con aproximadamente un 13% de humedad, la comercializamos en fardos de 40 Kg, 
        actualmente es posible cosechar unas 100 toneladas mensuales sumando un total de 11 cosechas al año.</p>
    </>)
}

export default Logistica