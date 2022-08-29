import React, { useCallback, useState } from 'react';
import { Route, Routes, useNavigate, Navigate, useLocation } from 'react-router-dom';

import { Frame, Navigation, TopBar } from '@shopify/polaris';
import { SectionMajor, HomeMajor, SettingsMajor, QuestionMarkMajor } from '@shopify/polaris-icons';
import routesList from "./routesList";
import { RoutePropagator } from '@shopify/app-bridge-react';


import './App.css';
export default function FrameExample() {
  const { pathname, location } = useLocation();


  const navigation = useNavigate();
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false);
  const toggleMobileNavigationActive = useCallback(
    () =>
      setMobileNavigationActive(
        (mobileNavigationActive) => !mobileNavigationActive,
      ),
    [],
  );

  const topBarMarkup = (
    <TopBar
      showNavigationToggle
      onNavigationToggle={toggleMobileNavigationActive}
    />
  );

  const onNavigate = (urls) => {
    const urlParams = new URLSearchParams(window.location.search);
    var params = Object.fromEntries(urlParams)
    var queryString = new URLSearchParams(params);
    navigation(`${urls}?${queryString}`)
  }

  const navigationMarkup = (
    <Navigation location={pathname}>
      <Navigation.Section
        items={[
          {
            label: 'Dashboard',
            icon: HomeMajor,
            selected: (pathname === '/dashboard'),
            onClick: () => onNavigate(`/dashboard`),
          },

          {

            label: 'Settings',
            icon: SettingsMajor,
            selected: (pathname === '/settings'),

            onClick: () => onNavigate(`/settings`),
          },
          {
            label: 'FAQ',
            icon: QuestionMarkMajor,
            selected: (pathname === '/faq'),

            onClick: () => onNavigate(`/faq`),
          },
        ]}
      />
    </Navigation>
  );

  return (
    <div style={{ height: '500px' }}>

      <Frame
        showNavigationToggle={true}
        showMobileNavigation={mobileNavigationActive}
        onNavigationDismiss={toggleMobileNavigationActive}
        topBar={topBarMarkup}
        navigation={navigationMarkup}
      >
        <React.Fragment>
          <Routes>
            {routesList.map((route, index) => {
              return route.component ? (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <React.Fragment>
                      {/* <RoutePropagator location={location} /> */}
                      <route.component />
                    </React.Fragment>
                  }
                />
              ) : null
            })}
            <Route path="/" element={<Navigate to="/dashboard" replace="/" />} />
          </Routes>
        </React.Fragment>
        <div style={{ height: '50px' }}></div>
      </Frame>
    </div>
  );
}
