import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor() {
    super()
    this.state = {
      sushis: [],
      displaySushis: [],
      eatenSushis: [],
      sliceStart: 0,
      sliceEnd: 4,
      money: 100
    }
  }

  componentDidMount() {
    fetch(API)
      .then(result => result.json())
      .then(sushis => {
        this.setState({
          sushis,
          displaySushis: sushis
          // displaySushis: sushis.map(sushi => {...sushi, eatenfalse }])
          // shownSushis: this.state.displaySushis.slice(0, 4)
        })
      })
  }

  incrementSushiList = () => {
    if (this.state.sliceStart >= 96) {
      null
    }
    else {
      this.setState({
        sliceStart: this.state.sliceStart + 4,
        sliceEnd: this.state.sliceEnd + 4
      })
    }
  }

  eatSushi = (eatenSushi) => {
    if (!this.state.eatenSushis.includes(eatenSushi) && this.state.money - eatenSushi.price >= 0) {
      this.setState({
        eatenSushis: [...this.state.eatenSushis, eatenSushi],
        money: this.state.money - eatenSushi.price
      })
    }
    else if (this.state.money - eatenSushi.price < 0) { alert("Fish ain't free! Go get more money, scrub!") }
    else { alert("You already ate the sushi; don't eat the plate, too!") }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer displaySushis={this.state.displaySushis} sliceStart={this.state.sliceStart} sliceEnd={this.state.sliceEnd} incrementSushiList={this.incrementSushiList} eatSushi={this.eatSushi} eatenSushis={this.state.eatenSushis} />

        <Table plates={this.state.sushis} money={this.state.money} eatenSushis={this.state.eatenSushis} />
      </div>
    );
  }
}

export default App;