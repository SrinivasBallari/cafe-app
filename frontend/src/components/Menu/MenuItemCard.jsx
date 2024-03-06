
const MenuItemCard = (props) => {
    return (
        <div>
            <div>
            <img src={props.image} alt="loading" />
            </div>
            <div>
                <p>{props.name}</p>
                
            </div>
        </div>
    )
}

export default MenuItemCard;