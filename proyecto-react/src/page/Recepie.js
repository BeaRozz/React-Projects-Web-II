import { useParams } from "react-router-dom";

export default function Recepie() {

    const { id } = useParams();

    return (
        <div className="base">
            <h1>Recepie {id}</h1>
            <p>Recepie</p>
        </div>
    );
}