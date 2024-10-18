import { useSelector } from "react-redux"

const Footer = () => {

    const system = useSelector(state => state.system)
    const menus = system.menus
    const menu_footer = menus?.find(menu => menu.position === 'footer') ?? []

    return (
        <div>Foooter</div>
    )
}

export default Footer