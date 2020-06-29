import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "./DirectorySelectors.js";

import "./directory-styles.scss";
import MenuItem from "../menu-item/MenuItemComponent";

const Directory = ({sections}) => {
        return (
                <div className="directory-menu">
                    {
                        sections.map(({id, ...otherSectionProps}) => {
                           return <MenuItem key={id} {...otherSectionProps} />
                        })
                    }
                </div>
            )
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);