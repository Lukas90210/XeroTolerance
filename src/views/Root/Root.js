import React from "react";
import "./index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../../components/Header/Header";
import LinksView from "../LinksView/LinksView";
import ArticlesView from "../ArticlesView/ArticlesView";
import NotesView from "../NotesView/NotesView";
import Modal from "../../components/Modal/Modal";
import AppContext from "../../context";

class Root extends React.Component {
  state = {
    link: [],
    article: [],
    note: [],
    isModalOpen: false,
  };

  addItem = (e, newItem) => {
    e.preventDefault();

    this.setState((prevState) => ({
      [newItem.type]: [...prevState[newItem.type], newItem],
    }));

    this.closeModal();
  };
  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };
  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { isModalOpen } = this.state;

    // Jest to obiekt podawany do kontekstu. Posiada stan (state) oraz funkcję wykorzystywaną w formie.
    const contextElements = {
      ...this.state,
      addItem: this.addItem,
    };
    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          <Header openModalFn={this.openModal} />
          <Switch>
            <Route exact path="/" component={LinksView} />
            <Route path="/articles" component={ArticlesView} />
            <Route path="/notes" component={NotesView} />
          </Switch>
          {isModalOpen && <Modal closeModalFn={this.closeModal} />}
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default Root;
