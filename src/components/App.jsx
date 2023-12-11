import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Friends Contacts</h1>
      <Card
        name={contacts[0].name}
        img={contacts[0].img}
        phone={contacts[0].phone}
        place={contacts[0].place}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].img}
        phone={contacts[1].phone}
        place={contacts[1].place}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].img}
        phone={contacts[2].phone}
        place={contacts[2].place}
      />
      <Card
        name={contacts[3].name}
        img={contacts[3].img}
        phone={contacts[3].phone}
        place={contacts[3].place}
      />
      <Card
        name={contacts[4].name}
        img={contacts[4].img}
        phone={contacts[4].phone}
        place={contacts[4].place}
      />
      <Card
        name={contacts[5].name}
        img={contacts[5].img}
        phone={contacts[5].phone}
        place={contacts[5].place}
      />
      <Card
        name={contacts[6].name}
        img={contacts[6].img}
        phone={contacts[6].phone}
        place={contacts[6].place}
      />
      <Card
        name={contacts[7].name}
        img={contacts[7].img}
        phone={contacts[7].phone}
        place={contacts[7].place}
      />
      <Card
        name={contacts[8].name}
        img={contacts[8].img}
        phone={contacts[8].phone}
        place={contacts[8].place}
      />
    </div>
  );
}

export default App;
