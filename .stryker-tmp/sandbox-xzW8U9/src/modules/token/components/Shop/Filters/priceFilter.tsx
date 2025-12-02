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
import Slider from '@mui/material/Slider';
import React, { useState } from 'react';
const minDistance = 5;
function valuetext(value: number | undefined): string {
  if (stryMutAct_9fa48("786")) {
    {}
  } else {
    stryCov_9fa48("786");
    return stryMutAct_9fa48("787") ? `` : (stryCov_9fa48("787"), `${value}°C`);
  }
}

// eslint-disable-next-line @typescript-eslint/naming-convention
interface FilterProps {
  setValue1: React.Dispatch<React.SetStateAction<Array<number>>>;
  min: number;
  max: number;
  value1: Array<number>;
}
const PriceFilter: React.FC<FilterProps> = ({
  setValue1,
  value1,
  min,
  max
}) => {
  if (stryMutAct_9fa48("788")) {
    {}
  } else {
    stryCov_9fa48("788");
    const [, setError] = useState(stryMutAct_9fa48("789") ? true : (stryCov_9fa48("789"), false));
    const handleChange1 = (event: Event, newValue: Array<number>, activeThumb: number): void => {
      if (stryMutAct_9fa48("790")) {
        {}
      } else {
        stryCov_9fa48("790");
        if (stryMutAct_9fa48("793") ? newValue[0] === undefined && newValue[1] === undefined : stryMutAct_9fa48("792") ? false : stryMutAct_9fa48("791") ? true : (stryCov_9fa48("791", "792", "793"), (stryMutAct_9fa48("795") ? newValue[0] !== undefined : stryMutAct_9fa48("794") ? false : (stryCov_9fa48("794", "795"), newValue[0] === undefined)) || (stryMutAct_9fa48("797") ? newValue[1] !== undefined : stryMutAct_9fa48("796") ? false : (stryCov_9fa48("796", "797"), newValue[1] === undefined)))) {
          if (stryMutAct_9fa48("798")) {
            {}
          } else {
            stryCov_9fa48("798");
            setError(stryMutAct_9fa48("799") ? false : (stryCov_9fa48("799"), true));
            return;
          }
        }
        if (stryMutAct_9fa48("802") ? value1[0] === undefined && value1[1] === undefined : stryMutAct_9fa48("801") ? false : stryMutAct_9fa48("800") ? true : (stryCov_9fa48("800", "801", "802"), (stryMutAct_9fa48("804") ? value1[0] !== undefined : stryMutAct_9fa48("803") ? false : (stryCov_9fa48("803", "804"), value1[0] === undefined)) || (stryMutAct_9fa48("806") ? value1[1] !== undefined : stryMutAct_9fa48("805") ? false : (stryCov_9fa48("805", "806"), value1[1] === undefined)))) {
          if (stryMutAct_9fa48("807")) {
            {}
          } else {
            stryCov_9fa48("807");
            setError(stryMutAct_9fa48("808") ? false : (stryCov_9fa48("808"), true));
            return;
          }
        }
        if (stryMutAct_9fa48("811") ? activeThumb !== 0 : stryMutAct_9fa48("810") ? false : stryMutAct_9fa48("809") ? true : (stryCov_9fa48("809", "810", "811"), activeThumb === 0)) {
          if (stryMutAct_9fa48("812")) {
            {}
          } else {
            stryCov_9fa48("812");
            setValue1(stryMutAct_9fa48("813") ? [] : (stryCov_9fa48("813"), [stryMutAct_9fa48("814") ? Math.max(newValue[0], value1[1] - minDistance) : (stryCov_9fa48("814"), Math.min(newValue[0], stryMutAct_9fa48("815") ? value1[1] + minDistance : (stryCov_9fa48("815"), value1[1] - minDistance))), value1[1]]));
          }
        } else {
          if (stryMutAct_9fa48("816")) {
            {}
          } else {
            stryCov_9fa48("816");
            setValue1(stryMutAct_9fa48("817") ? [] : (stryCov_9fa48("817"), [value1[0], stryMutAct_9fa48("818") ? Math.min(newValue[1], value1[0] + minDistance) : (stryCov_9fa48("818"), Math.max(newValue[1], stryMutAct_9fa48("819") ? value1[0] - minDistance : (stryCov_9fa48("819"), value1[0] + minDistance)))]));
          }
        }
      }
    };
    return <Slider min={min} max={max} value={value1} onChange={handleChange1} valueLabelDisplay='auto' getAriaLabel={(): string => {
      if (stryMutAct_9fa48("820")) {
        {}
      } else {
        stryCov_9fa48("820");
        return stryMutAct_9fa48("821") ? "" : (stryCov_9fa48("821"), 'Minimum distance');
      }
    }} getAriaValueText={valuetext} disableSwap />;
  }
};
export default PriceFilter;