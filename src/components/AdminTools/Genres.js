import classes from './Genres.module.css'


export default function Genres({genreInfo}) {

    return (
        <div className={classes.container}>
            {genreInfo.map(el=><div className={classes.subcontainergenre}>{el.name} {el.count}</div>)}
        </div>
    )
}
