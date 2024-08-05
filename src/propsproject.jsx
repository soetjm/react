import propsType from 'prop-types';
import rightArrow from './images/right.png';
function Box(props){
        return(
    
            <div>
                    <div className="box" style={{width: "450px"}}>
                    <div className="box-header">
                        <img src={props.image} alt="" srcSet=""/>
                        <h2>{props.type}</h2>
                    </div>
                    <p id="box-text">{props.text}</p>
                    <div className="box-footer">
                        <h2>{props.number}</h2>
                        <div><span><p className="explor">Explore More </p><img style={{width: "25px"}} src={rightArrow} alt="" srcSet=""/></span></div>
                    </div>
                </div>
            </div>
        )
}

Box.propsType = {
    image:propsType.string,
    type:propsType.string,
    text:propsType.string,
    number:propsType.string
}



export default Box