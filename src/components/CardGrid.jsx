import React from "react";
import CardMap from './CardMap'; // Correct casing to match the file name
import './CardGrid.css';
import CardMapData from './CardMapData';



const CardGrid=()=>{
    return (
        <div className="card-grid">
            {CardMapData.map((map)=>
            <CardMap
                key={map.id}
                image={map.image}
                mode={map.mode}
                mapName={map.mapName}
            />
            )}
        </div>
    );
};

export default CardGrid;