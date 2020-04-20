// EXTERNAL
import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import TravelSearchPage from "./pages/TravelSearch/TravelSearch.page";
import HotelSelectPage from "./pages/HotelSelect/HotelSelect.page";
import HotelDetailPage from "./pages/HotelDetail/HotelDetail.page";
import ActivityOverviewPage from "./pages/ActivityOverview/ActivityOverview.page";
import ActivityDetailPage from "./pages/ActivityDetail/ActivityDetail.page";
import PersonalDataPage from "./pages/PersonalData/PersonalData.page";

const App: FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <TravelSearchPage />
        </Route>
        <Route path="/first-night">
          <HotelSelectPage />
        </Route>
        <Route path="/hotel-detail">
          <HotelDetailPage />
        </Route>
        <Route path="/activity-overview">
          <ActivityOverviewPage />
        </Route>
        <Route path="/activity-detail">
          <ActivityDetailPage />
        </Route>
        <Route path="/personal-data">
          <PersonalDataPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
