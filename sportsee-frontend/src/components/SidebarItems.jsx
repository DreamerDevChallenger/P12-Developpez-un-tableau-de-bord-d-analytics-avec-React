import { ReactComponent as Yoga } from "../assets/yoga.svg";
import { ReactComponent as Swimimg } from "../assets/swiming.svg";
import { ReactComponent as Bicycle } from "../assets/bicycle.svg";
import { ReactComponent as Dumbbell } from "../assets/dumbbell.svg";

function VerticalNavbar() {
  return (
    <nav>
      <ul>
        <li>
          <Yoga></Yoga>
        </li>
        <li>
          <Swimimg></Swimimg>
        </li>
        <li>
          <Bicycle></Bicycle>
        </li>
        <li>
          <Dumbbell></Dumbbell>
        </li>
      </ul>
    </nav>
  );
}

export default VerticalNavbar;
