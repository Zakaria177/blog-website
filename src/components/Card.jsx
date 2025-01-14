const todoTittle = "Call family";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const Year = date.getFullYear();

// adding style inside javascript using js
// const headingStyle = {
//   backgroundColor: "green",
//   textAlign: "center",
//   color: "white",
//   padding: "10 px",
// };

function Card() {
  return (
    <>
      <div className="card">
        <h3 className="cardTitle">{todoTittle}</h3>
        <p className="cardDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ipsum!
        </p>
        <p className="cardFooter">{dateName + "/" + monthName + "/" + Year}</p>
      </div>
    </>
  );
}

export default Card;
