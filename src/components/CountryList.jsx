import CountryItem from './CountryItem'
import styles from './CountryList.module.css'
import Spinner from "./Spinner"
import Message from "./Message"

export default function CountryList({countries, isLoading}) {

    if(isLoading){
        return <Spinner />
    }

    if(!countries.length ){
        return <Message message="Add your city by clicking on a city on the map"/>
    }
  return (
    <div>
        <ul className={styles.countryList}>
           {countries.map((country)=> <CountryItem country={country}  key ={country.id} />)}
        </ul>
    </div>
  )
}
