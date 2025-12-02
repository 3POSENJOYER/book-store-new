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
import './contact.css';
const Contact: React.FC = () => {
  if (stryMutAct_9fa48("1121")) {
    {}
  } else {
    stryCov_9fa48("1121");
    return <div className='contact-container'>

			<div className='contact-breadcrumb'>
				<Link to='/'>HOME</Link> / <span className='active'>CONTACT</span>
			</div>

			<h1 className='contact-title'>CONTACT US</h1>
			<p className='contact-subtitle'>
				We’re here to help. Reach out with any questions.
			</p>

			<div className='contact-grid'>

				<div className='contact-box'>
					<h2>Get In Touch</h2>
					<p>
						Have questions about your order? Looking for a specific book?
						Our support team is ready to assist you.
					</p>

					<form className='contact-form'>
						<input type='text' placeholder='Your Name' required />
						<input type='email' placeholder='Email Address' required />
						<textarea placeholder='Message' rows={5} required />
						<button type='submit'>Send Message</button>
					</form>
				</div>

				<div className='contact-info'>
					<h2>Contact Information</h2>
					<p>Email: support@bookhaven.com</p>
					<p>Phone: +1 555-123-4567</p>
					<p>Working hours: Mon–Fri, 9:00–18:00</p>

					<div className='contact-map'>
						<iframe title='map' loading='lazy' src='https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed'></iframe>
					</div>
				</div>

			</div>

		</div>;
  }
};
export default Contact;