import './menu.styles.scss'
import Category from "../category/category.component";

const Menu = ({ categories }) => {
    return (
        <div className="categories-container">
            { categories.map((category) => (
                <Category key={ category.id } category={ category }/>
            )) }
        </div>
    );
}
export default Menu;
