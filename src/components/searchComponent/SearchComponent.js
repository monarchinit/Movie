import React, { Component } from 'react';
import styled from './searchComponent.module.css';

class SearchComponent extends Component {
  state = { value: '' };

  onGetValue = e => {
    this.setState({ value: e.target.value });
  };
  onHandleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
  };

  //   componentDidMount = () => {
  //     this.setState({ value: this.props.word });
  //   };

  render() {
    const { value } = this.state;
    return (
      <>
        <form className={styled.form} onSubmit={this.onHandleSubmit}>
          <input
            value={value}
            onChange={this.onGetValue}
            type="search"
            placeholder="search movie"
          ></input>
          <button className={styled.button} type="submit">
            Search
          </button>
        </form>
      </>
    );
  }
}

export default SearchComponent;
