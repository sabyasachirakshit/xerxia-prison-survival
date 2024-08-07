import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import save from "../media/ezgif-2-e5a6f8f93a.gif";
import coin from "../media/coin.jpeg";
import karma from "../media/karma.png";
import jail from "../media/jail.png";
import stash from "../media/inventory/stash.png";
import { Button } from "@mui/material";
import inventory from "../media/inventory.jpeg";
import { Modal } from "antd";
import ItemImage from "./ItemImage"; // Import the new component

function ServePrison() {
  const { id } = useParams();
  const [isInventoryModalVisible, setIsInventoryModalVisible] = useState(false);
  const [isStashModalVisible, setIsStashModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedStashItem, setSelectedStashItem] = useState(null);
  const [isItemDetailModalVisible, setIsItemDetailModalVisible] =
    useState(false);
  const [isStashItemDetailModalVisible, setIsStashItemDetailModalVisible] =
    useState(false);

  const location = useLocation();
  const { profile, resources } = location.state || {
    profile: null,
    resources: null,
  };

  const handleInventoryClick = () => {
    setIsInventoryModalVisible(true);
  };

  const handleStashClick = () => {
    setIsStashModalVisible(true);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsItemDetailModalVisible(true);
  };

  const handleStashItemClick = (item) => {
    setSelectedStashItem(item);
    setIsStashItemDetailModalVisible(true);
  };

  const handleMoveToTrash = () => {
    // Handle the logic for moving the item to trash
    setIsItemDetailModalVisible(false);
  };

  const handleMoveToStash = () => {
    // Handle the logic for moving the item to stash
    setIsItemDetailModalVisible(false);
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

  const stashItems = [
    { id: 1, name: "Alcohol" },
    { id: 2, name: "Bread" },
    { id: 3, name: "Sweets" },
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
      </div>

      {profile && resources ? (
        <div>
          <div style={{ display: "flex", gap: 10, marginTop: 15,marginLeft:55 }}>
            <div className="inventory-rs" style={{ display: "flex", gap: 10 }}>
              <img
                src={inventory}
                alt="inventory"
                style={{ height: 50, width: 50, cursor: "pointer" }}
                onClick={handleInventoryClick}
              />
              Inventory
            </div>
            <div className="stash-rs" style={{ display: "flex", gap: 10 }}>
              <img
                src={stash}
                alt="stash"
                style={{ height: 50, width: 50, cursor: "pointer" }}
                onClick={handleStashClick}
              />
              Stash
            </div>
          </div>

          <div className="save" style={{ display: "flex", gap: 3 }}>
            <img src={save} alt="save" style={{ height: 50, width: 50 }} />{" "}
            <h3 style={{ position: "relative", top: -7 }}>Saving..</h3>
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
                    cursor: "pointer",
                  }}
                  onClick={() => handleItemClick(item)}
                >
                  <ItemImage itemName={item.name} />{" "}
                  {/* Use the new component */}
                  <span style={{ position: "relative", top: -6 }}>
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </Modal>
          <Modal
            visible={isItemDetailModalVisible}
            onOk={() => setIsItemDetailModalVisible(false)}
            onCancel={() => setIsItemDetailModalVisible(false)}
            bodyStyle={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            {selectedItem && (
              <div style={{ textAlign: "center" }}>
                <h2>{selectedItem.name}</h2>
                <ItemImage itemName={selectedItem.name} inv_view={true} />{" "}
                {/* Use the new component */}
                <p>{selectedItem.description}</p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 10,
                  }}
                >
                  <Button
                    onClick={handleMoveToTrash}
                    variant="contained"
                    color="error"
                  >
                    Move to Trash
                  </Button>
                  <Button
                    onClick={handleMoveToStash}
                    variant="contained"
                    color="success"
                  >
                    Move to Stash
                  </Button>
                </div>
              </div>
            )}
          </Modal>

          <Modal
            title="Stash"
            visible={isStashModalVisible}
            onOk={() => setIsStashModalVisible(false)}
            onCancel={() => setIsStashModalVisible(false)}
            bodyStyle={{ maxHeight: "400px", overflowY: "auto" }}
          >
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {stashItems.map((item) => (
                <div
                  key={item.id}
                  style={{
                    flex: "1 1 calc(50% - 10px)",
                    boxSizing: "border-box",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleStashItemClick(item)}
                >
                  <ItemImage itemName={item.name} />{" "}
                  {/* Use the new component */}
                  <span style={{ position: "relative", top: -6 }}>
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </Modal>

          <Modal
            visible={isStashItemDetailModalVisible}
            onOk={() => setIsStashItemDetailModalVisible(false)}
            onCancel={() => setIsStashItemDetailModalVisible(false)}
            bodyStyle={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            {selectedStashItem && (
              <div style={{ textAlign: "center" }}>
                <h2>{selectedStashItem.name}</h2>
                <ItemImage
                  itemName={selectedStashItem.name}
                  inv_view={true}
                />{" "}
                {/* Use the new component */}
                <p>{selectedStashItem.description}</p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 10,
                  }}
                >
                  <Button
                    onClick={handleMoveToTrash}
                    variant="contained"
                    color="error"
                  >
                    Move to Trash
                  </Button>
                  <Button
                    onClick={handleMoveToStash}
                    variant="contained"
                    color="success"
                  >
                    Move to Stash
                  </Button>
                </div>
              </div>
            )}
          </Modal>
        </div>
      ) : (
        <p>No profile or resource data available.</p>
      )}
    </div>
  );
}

export default ServePrison;
