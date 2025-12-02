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
import { useState, useEffect } from 'react';
interface IMousePosition {
  x: number;
  y: number;
}
export default function useMousePosition(): IMousePosition {
  if (stryMutAct_9fa48("468")) {
    {}
  } else {
    stryCov_9fa48("468");
    const [mousePosition, setMousePosition] = useState<IMousePosition>(stryMutAct_9fa48("469") ? {} : (stryCov_9fa48("469"), {
      x: 0,
      y: 0
    }));
    useEffect(() => {
      if (stryMutAct_9fa48("470")) {
        {}
      } else {
        stryCov_9fa48("470");
        const handleMouseMove = (event: MouseEvent): void => {
          if (stryMutAct_9fa48("471")) {
            {}
          } else {
            stryCov_9fa48("471");
            setMousePosition(stryMutAct_9fa48("472") ? {} : (stryCov_9fa48("472"), {
              x: event.clientX,
              y: event.clientY
            }));
          }
        };
        window.addEventListener(stryMutAct_9fa48("473") ? "" : (stryCov_9fa48("473"), 'mousemove'), handleMouseMove);
        return () => {
          if (stryMutAct_9fa48("474")) {
            {}
          } else {
            stryCov_9fa48("474");
            window.removeEventListener(stryMutAct_9fa48("475") ? "" : (stryCov_9fa48("475"), 'mousemove'), handleMouseMove);
          }
        };
      }
    }, stryMutAct_9fa48("476") ? ["Stryker was here"] : (stryCov_9fa48("476"), []));
    return mousePosition;
  }
}