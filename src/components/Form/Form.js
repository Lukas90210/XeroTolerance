import React from 'react';
import styles from "./Form.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Title from "../Title/Title";
import Radio from "./FormRadio";
import AppContext from "../../context";

const types = {
    link: "link",
    article: "article",
    note: "note",
  };

const descriptions = {
  link: "favorite link",
  article: "article",
  note: "note",
};

class Form extends React.Component {
    state = {
        type: types.link,
        title: "",
        link: "",
        image: "",
        description: "",
      };
    handle = type => {
        this.setState({
          type: type,
        });
      };

    handleItem = e => {
        this.setState({
          [e.target.name]: e.target.value,
        });
        
      };
   render(){

    const { type } = this.state;
    
       return (
            <AppContext.Consumer>
                {(context) => (
                    <div className={styles.wrapper}>
                    <Title>Add New {descriptions[type]}</Title>
                    <form 
                        autoComplete="off" 
                        className={styles.form}
                        onSubmit={(e) => context.addItem(e, this.state)} >
                        <div>
                        <Radio 
                            id={types.link} 
                            type="radio"
                            checked={type === types.link} 
                            changeFn={() => this.handle(types.link)}
                        > Links </Radio>
                        <Radio
                            id={types.article}
                            type="radio"
                            checked={type === types.article}
                            changeFn={() => this.handle(types.article)}
                        > Articles </Radio>
                        <Radio
                            id={types.note}
                            type="radio"
                            checked={type === types.note}
                            changeFn={() => this.handle(types.note)}
                        > Notes </Radio>
                        </div>
                        
                        <Input 
                            name="title" 
                            label={type !== types.link ? "Title" : "Name"} 
                            maxLength={40}
                            onChange={this.handleItem}
                            value={this.state.title}
                            required
                        />

                        {type !== types.note ? 
                            (<Input 
                                name="link" 
                                label="Link" 
                                onChange={this.handleItem}
                                value={this.state.link}
                            />) 
                        : null}

                        {type === types.link ? 
                            (<Input 
                                name="image" 
                                label="Image" 
                                onChange={this.handleItem}
                                value={this.state.image}
                            />) 
                        : null}

                        <Input 
                            name="description"
                            label="Description" 
                            tag="textarea"
                            onChange={this.handleItem}
                            value={this.state.description}
                        />

                        <Button>Dodaj item</Button>
                    </form>
                </div>
                )}
            </AppContext.Consumer>
       )
   }
};

export default Form;