/* eslint-disable no-unused-expressions */
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
import { injectGlobal } from '@emotion/css';
import { orbitronRegular } from './fonts';
stryMutAct_9fa48("1251") ? injectGlobal`` : (stryCov_9fa48("1251"), injectGlobal`
	html, body {
		height: 100vh;
		background-color: var(--black);
	}

	body {
		line-height: 1.5;
		-webkit-font-smoothing: antialiased;
	}

	#root, :root {
		width: 100%;
		height: 100vh;
		isolation: isolate;
		/* background-color: var(--gray-700); */
	}

	*, *::before, *::after {
		box-sizing: border-box;
	}

	* {
		margin: 0;
	}

	img, picture, video, canvas, svg {
		display: block;
		max-width: 100%;
	}

	p, h1, h2, h3, h4, h5, h6, a, {
		${orbitronRegular(12)}
		overflow-wrap: break-word;
		margin-bottom: 0 !important;
		color: var(--white);
	}

	input, button, textarea, select {
		${orbitronRegular(12)}
		padding: 0;
	}

	button {
		cursor: pointer;
	}

	.hidden-el {
		position: absolute;
		width: 1px;
		height: 1px;
		margin: -1px;
		border: 0;
		padding: 0;
		clip: rect(0 0 0 0);
		overflow: hidden;
	}

	*:active {
		cursor: url('../../../src/assets/icons/cursor-click.svg'), pointer;
   }

	.bp5-portal {
		outline: none !important;
		& div {
			outline: none !important;
		}
	}
/* 
	[data-theme="dark"] .bp5-drawer-header > button > svg > path {
		fill: var(--base-white);
	}

	[data-theme="light"] .bp5-drawer-header > button > svg > path {
		fill: var(--gray-600);
	} */
`);