import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import save from "../media/ezgif-2-e5a6f8f93a.gif";
import coin from "../media/coin.jpeg";
import karma from "../media/karma.png";
import jail from "../media/jail.png";
import stashImg from "../media/inventory/stash.png";
import market from "../media/market.png";
import blackmarket from "../media/blackmarket.png"
import { Button } from "@mui/material";
import inventoryImg from "../media/inventory.jpeg";
import { Modal } from "antd";
import ItemImage from "./ItemImage";
import EventLoader from "./EventLoader";

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

  const [marketVisible, setMarketVisible] = useState(false);
  const [blackMarketVisible, setBlackMarketVisible] = useState(false);
  const location = useLocation();
  const { profile, resources } = location.state || {
    profile: null,
    resources: null,
  };

  const [showEventModal,setShowEventModal] = useState(false);
  const [event, setEvent]=useState(null);

  const [inventoryItems, setInventoryItems] = useState([
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
    { id: 11, name: "Paracetamol" },
    { id: 12, name: "Moonshine" },
    { id: 13, name: "Vodka" },
    { id: 14, name: "Whiskey" },
    { id: 15, name: "Cocaine" },
    { id: 17, name: "Smokes" },
    { id: 18, name: "Hot Magazine" },
    { id: 19, name: "Strong Alcohol" },
  ]);

  const [stashItems, setStashItems] = useState([
    { id: 1, name: "Alcohol" },
    { id: 2, name: "Bread" },
    { id: 3, name: "Sweets" },
  ]);

  const [marketItems, setMarketItems] = useState([
    { id: 1, name: "Tea", price: 40 },
    { id: 2, name: "Bread", price: 20 },
    { id: 3, name: "Sweets", price: 50 },
  ]);

  const [blackMarketItems, setBlackMarketItems] = useState([
    { id: 1, name: "Ganja", price: 40 },
    { id: 2, name: "Meth", price: 20 },
    { id: 3, name: "Gun", price: 50 },
  ]);

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
    setInventoryItems(
      inventoryItems.filter((item) => item.id !== selectedItem.id)
    );
    setIsItemDetailModalVisible(false);
  };

  const handleMoveToStash = () => {
    if (stashItems.length < 6) {
      setStashItems([...stashItems, selectedItem]);
      setInventoryItems(
        inventoryItems.filter((item) => item.id !== selectedItem.id)
      );
    } else {
      alert("Stash is full. Maximum 6 items allowed.");
    }
    setIsItemDetailModalVisible(false);
  };

  const handleMoveToTrashFromStash = () => {
    setStashItems(
      stashItems.filter((item) => item.id !== selectedStashItem.id)
    );
    setIsStashItemDetailModalVisible(false);
  };

  const handleMoveToInventory = () => {
    setInventoryItems([...inventoryItems, selectedStashItem]);
    setStashItems(
      stashItems.filter((item) => item.id !== selectedStashItem.id)
    );
    setIsStashItemDetailModalVisible(false);
  };

  const handleMarketClick = () => {
    setMarketVisible(true);
  };

  const handleBlackMarketClick = () => {
    setBlackMarketVisible(true);
  };

  const handleMarketItem = (item) => {
    if (resources.coins >= item.price) {
      setInventoryItems([...inventoryItems, item]);
      resources.coins -= item.price;  // Deduct the price from the user's balance
      setMarketItems(marketItems.filter(marketItem => marketItem.id !== item.id));  // Remove the purchased item from marketItems
      alert(`You have successfully purchased ${item.name}`);
    } else {
      alert("Insufficient balance to buy this item.");
    }
  };
  
  const handleBlackMarketItem = (item) => {
    if (resources.coins >= item.price) {
      setInventoryItems([...inventoryItems, item]);
      resources.coins -= item.price;  // Deduct the price from the user's balance
      setBlackMarketItems(blackMarketItems.filter(marketItem => marketItem.id !== item.id));  // Remove the purchased item from marketItems
      alert(`You have successfully purchased ${item.name}`);
    } else {
      alert("Insufficient balance to buy this item.");
    }
  };

  const handleEventGenerated = () => {
    setEvent(EventLoader.generateRandomNumber()); // Update the state with the generated number
  };

  const serveSentence = () =>{
    setShowEventModal(true);
    handleEventGenerated();
  }

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

      <div className="serve-sentence" style={{display:"flex",width:"100%",justifyContent:"center",position:"relative",top:250}}>
        <button style={{width:123,height:123}} onClick={serveSentence}>Serve sentence</button>
      </div>

      {profile && resources ? (
        <div style={{marginTop:400}}>
          <div
            style={{ display: "flex", gap: 10, marginTop: 15,marginRight:35,justifyContent:"space-evenly" }}
          >
            <div className="inventory-rs" style={{ display: "flex", gap: 10 }}>
              <img
                src={inventoryImg}
                alt="inventory"
                style={{ height: 30, width: 30, cursor: "pointer" }}
                onClick={handleInventoryClick}
              />
              Inventory
            </div>
            <div className="stash-rs" style={{ display: "flex", gap: 10,position:"relative",right:15 }}>
              <img
                src={stashImg}
                alt="stash"
                style={{ height: 30, width: 30, cursor: "pointer" }}
                onClick={handleStashClick}
              />
              Stash
            </div>
            
          </div>

          <div className="2div" style={{ display: "flex", gap: 10, marginTop: 15,justifyContent:"space-evenly" }}>
          <div className="market-rs" style={{ display: "flex", gap: 10 }}>
              <img
                src={market}
                alt="market"
                style={{ height: 30, width: 30, cursor: "pointer" }}
                onClick={handleMarketClick}
              />
              Market
            </div>
            <div className="black-market-rs" style={{ display: "flex", gap: 10 }}>
              <img
                src={blackmarket}
                alt="blackmarket"
                style={{ height: 30, width: 30, cursor: "pointer" }}
                onClick={handleBlackMarketClick}
              />
              Black Market
            </div>
          </div>

          <div className="save" style={{ display: "flex", gap: 3 }}>
            <img src={save} alt="save" style={{ height: 50, width: 50 }} />{" "}
            <h3 style={{ position: "relative", top: -7 }}>Saving..</h3>
          </div>


          <Modal
            visible={showEventModal}
            onOk={()=>setShowEventModal(false)}
            closable={false}  
            bodyStyle={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            {event}
            
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
                <ItemImage itemName={selectedItem.name} inv_view={true} />
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
                  <ItemImage itemName={item.name} />
                  <span style={{ position: "relative", top: -6 }}>
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
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
                  <ItemImage itemName={item.name} />
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
                <ItemImage itemName={selectedStashItem.name} inv_view={true} />
                <p>{selectedStashItem.description}</p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 10,
                  }}
                >
                  <Button
                    onClick={handleMoveToTrashFromStash}
                    variant="contained"
                    color="error"
                  >
                    Move to Trash
                  </Button>
                  <Button onClick={handleMoveToInventory} variant="contained">
                    Move to Inventory
                  </Button>
                </div>
              </div>
            )}
          </Modal>

          <Modal
            title="Market"
            visible={marketVisible}
            onOk={() => setMarketVisible(false)}
            onCancel={() => setMarketVisible(false)}
            bodyStyle={{ maxHeight: "400px", overflowY: "auto" }}
          >
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {marketItems.map((item) => (
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
                >
                  <div
                    className="item"
                    onClick={()=>handleMarketItem(item)}
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div className="name">
                      <ItemImage itemName={item.name} />
                      <span style={{ position: "relative", top: -6 }}>
                        {item.name}
                      </span>
                    </div>

                    <div className="price" style={{ display: "flex", gap: 5 }}>
                      <img src={coin} alt="price" width={30} height={30} />{" "}
                      <h5 style={{ margin: 0, padding: 0,position:"relative",top:7 }}>{item.price}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Modal>


          <Modal
            title="Black Market"
            visible={blackMarketVisible}
            onOk={() => setBlackMarketVisible(false)}
            onCancel={() => setBlackMarketVisible(false)}
            bodyStyle={{ maxHeight: "400px", overflowY: "auto" }}
          >
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {blackMarketItems.map((item) => (
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
                >
                  <div
                    className="item"
                    onClick={()=>handleBlackMarketItem(item)}
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div className="name">
                      <ItemImage itemName={item.name} />
                      <span style={{ position: "relative", top: -6 }}>
                        {item.name}
                      </span>
                    </div>

                    <div className="price" style={{ display: "flex", gap: 5 }}>
                      <img src={coin} alt="price" width={30} height={30} />{" "}
                      <h5 style={{ margin: 0, padding: 0,position:"relative",top:7 }}>{item.price}</h5>
                    </div>
                  </div>
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
