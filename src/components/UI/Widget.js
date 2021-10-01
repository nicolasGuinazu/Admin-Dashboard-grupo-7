import classes from './Menu.module.css'


export default function Widget({title,ammount,icon,clicks}) {
    
    let showLogic=()=>{
        console.log('no soy un genero')
    }
    if(title == 'genres'){
        showLogic=clicks
    }
    return (
            <div className={classes.subcontainer} onClick={showLogic}>
                <div className={classes.widget}>
                <p>{title}</p>
                <p>{ammount}</p>
                <i className={`fas fa-${icon}`} ></i>
                </div>
               
                
            </div>

    )
}
