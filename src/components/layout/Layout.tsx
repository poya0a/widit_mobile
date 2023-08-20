import React from 'react';
import { Outlet } from 'react-router-dom';
import { useRecoilValue } from "recoil";

import { showMemberPopup, showAlertPopup } from '../../atoms';

import Footer from '../footer/Footer';
import Header from '../header/Header';
import Nav from '../nav/Nav';

function Layout() {
//   const memberPopup = useRecoilValue(showMemberPopup);
//   const alertPopup = useRecoilValue(showAlertPopup);
  return (
    <>
    <div className="wrap">
      <div className="container">
        <Header />
        {/* {memberPopup.openPopup && <MemberPopup />}
        {alertPopup.openPopup && <Alert />} */}
        <Outlet />
        <Footer />
        <Nav />
      </div>
    </div>
    </>
  );
}

export default Layout;