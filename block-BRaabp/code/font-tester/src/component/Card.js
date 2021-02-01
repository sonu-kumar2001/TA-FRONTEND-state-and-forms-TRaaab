import data from "../data.json"

function Card(props) {
     return (
        <div className="font-card flex">
            {
                data.map((fontDetails,i)=> {
                   return <div key={i} className="inner-card">
                        <div className="flex">
                            <h3>{fontDetails["font-name"]}</h3>
                            <h3>Styles {fontDetails.styles}</h3>
                        </div>
                        <p className= "created-by">{fontDetails["created-by"]}</p>
                        <p className="font" style= {{fontSize:props.size+'px', fontFamily: fontDetails["font-name"]}}> {props.font}</p>
                    </div>
                })
            }
        </div>
    )
}

export default Card;