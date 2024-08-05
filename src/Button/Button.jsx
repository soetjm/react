import style from "./Button.module.css"
//this is module form of styleing our component it gives as dynamic styling

function Buttton(){

    return(
        <button className={style.Button}>Clik me</button>
    )
}

export default Buttton