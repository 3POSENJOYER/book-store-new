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
import type { ReactNode } from 'react';
import React, { Component } from 'react';
type Props = {
  children?: ReactNode;
};
interface IState {
  hasError: boolean;
}
class ErrorBoundary extends Component<Props, IState> {
  public state: IState = stryMutAct_9fa48("1") ? {} : (stryCov_9fa48("1"), {
    hasError: stryMutAct_9fa48("2") ? true : (stryCov_9fa48("2"), false)
  });
  public static getDerivedStateFromError(): IState {
    if (stryMutAct_9fa48("3")) {
      {}
    } else {
      stryCov_9fa48("3");
      return stryMutAct_9fa48("4") ? {} : (stryCov_9fa48("4"), {
        hasError: stryMutAct_9fa48("5") ? false : (stryCov_9fa48("5"), true)
      });
    }
  }
  public render(): React.ReactNode {
    if (stryMutAct_9fa48("6")) {
      {}
    } else {
      stryCov_9fa48("6");
      if (stryMutAct_9fa48("8") ? false : stryMutAct_9fa48("7") ? true : (stryCov_9fa48("7", "8"), this.state.hasError)) {
        if (stryMutAct_9fa48("9")) {
          {}
        } else {
          stryCov_9fa48("9");
          return <h1>Sorry... there was an error</h1>;
        }
      }
      return this.props.children;
    }
  }
}
export default ErrorBoundary;