import { Link } from "react-router-dom";
import { Bogota1 } from "./Bogota1";
import { Bogota2 } from "./Bogota2";
import { Bogota3 } from "./Bogota3";
import { Bogota4 } from "./Bogota4";
import { Bogota5 } from "./Bogota5";
import { Bogota6 } from "./Bogota6";


export const Navigation = () => {
  return (
    <div>
        <Link to="/bogota1">
            <figure>
                <Bogota1 />
                <figcaption>Bogotá 1</figcaption>
            </figure>
        </Link>
        <Link to="/bogota2">
            <figure>
                <Bogota2 />
                <figcaption>Bogotá 2</figcaption>
            </figure>
        </Link>
        <Link to="/bogota3">
            <figure>
                <Bogota3 />
                <figcaption>Bogotá 3</figcaption>
            </figure>
        </Link>
        <Link to="/bogota4">
            <figure>
                <Bogota4 />
                <figcaption>Bogotá 4</figcaption>
            </figure>
        </Link>
        <Link to="/bogota5">
            <figure>
                <Bogota5 />
                <figcaption>Bogotá 5</figcaption>
            </figure>
        </Link>
        <Link to="/bogota6">
            <figure>
                <Bogota6 />
                <figcaption>Bogotá 6</figcaption>
            </figure>
        </Link>
    </div>
  )
}
