import React from "react";

import CollectionsOverview from "../../components/collection-overview/CollectionOverviewComponent";

const ShopPage = ({collections}) => {
        return (
            <div className="shop-page">
                <CollectionsOverview />
            </div>
        )
}

export default (ShopPage);