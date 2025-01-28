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

function Card(props) {
  const {tittleText, cartDes}= props; // This is called props destructuring 
  return (
    <>
      <div className="card">
        <h3 className="cardTitle">{tittleText}</h3>
        <p className="cardDescription">
          {cartDes}
        </p>
        <p className="cardFooter">{dateName + "/" + monthName + "/" + Year}</p>
      </div>
    </>
  );
}

export default Card;
