export default function AppTitle(props) {

    const { 
        title = "Box Office",
         subtitle = "Are you looking for a movie or for an actor"
        } = props;
    return ( 
        <div>
        <h1>{title}</h1>
        <h1>{subtitle}</h1>
    </div>
    )
   
}