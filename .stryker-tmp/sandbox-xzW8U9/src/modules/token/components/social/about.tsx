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
import { Link } from 'react-router-dom';
import './about.css';
const About: React.FC = () => {
  if (stryMutAct_9fa48("1119")) {
    {}
  } else {
    stryCov_9fa48("1119");
    return <div className='about-container'>

			<div className='about-breadcrumb'>
				<Link to='/'>HOME</Link> / <span className='active'>ABOUT</span>
			</div>

			<h1 className='about-title'>ABOUT US</h1>
			<p className='about-subtitle'>
				Your destination for books, inspiration and knowledge.
			</p>

			<div className='about-content'>

				<div className='about-text'>
					<h2>Who We Are</h2>
					<p>
						We are passionate storytellers, readers and dreamers dedicated to connecting
						people with books that inspire, educate and entertain. Our mission is to bring
						high-quality literature to everyone, everywhere.
					</p>

					<h2>Our Mission</h2>
					<p>
						To create a space where readers can explore, discover and fall in love with
						new stories. Whether you're searching for the latest bestseller or a timeless
						classic — our collection has something for every book lover.
					</p>

					<h2>Why Choose Us</h2>
					<ul>
						<li>✓ Wide selection of books from all genres</li>
						<li>✓ Premium customer experience</li>
						<li>✓ Secure payments and fast delivery</li>
						<li>✓ Passionate team of book experts</li>
					</ul>
				</div>

				<div className='about-image-wrapper'>
					<img className='about-image' src='src/modules/token/components/social/images/blog1.jpg' alt='About The Book Haven' />
				</div>

			</div>

		</div>;
  }
};
export default About;