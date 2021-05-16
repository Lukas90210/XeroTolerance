import React from 'react';
import List from "../../components/List/List";
import AppContext from "../../context";

const Links = () => (
        <AppContext.Consumer>
      {(context) => (
        <List itemki={context.link} />
      )}
    </AppContext.Consumer>
);

export default Links;