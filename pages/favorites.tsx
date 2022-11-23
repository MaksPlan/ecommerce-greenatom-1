import { useAppSelector } from "../store/rootReducer"

export default function Favorites(): JSX.Element {
    const favorietItemsList = useAppSelector(state => state.favoriets.favoriets)

    return (
        <>
        <h2>Список избранных товаров</h2>
        <ul>
           { favorietItemsList.map((item) => {
                return <li key={item.id+item.title}>
                    {item.title}
                </li>
            })}
        </ul>
            
        </>
    )
}