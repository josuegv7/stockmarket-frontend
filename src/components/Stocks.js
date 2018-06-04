import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchMyStock } from '../actions';

import main from '../style/Main.css';
import SearchBar from './Searchbar';
import Chart from './chart';
import JsonTable from "ts-react-json-table";
import Modal from 'react-responsive-modal';

class Stocks extends Component {
  state = {
    open: false,
  };
  onOpenModal = () => {
    this.setState({ open: true });
  };
  onCloseModal = () => {
    this.setState({ open: false });
  };
  componentDidMount (){
    this.props.fetchMyStock()
  };
  renderMyStocks(){
    return _.map(this.props.MyStocks, myStocks => {
      const symbols = Object.getOwnPropertyNames(this.props.MyStocks)
      const price = myStocks.map(price => price.open.toFixed(2)).reverse().slice(0,5);
      const date = myStocks.map(price => price.date).reverse().slice(0,5);
      const high = myStocks.map(price => price.high.toFixed(2)).reverse().slice(0,5)
      const low = myStocks.map(price => price.low.toFixed(2)).reverse().slice(0,5)
      const close = myStocks.map(price => price.close.toFixed(2)).reverse().slice(0,5)
      const volume = myStocks.map(price => price.volume.toFixed(2)).reverse().slice(0,5)
      const change = myStocks.map(price => price.change.toFixed(2)).reverse().slice(0,5)
      var graph = [];
      date.forEach(function (x, y) {
        var obj = {};
        obj.x = x;
        obj.y = price[y];
        graph.push(obj);
      });
      var columns = [
        {key: 'x', label:"Date"},
        {key: 'y', label:"Price ($/Share)"}
      ]
      var lowdata = [];
      date.forEach(function (d2, l) {
        var obj = {};
        obj.x2 = d2;
        obj.l = low[l];
        lowdata.push(obj);
      });
      var LowCol = [
        {key: 'x2', label:"Date"},
        {key: 'l', label:"Low ($/Share)"},
      ]
      var highdata = [];
      date.forEach(function (d, h) {
        var obj = {};
        obj.x = d;
        obj.h = high[h];
        highdata.push(obj);
      });
      var HigCol = [
        {key: 'x', label:"Date"},
        {key: 'h', label:"High ($/Share)"},
      ]

      var arr = [];
      date.forEach(function(v,i){
        var obj = {};
        obj.meta = v;
        obj.value = volume[i];
        arr.push(obj);
      });
      var VolCol = [
        {key: 'meta', label:"Date"},
        {key: 'value', label:"Volume"},
      ]

      var chg = [];
      date.forEach(function(d1,v){
        var obj = {};
        obj.x1 = d1;
        obj.c = change[v];
        chg.push(obj);
      });
      var ChgCol = [
        {key: 'x1', label:"Date"},
        {key: 'c', label:"Change"},
      ]




      const { open } = this.state;
      return(
          <div className='col' >
              <Chart data={[graph]}/>
              <JsonTable rows={graph} columns={columns} header='false' className="table table-dark table-sm text-center"/>
              <button onClick={this.onOpenModal} className="btn btn-info">More Info</button>
              <Modal open={open} onClose={this.onCloseModal} >
                  <h3>Detailed Information</h3>
                  <div className="row">
                  <JsonTable rows={highdata} columns={HigCol} header='false' className="table table-dark table-sm text-center"/>
                  <JsonTable rows={lowdata} columns={LowCol} header='false' className="table table-dark table-sm text-center"/>
                  </div>
                  <div className="row">
                  <JsonTable rows={arr} columns={VolCol} header='false' className="table table-dark table-sm text-center"/>
                  <JsonTable rows={chg} columns={ChgCol} header='false' className="table table-dark table-sm text-center"/>
                  </div>
              </Modal>
          </div>
      )
    })
  };

  renderStock(stockData){
    const name = stockData.company.companyName;
    const price = stockData.chart.map(price => price.open.toFixed(2)).reverse().slice(0,5);
    const date = stockData.chart.map(price => price.date).reverse().slice(0, 5);
    const graph = [];
    date.forEach(function (x, y) {
      var obj = {};
      obj.x = x;
      obj.y = price[y];
      graph.push(obj);
    });
    var columns = [
      {key: 'x', label:"Date"},
      {key: 'y', label:"Price ($/Share)"}
    ]
    return(
      <tr key={name}>
        <td>
          {name}
        </td>
        <td>
          <Chart data={[graph]}/>
        </td>
        <td>
          <JsonTable rows={graph} columns={columns} header='false'/>
        </td>
      </tr>
    );
  }
  render(){
    return(
      <div className="container">
        <h2>My Stocks</h2><br/>
        <div className="row">
          {this.renderMyStocks()}
        </div>
        <div className={main.row}>
          <h2>New Stocks</h2>
            <SearchBar/>
          <table className='table'>
            <thead>
              <tr>
                <th>Company</th>
                <th>Graph</th>
                <th>Pricing Table</th>
              </tr>
            </thead>
              <tbody>
                {this.props.NewStocks.map(this.renderStock)}
              </tbody>
          </table>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    NewStocks: state.stocksData,
    MyStocks:  state.mystockData
  };
}

export default connect(mapStateToProps, {fetchMyStock})(Stocks);
