import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  //const style = { color: "red", fontsize: "48px", textTransform: "uppercase" };
  const style = {};
  return (
    <header className="header footer">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  //const pizzas = [];
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        // {/*using react fragments*/}
        <>
          <p>
            Welcome to this pizza hotel you canm order eat from the comfort of
            our seats and get priviledges
          </p>
          <ul className="pizzas">
            {pizzas.map((food) => (
              <Pizza pizzaObj={food} />
            ))}
          </ul>
        </>
      ) : null}

      {/* <Pizza
        name="Pizza Spinaci'"
        ingredient="Tomato, mozarella, spinach, and ricotta cheese"
        price={12}
        photoName="pizzas/spinaci.jpg"
      />
      <Pizza
        name="Pizza Funghi"
        price={12}
        ingredient="Tomato, mozarella, mushrooms, and onion"
        photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  //console.log(PROPS);
  return (
    <li className={`pizza $(pizzaObj.soldOut ? "Sold-Out": "")`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>

        <p>{pizzaObj.ingredients}</p>

        {/*{pizzaObj.soldOut ? (
          <span>sold out</span>
        ) : (
          <span>{pizzaObj.price}</span>
        )}*/}

        {/*more prefrable use the second statement*/}

        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price + 400}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours;
  const openHour = 6;
  const closeHour = 20;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  if (!isOpen)
    return (
      <p>
        You are welcome between {openHour}:00 & {closeHour}:00
      </p>
    );
  //if (hour >= openHour && hour <= closeHour)alert("We are currently open!");
  //else alert("We are currently closed!");
  return (
    <footer className="footer">
      {/* {new Date().toLocaleTimeString()}. We are currently open. */}

      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>We are closed {closeHour}:00</p>
      )}
    </footer>
  );
  //return React.createElement("footer", null, "We are currently open");
}

function Order(openHour, closeHour) {
  return (
    <div className="footer">
      <p>
        You are welcome between {openHour}:00 & {closeHour}:00
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

//when the component becomes too lon
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
