import classes from "../AdminTools/Card.module.css";

function Card({ image, title, clicked ,idval}) {
  return (
    <div className={classes.subcontainer}>
      <div className={classes.flex}>
        <img className={classes.photo} src={image} alt="book" />
      </div>
      <div className={classes.flex}>
        <p>{title}</p>
      </div>
      <div className={classes.flex}>
        <i
          className="fas fa-trash"
          onClick={() => {
            const confirmBox = window.confirm(
              "Do you really want to delete this book?"
            );
            if (confirmBox) {
              clicked();
            }
          }}
        ></i>
        <a href={`http://localhost:3000/products/modify/${idval}`} target="_blank"><i className="fas fa-edit"></i></a>
      </div>
    </div>
  );
}

export default Card;
