import React, { Component } from 'react';
import PromiseCell from './PromiseCell';
import Cell from './Cell';
import NumberUtils from '../utils/NumberUtils';

function Row({ stock, showChart }) {

  return (
    <tr onClick={showChart}>
      <Cell value={stock.name} isHeader={true} />
      <Cell value={stock.stockBuyingPrice} format={NumberUtils.formatCurrency} />
      <PromiseCell promise={stock.getCurrentPrice()} format={NumberUtils.formatCurrency} />
      <PromiseCell promise={stock.getStockAppreciation()} isColorEnabled={true} format={NumberUtils.formatPercentage} />
      <PromiseCell promise={stock.getCurrentValue()} format={NumberUtils.formatCurrency} />
      <PromiseCell promise={stock.getGainings()} isColorEnabled={true} format={NumberUtils.formatCurrency} />
      <Cell value={stock.pricePaidAfterTaxes} format={NumberUtils.formatCurrency} />
    </tr>
  );
}

export default class PortfolioTable extends Component {

	render() {

		return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th className="text-right" scope="col">Stock Buying Price</th>
            <th className="text-right" scope="col">Current Price</th>
            <th className="text-right" scope="col">Appreciation</th>
            <th className="text-right" scope="col">Current Value</th>
            <th className="text-right" scope="col">Gainings</th>
            <th className="text-right" scope="col">Amount Invested</th>
          </tr>
        </thead>
        <tbody>
          { this.props.stocks.map(stock => <Row key={stock.symbol} stock={stock} showChart={() => this.props.showChart(stock.symbol)} />) }
        </tbody>
      </table>
		);
	}
}
