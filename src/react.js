import React, { Component } from "react";
import { render } from "react-dom";

class App extends Component {
  state = {
    beers: []
  };

  fetchBeers = param => {
    fetch(`https://api.punkapi.com/v2/beers?${param}`)
      .then(data => data.json())
      .then(beers => {
        this.setState({ beers });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    var formular = "<form action='/' method='post'>";
    formular += "<input type='text' name='amount' placeholder='Množství' />";
    formular += "<select name='crypto'>";
    formular += "<option value='BTC'>Bitcoin</option>";
    formular += "<option value='LTC'>Litecoin</option>";
    formular += "<option value='XMR'>Monero</option>";
    formular += "</select>";
    formular += "<select name='fiat'>";
    formular += "<option value='USD'>USD</option>";
    formular += "<option value='EUR'>EUR</option>";
    formular += "<option value='CZK'>CZK</option>";
    formular += "</select>";
    formular += "<button type='submit' name='button'>Zjisti!</button>";
    formular += "</form>";
  }
}

const styles = {
  font: "100%/1.5 monospace",
  color: "#222",
  fontWeight: "bold"
};

render(<App />, document.getElementById("root"));
