import React from "react";
import "./happyClients.scss";
import Profile from "../../assets/img/user.svg";

function happyClients() {
  const clients = [
    {
      profile: "../../assets/img/user.svg",
      name: "Rilindi",
      location: "Gjilan",
      comment:
        "Rilindi Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus deleniti quia ducimus aspernatur beatae possimus.",
    },
    {
      profile: "../../assets/img/user.svg",
      name: "Elidoni",
      location: "Gjilan",
      comment:
        "Elidoni Lorem, Delectus deleniti quia ducimus aspernatur beatae possimus.",
    },
    {
      profile: "../../assets/img/user.svg",
      name: "Ermali",
      location: "Gjilan",
      comment:
        "Ermali Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus deleniti quia ducimus aspernatur beatae possimus.",
    },
  ];
  return (
    <div className="container">
      <section className="happyClients">
        <h3 className="happyClients-title">Disa komente nga klientet tane</h3>
        {clients.map((e, i) => {
          return (
            <Client
              profile={e.profile}
              name={e.name}
              location={e.location}
              comment={e.comment}
              key={i}
            />
          );
        })}
      </section>
    </div>
  );
}

const Client = ({ profile, name, location, comment }) => {
  return (
    <section className="happyClients-client">
      <img src={Profile} alt="" />
      <h3>
        {name}, {location}
      </h3>
      <p>{comment}</p>
    </section>
  );
};

export default happyClients;
