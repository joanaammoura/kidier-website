import React from "react";
import "./PartnersList.css";
import Partner from "./Partner";

function PartnersList() {
  return (
    <div className="partnersList">
      <Partner
        image={
          "https://estrelaseouricos.sapo.pt//backoffice/images/image_11142_1_1432900089.jpeg"
        }
        name="Vertigo"
        address="Edifício Beira Rio, Av. Infante Dom Henrique Fração S, 1950-408 Lisboa"
        ages="2 anos–18 anos"
        fav={true}
      />
      <Partner
        image={
          "https://estrelaseouricos.sapo.pt//backoffice/images/image_11142_1_1432900089.jpeg"
        }
        name="Vertigo"
        address="Edifício Beira Rio, Av. Infante Dom Henrique Fração S, 1950-408 Lisboa"
        ages="2 anos–18 anos"
        fav={true}
      />
      <Partner
        image={
          "https://estrelaseouricos.sapo.pt//backoffice/images/image_11142_1_1432900089.jpeg"
        }
        name="Vertigo"
        address="Edifício Beira Rio, Av. Infante Dom Henrique Fração S, 1950-408 Lisboa"
        ages="2 anos–18 anos"
        fav={true}
      />
    </div>
  );
}

export default PartnersList;
