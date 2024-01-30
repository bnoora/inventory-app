import { Link } from 'react-router-dom';

export default function ItemDiv(props) {
    const { item, category } = props;


    return (
        <div className="ItemDiv">
            {category ? (
                <Link to={`/categories/${item._id}`}>
                    <h2>{item.name}</h2>
                </Link>
            ) : (
                <Link to={`/products/${item._id}`}>
                    <h2>{item.name}</h2>
                </Link>
            )}
        </div>
    )   
}