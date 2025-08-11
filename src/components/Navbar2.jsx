import { Link } from "react-router-dom";
import NavItem from "./data/NavItem";
import { useTheme } from "../context/ThemeProvider";

const Navbar2 = () => {
	const { theme, setTheme } = useTheme();

	function handleClick() {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	}

    console.log(theme)
    
	return (
		<div className={theme == "dark" ? "bg-black text-white flex justify-between items-center p-4" : "bg-white flex justify-between items-center p-4"}>
			<div>
				<img width={200} src="Daraz.png" alt="" />
			</div>
			<div>
				<ul className="flex gap-4">
					{NavItem.map((item, i) => {
						return (
							<li key={item.id}>
								<Link to={item.to}>
									<item.icon /> {item.title}
								</Link>
							</li>
						);
					})}
					<li>
						<button onClick={handleClick}>{theme}</button>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar2;
