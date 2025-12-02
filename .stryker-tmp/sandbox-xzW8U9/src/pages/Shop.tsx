// @ts-nocheck
function stryNS_9fa48() {
  var g = typeof globalThis === 'object' && globalThis && globalThis.Math === Math && globalThis || new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
import React, { useState } from 'react';
import Filter from '../modules/token/components/Shop/Filters/Filter';
import '../modules/token/components/Shop/Filters/Filter.css';
import ShopDetails from '../modules/token/components/Shop/ShopDetails/ShopDetails';
import StoreData from '../modules/token/components/products/data';

// eslint-disable-next-line @typescript-eslint/naming-convention
interface Product {
  productID: number;
  productName: string;
  produtDescription: string;
  frontImg?: string;
  backImg?: string;
  productPrice: number;
  productReviews: string;
}
const Shop: React.FC = () => {
  if (stryMutAct_9fa48("1131")) {
    {}
  } else {
    stryCov_9fa48("1131");
    const [filtered, setFiltered] = useState<Array<Product>>(StoreData);
    const prices = StoreData.map(p => {
      if (stryMutAct_9fa48("1132")) {
        {}
      } else {
        stryCov_9fa48("1132");
        return p.productPrice;
      }
    });
    const min = stryMutAct_9fa48("1133") ? Math.max(...prices) : (stryCov_9fa48("1133"), Math.min(...prices));
    const max = stryMutAct_9fa48("1134") ? Math.min(...prices) : (stryCov_9fa48("1134"), Math.max(...prices));
    const [value1, setValue1] = useState<Array<number>>(stryMutAct_9fa48("1135") ? [] : (stryCov_9fa48("1135"), [min, max]));
    return <div className='container'>
			<Filter setFiltered={setFiltered} value1={value1} setValue1={setValue1} min={min} max={max} />
			<ShopDetails value1={value1} filtered={filtered} />
		</div>;
  }
};
export default Shop;