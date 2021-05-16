import React from 'react';
import List from "../../components/List/List";
import AppContext from "../../context";

const Notes = () => (
    <AppContext.Consumer>
      {(context) => (
        <List itemki={context.note} />
      )}
    </AppContext.Consumer>
);

export default Notes;