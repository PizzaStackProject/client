import { useGetMenuQuery } from "@app/core/types"
import { MenuList } from "../components/menu-list/menu-list.component";

export const MenuPage = () => {

    const {data, loading, error} = useGetMenuQuery();

    if (error) {
        return <h1>Oops! There's error</h1>
    }

    if (loading && !data) 
        return <h1>Loading...</h1>

    if (!data) {
        return <h1>Empty menu</h1>
    }

    return(
        <MenuList items={data?.menu}/>
    )
}