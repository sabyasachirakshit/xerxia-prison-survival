import React,{useState} from "react";
import { useParams, useLocation } from "react-router-dom";
import save from "../media/ezgif-2-e5a6f8f93a.gif";
import coin from "../media/coin.jpeg";
import karma from "../media/karma.png";
import jail from "../media/jail.png";
import inventory from "../media/inventory.jpeg";
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
            style={{ height: 30, width: 30 }}
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
          >
            <p>Inventory content goes here</p>
          </Modal>
        </div>
      ) : (
        <p>No profile or resource data available.</p>
      )}
    </div>
  );
}

export default ServePrison;
