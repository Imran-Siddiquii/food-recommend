import { useState } from "react";
import "./styles.css";

const fooddb = {
  NorthIndian: [
    {
      dish: "Chicken Dum Briyani",
      rating: "5/5"
    },
    {
      dish: "Butter Chicken",
      rating: "4/5"
    },
    {
      dish: "Rajma rice",
      rating: "4/5"
    },
    { dish: "Muttor Paneer", rating: "3.5/5" }
  ],
  SouthIndian: [
    {
      dish: "Idli sambar",
      rating: "4/5"
    },
    {
      dish: "Masala Soda",
      rating: "4.5/5"
    },
    {
      dish: "Chitrana",
      rating: "3.5/5"
    },
    { dish: "Poori Bhaji", rating: "3/5" }
  ],
  PunjabiFood: [
    {
      dish: "Cholo Bhature",
      rating: "4/5"
    },
    {
      dish: "Daal Tadka",
      rating: "3/5"
    },
    {
      dish: "Aloo Paratha",
      rating: "4/5"
    },
    { dish: "Chana Masala", rating: "4/5" }
  ]
};
const newfood = Object.keys(fooddb);

export default function App() {
  const [food, setfood] = useState("NorthIndian");

  var onClickHandler = (item) => {
    setfood(item);
  };
  return (
    <div className="App">
      <div
        style={{
          border: "1px solid lightgray",
          padding: "15px",
          borderRadius: "3px"
        }}
      >
        <h3>Recommneded Food by Imran</h3>
        <br />
        <p>
          I would like to recommend these food to you if you ever been in these
          state
        </p>
      </div>
      <div>
        {newfood.map((item) => (
          <button
            key={item}
            style={{
              padding: "8px",
              margin: "8px",
              fontSize: "1rem",
              backgroundColor: "orange",
              border: "none",
              borderRadius: "2px"
            }}
            onClick={() => onClickHandler(item)}
          >
            {item}
          </button>
        ))}
      </div>
      {fooddb[food].map((list) => (
        <li
          key={list.dish}
          style={{
            display: "inline-block",
            margin: "3px",
            padding: "8px",
            backgroundColor: "yellow",
            border: "1px solid lightgray"
          }}
        >
          <div style={{ color: "black", fontSize: "18px" }}>{list.dish}</div>

          <div>
            <small style={{ color: "" }}>Rating : {list.rating}</small>
          </div>
        </li>
      ))}
    </div>
  );
}
