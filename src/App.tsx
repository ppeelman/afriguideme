// EXTERNAL
import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import TravelSearchPage from './pages/TravelSearch/TravelSearch.page';
import HotelSelectPage from './pages/HotelSelect/HotelSelect.page';
import HotelDetailPage from './pages/HotelDetail/HotelDetail.page';

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
      </Switch>
    </Router>
  );
};

export default App;
