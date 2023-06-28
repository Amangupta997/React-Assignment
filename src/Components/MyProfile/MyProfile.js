import React from "react";
import contactList from "../../contactList";
import Card from "../Card/Card";
import Header from "../Header/Header";

const MyProfile = () => {
  return (
    <>
      <Header />
      {contactList && (
        <Card
          id={contactList[0].id}
          name={contactList[0].name}
          img={contactList[0].imgURL}
          tel={contactList[0].phone}
          email={contactList[0].email}
        />
      )}
    </>
  );
};

export default MyProfile;
