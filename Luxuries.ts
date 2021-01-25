import LuxuriesYield from '@civ-clone/base-city-yield-luxuries/Luxuries';
import TradeRate from '@civ-clone/core-trade-rate/TradeRate';
import Yield from '@civ-clone/core-yield/Yield';

export class Luxuries extends TradeRate {
  static tradeYield: typeof Yield = LuxuriesYield;
}

export default Luxuries;
