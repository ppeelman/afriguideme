// EXTERNAL
import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import TravelSearchPage from "./pages/TravelSearch/TravelSearch.page";
import HotelDetailPage from "./pages/HotelDetail/HotelDetail.page";
import ActivityOverviewPage from "./pages/ActivityOverview/ActivityOverview.page";
import ActivityDetailPage from "./pages/ActivityDetail/ActivityDetail.page";
import PersonalDataPage from "./pages/PersonalData/PersonalData.page";
import ActivityOrderPage from "./pages/ActivityOrder/ActivityOrder.page";
import FirstNightPage from "./pages/FirstNight/FirstNight.page";

const App: FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <TravelSearchPage />
        </Route>
        <Route path="/first-night">
          <FirstNightPage />
        </Route>
        <Route path="/first-night/:id">
          <HotelDetailPage />
        </Route>
        <Route path="/hotels/:id">
          <HotelDetailPage />
        </Route>
        <Route path="/activities">
          <ActivityOverviewPage />
        </Route>
        <Route path="/activities/:id">
          <ActivityDetailPage />
        </Route>
        <Route path="/activities">
          <ActivityOrderPage />
        </Route>
        <Route path="/personal-data">
          <PersonalDataPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
