import React, { useState } from "react";
import styled from "styled-components";
import { useCartContaxt } from "../Contaxt/CartContaxt";
import QRCode from "react-qr-code";

function ConfirmaPage() {
  const [selectedPayment, setSelectedPayment] = useState("");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [walletType, setWalletType] = useState("");
  const [upiType, setUpiType] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handlePaymentChange = (e) => {
    setSelectedPayment(e.target.value);
    setCardDetails({ cardNumber: "", expiryDate: "", cvv: "" });
    setWalletType("");
    setUpiType("");
  };
  const { cart_m, shipping_fee, total_price } = useCartContaxt();
  // console.log(cart);

  const handleProceedToPay = () => {
    if (!selectedPayment) {
      alert("Please select a payment method before proceeding.");
      return;
    }
    setIsProcessing(true); // Show loading animation
    setTimeout(() => {
      setIsProcessing(false); // Hide loading
      setIsConfirmed(true); // Show order confirmation
    }, 2000); // 2 seconds loading duration
  };
  const generateOrderId = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; // Allowed characters
    let orderId = "";
    for (let i = 0; i < 8; i++) {
      // Length of the order ID
      orderId += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return orderId; // Returns a string like 'A1B2C3D4'
  };
  const orderId = generateOrderId();
  const total = (Number(shipping_fee) + Number(total_price) || 0).toFixed(2);
  return (
    // <div><h2>Under Devloping</h2></div>
    <Wrapper>
      {!isConfirmed ? (
        <div>
          <div className="payment-container">
            <h2>Payment Details</h2>
            <div className="payment-summary">
              <div className="summary-item">
                <span>Subtotal:</span>
                <span>$ {Number(total_price).toFixed(2)}</span>
              </div>
              <div className="summary-item">
                <span>Shipping Fee:</span>
                <span>$ {shipping_fee}</span>
              </div>
              <div className="summary-item total">
                <span>Total:</span>
                <span>$ {total}</span>
              </div>
            </div>

            <h3>Select Payment Method</h3>
            <div className="payment-options">
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={selectedPayment === "card"}
                  onChange={handlePaymentChange}
                />
                Pay via Card
              </label>
              {selectedPayment === "card" && (
                <div className="dropdown">
                  <input
                    type="text"
                    placeholder="Card Number"
                    value={cardDetails.cardNumber}
                    onChange={(e) =>
                      setCardDetails({
                        ...cardDetails,
                        cardNumber: e.target.value,
                      })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Expiry Date (MM/YY)"
                    value={cardDetails.expiryDate}
                    onChange={(e) =>
                      setCardDetails({
                        ...cardDetails,
                        expiryDate: e.target.value,
                      })
                    }
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    value={cardDetails.cvv}
                    onChange={(e) =>
                      setCardDetails({ ...cardDetails, cvv: e.target.value })
                    }
                  />
                </div>
              )}

              <label>
                <input
                  type="radio"
                  name="payment"
                  value="wallet"
                  checked={selectedPayment === "wallet"}
                  onChange={handlePaymentChange}
                />
                Pay via Wallet
              </label>
              {selectedPayment === "wallet" && (
                <div className="dropdown">
                  <select
                    value={walletType}
                    onChange={(e) => setWalletType(e.target.value)}
                  >
                    <option value="">Select Wallet</option>
                    <option value="amazon">Amazon Pay</option>
                    <option value="paytm">Paytm</option>
                  </select>
                </div>
              )}

              <label>
                <input
                  type="radio"
                  name="payment"
                  value="upi"
                  checked={selectedPayment === "upi"}
                  onChange={handlePaymentChange}
                />
                Pay via UPI
              </label>
              {selectedPayment === "upi" && (
                <div className="dropdown">
                  <select
                    value={upiType}
                    onChange={(e) => setUpiType(e.target.value)}
                  >
                    <option value="">Select UPI</option>
                    <option value="gpay">Google Pay (GPay)</option>
                    <option value="paytm">Paytm</option>
                    <option value="phonepe">PhonePe</option>
                  </select>
                </div>
              )}

              <label>
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={selectedPayment === "cod"}
                  onChange={handlePaymentChange}
                />
                Cash on Delivery (COD)
              </label>
            </div>
            <button className="pay-button" onClick={handleProceedToPay}>
              Proceed to Pay
            </button>
            {isProcessing && (
              <div className="payment-loading">Processing your payment...</div>
            )}
          </div>
        </div>
      ) : (
        <Order>
          <div>
            <div className="container-os">
              <div class="left-os">
                <h1>Thank you for your purchase!</h1>
                <p>
                  Your order will be processed within 24 hours during working
                  days.
                </p>
                <p>
                  We will notify you by email once your order has been shipped.
                </p>

                <h2>Billing address</h2>
                <div class="billing-info">
                  <p>
                    <strong>Name:</strong> Jane Smith
                  </p>
                  <p>
                    <strong>Address:</strong> 456 Ouk St 43b, San Francisco, CA.
                    94102, United States
                  </p>
                  <p>
                    <strong>Phone:</strong> +1 (415) 555-1234
                  </p>
                  <p>
                    <strong>Email:</strong> jane.smith@email.com
                  </p>
                </div>
                <button>Track Order</button>
                <div className="qr-container">
                  <h3>Scan Qr for More Information</h3>
                  <QRCode className="qr-code" value={JSON.stringify(cart_m)} />
                </div>
              </div>
              <div className="right-os">
                <h2>Order Summary</h2>
                <p>
                  OrderID:<strong>#ORD-{orderId}</strong>
                </p>
                <p>
                  Payment Method:
                  <strong style={{ textTransform: "capitalize" }}>
                    {selectedPayment}
                  </strong>
                </p>
                <div className="order-summary-os">
                  {cart_m.length > 0 ? (
                    cart_m.map((item) => (
                      // <div className="os-data">
                      // <img src={item.image} alt="" />
                      // <div class="item-info">
                      // <p>{item.name}</p>
                      // </div>
                      // <div class="item-price">$ {item.price} <span>Qut:{item.amount}</span></div>
                      // </div>
                      <div className="os-data">
                        <div className="img-container">
                          <img
                            src={item.image}
                            alt="Product"
                          />
                          <span className="quantity-badge">{item.amount}</span>
                          {/* Quantity badge */}
                        </div>
                        <div className="item-info">
                          <p>{item.name}</p>
                        </div>
                        <div className="item-price">$ {item.price}</div>
                      </div>
                    ))
                  ) : (
                    <p>Your cart is empty</p>
                  )}
                  <p className="border"></p>
                  <p>
                    Sub Total:<span>$ {Number(total_price).toFixed(2)}</span>
                  </p>
                  <p>
                    Shipping:<span>$ {shipping_fee}</span>
                  </p>
                  <hr />
                  <p>
                    Order Total:<strong>$ {total}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Order>
      )}
    </Wrapper>
  );
}
const Wrapper = styled.section`
/* PaymentPage.css */
.payment-container {
    max-width: 400px;
    margin: 2rem auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    // background-color: #fff;
    background-color: #e9eef7;
    font-family: Arial, sans-serif;
}

.payment-container h2,
.payment-container h3 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
}

.payment-summary {
    margin-bottom: 20px;
    font-size: 16px;
}

.summary-item {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    border-bottom: 1px solid #eee;
}

.summary-item.total {
    font-weight: bold;
    font-size: 18px;
    border-top: 2px solid #ddd;
    padding-top: 12px;
    margin-top: 12px;
}

.payment-options {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
}

.payment-options label {
    font-size: 16px;
    color: #333;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
}

.payment-options input[type="radio"] {
    accent-color: #333;
}

.dropdown {
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.dropdown input,
.dropdown select {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
}

.pay-button {
    width: 100%;
    padding: 12px;
    background-color: #4e81de;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.pay-button:hover {
    background-color: #555;
}
    .payment-loading {
    margin-top: 20px;
    font-size: 18px;
    color: #888;
    animation: fadeIn 1s infinite alternate;
}

@keyframes fadeIn {
    from { opacity: 0.5; }
    to { opacity: 1; }
}

-------
`;
const Order = styled.section`
  .container-os {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
    max-width: 1100px;
    margin: 2rem auto;
    //   background-color: #f9fafb;
    background-color: #e9eef7;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }

  .left-os,
  .right-os {
    flex: 1 1 100%;
    padding: 20px;
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  }

  .left-os {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .left-os h1 {
    color: #222;
    font-size: 24px;
    font-weight: bold;
  }

  .left-os p {
    color: #555;
    line-height: 1.5;
    font-size: 14px;
  }

  .left-os .billing-info p {
    margin: 4px 0;
  }

  .left-os button {
    margin-top: 20px;
    padding: 12px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .left-os button:hover {
    background-color: #0056b3;
  }
  .qr-container {
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f9fafb;
    padding: 1rem;
    border-radius: 10px;
    height:auto;
  }
  .qr-code {
    width: 80%;
    height:auto;
    padding:1rem;
  }
  .right-os {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .right-os h2 {
    font-size: 20px;
    color: #333;
    font-weight: bold;
    margin-bottom: 15px;
  }

  
.order-summary-os {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.img-container {
    position: relative;
}

.img-container img {
    width: 70px;
    height: 70px;
    border-radius: 5px;
    object-fit:cover;
}

.quantity-badge {
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: 2px 6px;
    border-radius: 3px;
    font-size: 0.8rem;
}

.item-info p {
    margin: 0;
    font-weight: bold;
}
  .os-data {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid #e0e0e0;
  }

  .os-data .item-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }

  .os-data .item-price {
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    color: #007bff;
    font-size: 1rem;
  }

  .order-summary-os p {
    display: flex;
    justify-content: space-between;
    margin: 5px 0;
    font-size: 15px;
    color: #333;
    font-weight: 500;
  }

  .order-summary-os .border {
    border-top: 1px solid #e0e0e0;
    margin: 10px 0;
  }

  .order-summary-os span,
  .order-summary-os strong {
    font-weight: bold;
    font-size: 16px;
  }
// --------------------------


  @media (min-width: 768px) {
    .left-os,
    .right-os {
      flex: 1 1 48%;
    }
      .qr-code{
      max-width:60%;
  margin:0 auto;
      }
  }
`;
export default ConfirmaPage;
