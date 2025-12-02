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
import './blog.css';
const Blog: React.FC = () => {
  if (stryMutAct_9fa48("1120")) {
    {}
  } else {
    stryCov_9fa48("1120");
    return <div className='blog-container'>

			<div className='blog-breadcrumb'>
				<Link to='/'>HOME</Link> / <span className='active'>BLOG</span>
			</div>

			<h1 className='blog-title'>OUR BLOG</h1>
			<p className='blog-subtitle'>
				Insights, news and stories from the world of books
			</p>

			<div className='blog-grid'>

				<div className='blog-card'>
					<img src='src/modules/token/components/social/images/blog1.jpg' className='blog-img' alt='Books' />
					<div className='blog-content'>
						<h2 className='blog-card-title'>Top 10 Books to Read in 2025</h2>
						<p className='blog-card-text'>
							We've hand-picked the most anticipated books that will reshape your reading list this year.
						</p>
						<a className='blog-read-more'>Read More →</a>
					</div>
				</div>

				<div className='blog-card'>
					<img src='src/modules/token/components/social/images/blog2.jpg' className='blog-img' alt='Library' />
					<div className='blog-content'>
						<h2 className='blog-card-title'>How to Build a Powerful Reading Habit</h2>
						<p className='blog-card-text'>
							Simple strategies that help turn reading into a true passion.
						</p>
						<a className='blog-read-more'>Read More →</a>
					</div>
				</div>

				<div className='blog-card'>
					<img src='src/modules/token/components/social/images/blog3.jpg' className='blog-img' alt='Author' />
					<div className='blog-content'>
						<h2 className='blog-card-title'>
							Interview with Award-Winning Author Daniel Ross
						</h2>
						<p className='blog-card-text'>
							Exclusive insights into his creative process and inspiration behind his latest bestseller.
						</p>
						<a className='blog-read-more'>Read More →</a>
					</div>
				</div>

			</div>
		</div>;
  }
};
export default Blog;