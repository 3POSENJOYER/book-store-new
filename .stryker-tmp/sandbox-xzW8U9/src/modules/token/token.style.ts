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
import { css } from '@emotion/css';
export const body = stryMutAct_9fa48("1127") ? css`` : (stryCov_9fa48("1127"), css`
  	height: calc(100vh - 66px);   
	overflow-x: hidden;
	scroll-behavior: smooth;
	position: relative;  
	flex: 1 1 auto;
	overflow-y: auto;;
  	&::-webkit-scrollbar {
		width: 7px;
		height: 7px;
	}

  	&::-webkit-scrollbar-thumb {
		border-radius: 10px;
    background-color: var(--gray);

	}

	&::-webkit-scrollbar-track {
		background-color: transparent;
		margin-top: 38px;
	}
  
   &::-webkit-scrollbar-corner {
		background-color: transparent;
	}
`);
export const particles = stryMutAct_9fa48("1128") ? css`` : (stryCov_9fa48("1128"), css`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
  height: 100dvh; 
  width: 100vw;

  canvas {
    display: block;
    width: 100%;
    height: 100%;
  }
`);