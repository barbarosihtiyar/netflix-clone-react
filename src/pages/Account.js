import React from 'react'
import Header from './Header'
import "../sass/account.css"

function Account() {
  return (
    <>
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
                <button type='button'>Cancel Membership</button>
              </div>
              <div className="userInfo">
                <span>aaaa@hotmail.com</span>
                <span>Password : asdasdas</span>
                <span>Phone : 111111111</span>
              </div>
              <div className="changeUserInfo">
                <span>Change account email</span>
                <span>Change password</span>
                <span>Change phone number</span>
              </div>
              </div>
              <div className="membershipPaymentsSecond">
              <div className="userCardInfo">
                <span>11111111111111111</span>
              </div>
              <div className="userCardInfoChange">
                <span>Manage payment information</span>
                <span>Add a backup payment method</span>
                <span>Use a gift card or promotion</span>
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
              <span>Control who can access this account, view recently used devices, and more.</span>
            </div>
            <div className="closeAccount">
              <span>Sign out on all devices</span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Account