import {cakes as cakeData} from "./Cake.data";
import React, {useState} from "react";
import CakeItem from './CakeItem'
import styles from './HomePage.module.css'
import AddCakeForm from "./AddCakeForm";
const Home = () => {
    const [cars,setCake] = useState(cakeData)

    return (
        <>
            <h1>Cake catalog</h1>
            <AddCakeForm  setCake={setCake}/>
            <div className={styles.main}>
                {cars.length? (cars.map(cake => <CakeItem key = {cake.id} cake={cake}/>
                ))
                : <p>there are no cakes</p>
                }
            </div>


        </>
    )
}

export default Home