function Menu(props) {
    console.log({props})
    return (
        <div className = "menu-section">
            {
                props.allData.map(menuData=> {
                    return (
                        <div key ={menuData.id} className="menu-data"> 
                            <img src={menuData.img} alt={menuData.title}/>
                            <div className = "flex">
                                <h3>{menuData.title}</h3>
                                <h3>{menuData.price}</h3>
                            </div>
                            <p>{menuData.desc}</p>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Menu;