import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../redux/shop/ShopSelectors";

import CollectionsOverview from "../../components/collection-overview/CollectionOverviewComponent";
import CollectionPage from "../collection/Collection";

import { fetchCollectionsStartAsync } from "../../redux/shop/ShopActions";
import WithSpinner from "../../components/with-spinner/WithSpinnerComponent";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);


class ShopPage extends React.Component{

    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    }

    render(){
        const {match, isCollectionFetching} = this.props;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props}/>}  />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={isCollectionFetching} {...props}/>} />
            </div>
        )
    }

}

const mapStateToProps =  createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching
});

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);