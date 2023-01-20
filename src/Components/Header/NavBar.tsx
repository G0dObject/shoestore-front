import "../../scss/Header/_import.scss";
import { Link } from "react-router-dom";

const NavBar = (props: NavBarProps) => {
	return (
		<div>
			<div className={props.className}>
				<div className="closebtn" onClick={props.onClick}>
					&times;
				</div>
				<Link to="/catalog/category/woman/">Женщинам</Link>
				<Link to="/catalog/category/men/">Мужчинам</Link>
				<Link to="/catalog/category/kids/">Детям</Link>
			</div>
		</div>
	);
};

export default NavBar;
