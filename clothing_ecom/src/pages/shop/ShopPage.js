import React from "react";
import { Route } from "react-router-dom";

import "./shoppage.scss";

import CollectionsOverview from "../../components/collection-overview/CollectionOverview";
import CollectionPage from "../collection/CollectionPage";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route
      exact
      path={`${match.path}/:collectionId`}
      component={CollectionPage}
    />
  </div>
);
export default ShopPage;
