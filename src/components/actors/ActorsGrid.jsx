import ActorCard from "./ActorCard";
import { FlexGrid } from "../common/FlexGrid";

const ActorsGrid = ({actors}) =>{
    return (
        <FlexGrid>
            {actors.map(data => (
                <ActorCard
                key ={data.person.id} 
                country ={data.person.country ? data.person.country.name : null}
                name = {data.person.name} 
                image ={data.person.image ? data.person.image.medium : '/not found.jpeg'}
                birthday= {data.person.birthday}
                deathday={data.person.deathday}
                gender={data.person.gender}
                />
            ))}
             </FlexGrid>
    )
}

export default ActorsGrid;