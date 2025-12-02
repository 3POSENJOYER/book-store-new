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
import Badge from '@mui/material/Badge';
import React from 'react';
import { FaRegUser } from 'react-icons/fa6';
import { FiHeart, FiSearch } from 'react-icons/fi';
import { RiShoppingBagLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import logo from '../../../assets/icons/logo.png';
import './header.css';
export const Header: React.FC = () => {
  if (stryMutAct_9fa48("277")) {
    {}
  } else {
    stryCov_9fa48("277");
    const scrollToTop = (): void => {
      if (stryMutAct_9fa48("278")) {
        {}
      } else {
        stryCov_9fa48("278");
        window.scrollTo(stryMutAct_9fa48("279") ? {} : (stryCov_9fa48("279"), {
          top: 0,
          behavior: stryMutAct_9fa48("280") ? "" : (stryCov_9fa48("280"), 'smooth')
        }));
      }
    };
    return <>
			<nav className='navBar'>
				<div className='logoLinkContainer'>
					<div className='logoContainer'>
						<Link to='/' onClick={scrollToTop}>
							<img src={logo} alt='logo' />
						</Link>
					</div>
					<div className='linkContainer'>
						<ul>
							<li>
								<Link to='/' onClick={scrollToTop}>
									HOME
								</Link>
							</li>
							<li>
								<Link to='/shop' onClick={scrollToTop}>
									SHOP
								</Link>
							</li>
							<li>
								<Link to='/blog' onClick={scrollToTop}>
									BLOG
								</Link>
							</li>
							<li>
								<Link to='/about' onClick={scrollToTop}>
									ABOUT
								</Link>
							</li>
							<li>
								<Link to='/contact' onClick={scrollToTop}>
									CONTACT
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className='iconContainer'>
					<FiSearch size={22} onClick={scrollToTop} />
					<Link to='/loginSignUp' onClick={scrollToTop}>
						<FaRegUser size={22} />
					</Link>
					<Link to='/cart' onClick={scrollToTop}>
						<Badge badgeContent='0' color='primary' anchorOrigin={stryMutAct_9fa48("281") ? {} : (stryCov_9fa48("281"), {
              vertical: stryMutAct_9fa48("282") ? "" : (stryCov_9fa48("282"), 'bottom'),
              horizontal: stryMutAct_9fa48("283") ? "" : (stryCov_9fa48("283"), 'right')
            })}>
							<RiShoppingBagLine size={22} />
						</Badge>
					</Link>
					<FiHeart size={22} onClick={scrollToTop} />
				</div>
			</nav>
		</>;
  }
};
export default Header;