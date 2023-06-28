import React from "react";
import contactList from "../../contactList";
import Card from "../Card/Card";
import Header from "../Header/Header";

const FriendsList = () => {
  let friends = contactList;
  return (
    <>
      <Header />
      {friends
        .filter((friend) => parseInt(friend.id) !== 1)
        .map((friend) => (
          <Card
            id={friend.id}
            name={friend.name}
            img={friend.imgURL}
            tel={friend.phone}
            email={friend.email}
          />
        ))}
    </>
  );
};

export default FriendsList;
