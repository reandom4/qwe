import styles from "./HomePage.module.css"
import {ICake} from "../../assets/types/cake.interface";
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../store/favorites/favorites.slise";


interface CarItemProps {
    cake: ICake;
}
function CakeItem({cake}:CarItemProps){
    //@ts-ignore
    const {favorites} = useSelector(state => state)
    console.log(favorites)
    const dispatch = useDispatch()
    const isExist = favorites.some((r: { id: number; }) => r.id === cake.id)
    return(
        <div key={cake.id} className={styles.item}>
            <div
                className={styles.image}
                style={{
                backgroundImage: `url(${cake.image})`
            }} />
            <div>
                <h2>{cake.name}</h2>
                <p>{new Intl.NumberFormat(
                    'ru-US',{
                        style: 'currency',
                        currency: 'RUB',
                    }).format(cake.price)}
                </p>
                <Link className={styles.btn} to={`/cake/${cake.id}`}>Read More</Link>
                <button  onClick={()=> dispatch(actions.toggleFavorites(cake))}>{isExist? 'Remove from': 'Add to'} favorites</button>
            </div>
        </div>
    )
}
export default CakeItem