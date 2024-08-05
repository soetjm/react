import propsType from 'prop-types';

function Box(props){
        return(
            <div>
            <div className="box" style={{marginRight:"40px"}}>
                <img src={props.image} alt="" srcset="" width="96px" height="96px"/>
                <h1>{props.text1}</h1>
                <p>{props.text2}</p>
                <p>{props.text3}</p>
            </div>
            </div>
        )
}

Box.propsType = {
    image:propsType.string,
    text1:propsType.string,
    text2:propsType.string,
    text1:propsType.string,
}



export default Box