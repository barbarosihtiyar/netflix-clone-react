import React from "react";
import Header from "./Header";
import "../sass/account.css";
import { MainContext, useContext } from "../context";



function Account() {
  let {subsInfo} = useContext(MainContext);

console.log(subsInfo);
  return (
    <div className="accountComponent">
      <div className="headerComponent">
        <Header />
      </div>
      <div className="emptyRow"></div>
      <div className="accountContainer">
        <div className="accountWrapper">
          <div className="account">
            <div className="accountTitle">
              <h3>Account</h3>
            </div>
            <div className="accountInfo">
              <div className="membershipPayments">
                <div className="membershipPaymentsFirst">
                  <div className="membershipPaymentsTitleButton">
                    <h6>MEMBERSHIP AND PAYMENTS</h6>
                    <button type="button">Cancel Membership</button>
                  </div>
                  <div className="userInfo">
                    <span>{subsInfo.email}</span>
                    <span>Password : {subsInfo.password}</span>
                    <span>Phone : {subsInfo.phoneNumber}</span>
                    <div className="userCardInfo">
                      <span>{subsInfo.cardNumber}</span>
                    </div>
                  </div>
                  <div className="changeUserInfo">
                    <span>Change account email</span>
                    <span>Change password</span>
                    <span>Change phone number</span>
                    <div className="userCardInfoChange">
                      <span>Manage payment information</span>
                      <span>Add a backup payment method</span>
                      <span>Use a gift card or promotion</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="planDetails">
                <div className="planDetailsTitle">
                  <h6>PLAN DETAILS</h6>
                </div>
                <div className="planType">
                  <span>Basic</span>
                </div>
                <div className="changePlan">
                  <span>Change plan</span>
                </div>
              </div>
              <div className="securityPrivacy">
                <div className="securityPrivacyTitle">
                  <h6>SECURITY AND PRIVACY</h6>
                </div>
                <div className="securityPrivacyDesc">
                  <span>
                    Control who can access this account, view recently used
                    devices, and more.
                  </span>
                </div>
                <div className="closeAccount">
                  <span>Sign out on all devices</span>
                </div>
              </div>
              <div className="profileParentalControls">
                <div className="profileParentalControlsTitle">
                  <h6>PROFILE AND PARENTAL CONTROLS</h6>
                </div>
                <div className="profileParentalControlsInfo">
                  <span>asd</span>
                </div>
              </div>
              <div className="settings">
                <div className="settingTitle">
                  <h6>Settings</h6>
                </div>
                <div className="settingsInfo">
                  <span>18+ Content Access PIN</span>
                  <span>Turn off profile transfer feature</span>
                  <span>Test participation</span>
                  <span>Manage content download devices</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="footerContainer">
          <div className="footerWrapper">
            <div className="footerAskQuestion">
              <span>Have questions? Call us.</span>
            </div>
            <div className="footerPart">
              <ul>
                <li>Audio and Subtitles</li>
                <li>Help center</li>
                <li>Gift Cards</li>
                <li>Investor Relations</li>
                <li>Media Center</li>
                <li>Job oppurtunities</li>
                <li>Cookie Preferences</li>
                <li>Terms of Use</li>
                <li>Privacy Statement</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Account;