import React from "react";
import alcohol from "../media/inventory/alcohol.png";
import bread from "../media/inventory/bread.png";
import sweets from "../media/inventory/sweets.png";
import canofmeat from "../media/inventory/canofmeat.jpeg";
import canoffish from "../media/inventory/canoffish.png";
import gun from "../media/inventory/gun.png";
import ganja from "../media/inventory/ganja.png";
import meth from "../media/inventory/crystal.png";
import tea from "../media/inventory/tea.png";
import medicine from "../media/inventory/medicine.png";
import paracetemol from "../media/inventory/paracetemol.png";
import moonshine from "../media/inventory/moonshine.jpeg";
import vodka from "../media/inventory/vodka.png";
import whiskey from "../media/inventory/whiskey.jpeg";
import cocaine from "../media/inventory/cocaine.png";
import smokes from "../media/inventory/smokes.png";
import hotmz from "../media/inventory/hotmagazine.png";
import strongalcohol from "../media/inventory/alcohol2.jpeg";

const ItemImage = (props) => {
  const getItemImage = (name) => {
    switch (name) {
      case "Alcohol":
        return alcohol;
      case "Bread":
        return bread;
      case "Sweets":
        return sweets;
      case "Can of Meat":
        return canofmeat;
      case "Can of Fish":
        return canoffish;
      case "Gun":
        return gun;
      case "Ganja":
        return ganja;
      case "Meth":
        return meth;
      case "Tea":
        return tea;
      case "Medicine":
        return medicine;
      case "Paracetemol":
        return paracetemol;
      case "Moonshine":
        return moonshine;
      case "Vodka":
        return vodka;
      case "Whiskey":
        return whiskey;
      case "Cocaine":
        return cocaine;
      case "Smokes":
        return smokes;
      case "Hot Magazine":
        return hotmz;
      case "Strong Alcohol":
        return strongalcohol;
      default:
        return null;
    }
  };

  const itemImage = getItemImage(props.itemName);
  if (props.inv_view === true) {
    return itemImage ? (
      <img
        src={itemImage}
        alt={props.itemName}
        style={{ width: "50px", height: "50px" }}
      />
    ) : null;
  } else {
    return itemImage ? (
      <img
        src={itemImage}
        alt={props.itemName}
        style={{ width: "30px", height: "30px" }}
      />
    ) : null;
  }
};

export default ItemImage;
