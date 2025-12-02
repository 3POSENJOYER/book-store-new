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
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/header.component';
import { ProductDeatlis } from './components/products/productDetails';
import { Products } from './components/products/products';
import Authentication from '../../pages/Authentication';
import Payment from '../../pages/Payment';
import ShopDetails from './components/Shop/ShopDetails/ShopDetails';
import ResetPass from './components/Authentication/Reset/ResetPass';
import AddBook from './components/AddBook/addBook';
import Shop from '../../pages/Shop';
import Blog from './components/social/blog';
import About from './components/social/About';
import Contact from './components/social/contact';
import { Main } from './main';
export const App: React.FC = () => {
  if (stryMutAct_9fa48("1125")) {
    {}
  } else {
    stryCov_9fa48("1125");
    return <div>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/products' element={<Products />} />
					<Route path='/loginSignUp' element={<Authentication />} />
					<Route path='/resetPassword' element={<ResetPass />} />
					<Route path='/blog' element={<Blog />} />
					<Route path='/about' element={<About />} />
					<Route path='/shop' element={<Shop />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/cart' element={<Payment />} />
					<Route path='/AddBook' element={<AddBook />} />
					<Route path='/product/:id' element={<ProductDeatlis />} />{stryMutAct_9fa48("1126") ? "" : (stryCov_9fa48("1126"), ' ')}
				</Routes>
			</BrowserRouter>
		</div>;
  }
};
export default App;