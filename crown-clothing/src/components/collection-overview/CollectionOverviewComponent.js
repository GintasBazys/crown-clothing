import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./collection-overview-styles.scss";
import CollectionPreview from "../collection-preview/CollectionPreviewComponent";
import {selectCollections} from "../../redux/shop/ShopSelectors";

const CollectionsOverview = ({collections}) => {
    return (
        <div className="collections-overview">
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview);