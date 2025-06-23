import React, { useEffect, useState } from "react";
import "../Css/groupbuy.css"; // Your updated CSS file

const GroupBuyComponent = ({ productId = "demo-product", userId = "user-123" }) => {
  const [group, setGroup] = useState(null);
  const [joined, setJoined] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [loading, setLoading] = useState(true);

  const LOCAL_KEY = `group-${productId}`;

  // On component mount: load from localStorage or create new group
  useEffect(() => {
    const savedGroup = localStorage.getItem(LOCAL_KEY);

    if (savedGroup) {
      const parsed = JSON.parse(savedGroup);
      setGroup(parsed);
      if (parsed.buyers.includes(userId)) setJoined(true);
    } else {
      const endTime = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000); // 3 days
      const newGroup = {
        productId,
        buyers: [],
        maxBuyers: 5,
        endTime: endTime.toISOString(),
      };
      localStorage.setItem(LOCAL_KEY, JSON.stringify(newGroup));
      setGroup(newGroup);
    }

    setLoading(false);
  }, [productId, userId]);

  // Live countdown
  useEffect(() => {
    if (!group) return;
    const interval = setInterval(() => {
      const remaining = Math.max(0, new Date(group.endTime) - new Date());
      setTimeLeft(remaining);
    }, 1000);
    return () => clearInterval(interval);
  }, [group]);

  // Join group
  const joinGroup = () => {
    if (!group || joined || group.buyers.length >= group.maxBuyers) return;

    const updatedGroup = {
      ...group,
      buyers: [...group.buyers, userId],
    };

    localStorage.setItem(LOCAL_KEY, JSON.stringify(updatedGroup));
    setGroup(updatedGroup);
    setJoined(true);
    alert("🎉 You joined the group successfully!");
  };

  // Copy current page URL
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("🔗 Link copied to clipboard!");
  };

  // Derived values
  const minutes = Math.floor(timeLeft / 60000);
  const seconds = Math.floor((timeLeft % 60000) / 1000);
  const isExpired = timeLeft <= 0 || (group?.buyers.length || 0) >= (group?.maxBuyers || 0);
  const progress = group ? Math.min((group.buyers.length / group.maxBuyers) * 100, 100) : 0;

  if (loading) return <p className="loading-text">Loading group info...</p>;
  if (!group) return <p className="error-text">No active group found.</p>;

  return (
    <div className="groupbuy-container">
      <div className="groupbuy-box">
        <h2 className="groupbuy-title">👥 Group Buying Deal</h2>

        <div className="groupbuy-stats">
          <p>
            👤 <strong>{group.buyers.length}</strong> of{" "}
            <strong>{group.maxBuyers}</strong> joined
          </p>
          <div className="avatars">
            {group.buyers.map((uid, idx) => (
              <div className="avatar" key={idx} title={`User: ${uid}`}>
                {uid.slice(-2)}
              </div>
            ))}
          </div>
        </div>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>

        <p className="timer">
          ⏳ Ends in: <span>{minutes} min {seconds} sec</span>
        </p>

        {!isExpired ? (
          <button
            onClick={joinGroup}
            disabled={joined}
            className={`join-button ${joined ? "disabled" : ""}`}
          >
            {joined ? "✅ Already Joined" : "🚀 Join Group Buy"}
          </button>
        ) : (
          <p className="expired-text">❌ Group Expired or Full</p>
        )}

        {joined && (
          <div className="group-details">
            <h3>✅ Group Details</h3>
            <ul>
              <li><strong>Product ID:</strong> {group.productId}</li>
              <li><strong>Members:</strong> {group.buyers.join(", ")}</li>
              <li><strong>Group Limit:</strong> {group.maxBuyers}</li>
              <li><strong>Time Left:</strong> {minutes} min</li>
            </ul>
            <div className="action-buttons">
              <button onClick={copyLink} className="share-button">🔗 Share Link</button>
              <button className="checkout-button">🛒 Go to Checkout</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GroupBuyComponent;