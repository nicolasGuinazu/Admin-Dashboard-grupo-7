import classes from '../AdminTools/Last.module.css'

function Last({title,data}) {
    return (
        <>
       
      <div className={classes.subcontainer}>
          <div className={classes.title}>
          <h1>Last {title} created</h1>
          </div>
          <div className={classes.flex}>
          <img className={classes.photo} src={data[0].image} alt='book'/>
          </div>
          {data[0].title}
         
      </div>
      
      </>
    );
  }
  
  export default Last;