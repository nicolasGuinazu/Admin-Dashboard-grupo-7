import classes from './Menu.module.css'
import Widget from './Widget'


export default function Menu({clicked,info,genre,user}) {
    let infoWidget=[
        {title:'products',ammount:info,icon:'book'},
        {title:'users',ammount:user,icon:'user'},
        {title:'genres',ammount:genre,icon:'cube'}
    ]

    return (
        <div className={classes.maincontainer} >
            {infoWidget.map((widget,id)=>(<Widget key={id} title={widget.title} ammount={widget.ammount} icon={widget.icon} clicks={clicked}/>))}
        </div>
    )
}
