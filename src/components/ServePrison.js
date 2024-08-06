import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import save from "../media/ezgif-2-e5a6f8f93a.gif";
import coin from "../media/coin.jpeg";
import karma from "../media/karma.png";
import jail from "../media/jail.png";
import inventory from "../media/inventory.jpeg";
import alcohol from "../media/inventory/alcohol.png";
import bread from "../media/inventory/bread.png";
import sweets from "../media/inventory/sweets.png";
import canofmeat from "../media/inventory/canofmeat.jpeg";
import canoffish from "../media/inventory/canoffish.png";
import gun from "../media/inventory/gun.png"
import ganja from "../media/inventory/ganja.png";
import meth from "../media/inventory/crystal.png";
import tea from "../media/inventory/tea.png";
import medicine from "../media/inventory/medicine.png";
import paracetemol from "../media/inventory/paracetemol.png";
import moonshine from "../media/inventory/moonshine.jpeg";
import vodka from "../media/inventory/vodka.jpeg";
import whiskey from "../media/inventory/whiskey.jpeg";
import cocaine from "../media/inventory/cocaine.png";
import smokes from "../media/inventory/smokes.png";
import hotmz from "../media/inventory/hotmagazine.png";
import strongalcohol from "../media/inventory/alcohol2.jpeg"
import { Modal } from "antd";

function ServePrison() {
  const { id } = useParams();
  const [isInventoryModalVisible, setIsInventoryModalVisible] = useState(false);

  const location = useLocation();
  const { profile, resources } = location.state || {
    profile: null,
    resources: null,
  };

  const handleInventoryClick = () => {
    setIsInventoryModalVisible(true);
  };

  const inventoryItems = [
    { id: 1, name: "Alcohol" },
    { id: 2, name: "Bread" },
    { id: 3, name: "Sweets" },
    { id: 4, name: "Can of Meat" },
    { id: 5, name: "Can of Fish" },
    { id: 6, name: "Gun" },
    { id: 7, name: "Ganja" },
    { id: 8, name: "Meth" },
    { id: 9, name: "Tea" },
    { id: 10, name: "Medicine" },
    { id: 11, name: "Paracetemol" },
    { id: 12, name: "Moonshine" },
    { id: 13, name: "Vodka" },
    { id: 14, name: "Whiskey" },
    { id: 15, name: "Cocaine" },
    { id: 17, name: "Smokes" },
    { id: 18, name: "Hot Magazine" },
    { id: 19, name: "Strong Alcohol" },
  ];

  return (
    <div style={{ backgroundColor: "black", color: "white", height: "100vh" }}>
      <div className="resources-list" style={{ display: "flex", gap: 20 }}>
        <h4 style={{ position: "relative", top: 6, margin: 0, padding: 0 }}>
          PRISONER - {id}.{profile.name}
        </h4>
        <div className="coin-rs" style={{ display: "flex", gap: 10 }}>
          <img src={coin} alt="coin" style={{ height: 30, width: 30 }} />{" "}
          <h4 style={{ position: "relative", top: 2, margin: 0, padding: 0 }}>
            {resources.coins}
          </h4>
        </div>
        <div className="karma-rs" style={{ display: "flex", gap: 10 }}>
          <img src={karma} alt="karma" style={{ height: 30, width: 30 }} />{" "}
          <h4 style={{ position: "relative", top: 2, margin: 0, padding: 0 }}>
            {resources.karma}
          </h4>
        </div>
        <div className="jail-rs" style={{ display: "flex", gap: 10 }}>
          <img src={jail} alt="jail" style={{ height: 30, width: 30 }} />{" "}
          <h4 style={{ position: "relative", top: 2, margin: 0, padding: 0 }}>
            {resources.jailTime} years
          </h4>
        </div>
        <div className="inventory-rs" style={{ display: "flex", gap: 10 }}>
          <img
            src={inventory}
            alt="inventory"
            style={{ height: 30, width: 30, cursor: "pointer" }}
            onClick={handleInventoryClick}
          />{" "}
        </div>
      </div>

      {profile && resources ? (
        <div>
          <div>
            <p>Inventory: {resources.inventory}</p>
            <p>Stash: {resources.stash}</p>
            <div className="save" style={{ display: "flex", gap: 3 }}>
              <img src={save} alt="save" style={{ height: 50, width: 50 }} />{" "}
              <h3 style={{ position: "relative", top: -7 }}>Saving..</h3>
            </div>
          </div>
          <Modal
            title="Inventory"
            visible={isInventoryModalVisible}
            onOk={() => setIsInventoryModalVisible(false)}
            onCancel={() => setIsInventoryModalVisible(false)}
            bodyStyle={{ maxHeight: "400px", overflowY: "auto" }}
          >
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {inventoryItems.map((item) => (
                <div
                  key={item.id}
                  style={{
                    flex: "1 1 calc(50% - 10px)",
                    boxSizing: "border-box",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                >
                  {item.name === "Alcohol" && (
                    <img
                      src={alcohol}
                      alt="alcohol"
                      style={{ width: "30px", height: "30px" }}
                    />
                  )}
                  {item.name === "Bread" && (
                    <img
                      src={bread}
                      alt="bread"
                      style={{ width: "30px", height: "30px" }}
                    />
                  )}
                  {item.name === "Sweets" && (
                    <img
                      src={sweets}
                      alt="sweets"
                      style={{ width: "30px", height: "30px" }}
                    />
                  )}
                  {item.name === "Can of Meat" && (
                    <img
                      src={canofmeat}
                      alt="canofmeat"
                      style={{ width: "30px", height: "30px" }}
                    />
                  )}
                  {item.name === "Can of Fish" && (
                    <img
                      src={canoffish}
                      alt="canoffish"
                      style={{ width: "30px", height: "30px" }}
                    />
                  )}
                  {item.name === "Gun" && (
                    <img
                      src={gun}
                      alt="gun"
                      style={{ width: "30px", height: "30px" }}
                    />
                  )}
                  {item.name === "Ganja" && (
                    <img
                      src={ganja}
                      alt="ganja"
                      style={{ width: "30px", height: "30px" }}
                    />
                  )}
                  {item.name === "Meth" && (
                    <img
                      src={meth}
                      alt="meth"
                      style={{ width: "30px", height: "30px" }}
                    />
                  )}
                  {item.name === "Tea" && (
                    <img
                      src={tea}
                      alt="tea"
                      style={{ width: "30px", height: "30px" }}
                    />
                  )}
                  {item.name === "Medicine" && (
                    <img
                      src={medicine}
                      alt="medicine"
                      style={{ width: "30px", height: "30px" }}
                    />
                  )}
                  {item.name === "Paracetemol" && (
                    <img
                      src={paracetemol}
                      alt="paracetemol"
                      style={{ width: "30px", height: "30px" }}
                    />
                  )}
                  {item.name === "Moonshine" && (
                    <img
                      src={moonshine}
                      alt="moonshine"
                      style={{ width: "30px", height: "30px" }}
                    />
                  )}
                  {item.name === "Vodka" && (
                    <img
                      src={vodka}
                      alt="vodka"
                      style={{ width: "30px", height: "30px" }}
                    />
                  )}
                  {item.name === "Whiskey" && (
                    <img
                      src={whiskey}
                      alt="whiskey"
                      style={{ width: "30px", height: "30px" }}
                    />
                  )}
                  {item.name === "Cocaine" && (
                    <img
                      src={cocaine}
                      alt="cocaine"
                      style={{ width: "30px", height: "30px" }}
                    />
                  )}
                  {item.name === "Smokes" && (
                    <img
                      src={smokes}
                      alt="smokes"
                      style={{ width: "30px", height: "30px" }}
                    />
                  )}
                  {item.name === "Hot Magazine" && (
                    <img
                      src={hotmz}
                      alt="hotmz"
                      style={{ width: "30px", height: "30px" }}
                    />
                  )}
                  {item.name === "Strong Alcohol" && (
                    <img
                      src={strongalcohol}
                      alt="Strong Alcohol"
                      style={{ width: "30px", height: "30px" }}
                    />
                  )}
                  <span style={{ position: "relative", top: -6 }}>
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </Modal>
        </div>
      ) : (
        <p>No profile or resource data available.</p>
      )}
    </div>
  );
}

export default ServePrison;
