import React from "react";

import "./homepage-styles.scss";

import Directory from "../../components/directory/DirectoryComponent";
import { HomePageContainer } from "./HomepageStyles";

const HomePage = () => {
    return (
            <HomePageContainer>
                <Directory />
            </HomePageContainer>
        )

}

export default HomePage;