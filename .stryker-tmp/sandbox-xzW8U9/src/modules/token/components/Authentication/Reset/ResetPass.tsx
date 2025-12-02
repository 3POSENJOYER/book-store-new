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
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ResetPass.css';
const ResetPass: React.FC = () => {
  if (stryMutAct_9fa48("255")) {
    {}
  } else {
    stryCov_9fa48("255");
    const [email, setEmail] = useState(stryMutAct_9fa48("256") ? "Stryker was here!" : (stryCov_9fa48("256"), ''));
    const [response, setResponse] = useState(stryMutAct_9fa48("257") ? "Stryker was here!" : (stryCov_9fa48("257"), ''));
    const HandleSubmit = async (e: React.FormEvent): Promise<void> => {
      if (stryMutAct_9fa48("258")) {
        {}
      } else {
        stryCov_9fa48("258");
        e.preventDefault();
        try {
          if (stryMutAct_9fa48("259")) {
            {}
          } else {
            stryCov_9fa48("259");
            const res = await fetch(stryMutAct_9fa48("260") ? "" : (stryCov_9fa48("260"), '/http://localhost:3000/api/reset'), stryMutAct_9fa48("261") ? {} : (stryCov_9fa48("261"), {
              method: stryMutAct_9fa48("262") ? "" : (stryCov_9fa48("262"), 'POST'),
              headers: stryMutAct_9fa48("263") ? {} : (stryCov_9fa48("263"), {
                'Content-Type': stryMutAct_9fa48("264") ? "" : (stryCov_9fa48("264"), 'application/json; charset=UTF-8')
              }),
              body: JSON.stringify(stryMutAct_9fa48("265") ? {} : (stryCov_9fa48("265"), {
                email
              }))
            }));
            const data = await res.json();
            setResponse(stryMutAct_9fa48("268") ? data.message && 'Email sent!' : stryMutAct_9fa48("267") ? false : stryMutAct_9fa48("266") ? true : (stryCov_9fa48("266", "267", "268"), data.message || (stryMutAct_9fa48("269") ? "" : (stryCov_9fa48("269"), 'Email sent!'))));
          }
        } catch (err) {
          if (stryMutAct_9fa48("270")) {
            {}
          } else {
            stryCov_9fa48("270");
            console.error(err);
            setResponse(stryMutAct_9fa48("271") ? "" : (stryCov_9fa48("271"), 'Error sending email'));
          }
        }
      }
    };
    return <div className='resetPasswordSection'>
			<h2>Reset Your Password</h2>

			<div className='resetPasswordContainer'>
				<p>We will send you an email to reset your password</p>

				<form onSubmit={HandleSubmit}>
					<input type='email' required placeholder='Email address *' onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
            if (stryMutAct_9fa48("272")) {
              {}
            } else {
              stryCov_9fa48("272");
              setEmail(e.target.value);
            }
          }} />
					<button type='submit'>Submit</button>
				</form>
			</div>

			{stryMutAct_9fa48("275") ? response || <div className='response'>{response}</div> : stryMutAct_9fa48("274") ? false : stryMutAct_9fa48("273") ? true : (stryCov_9fa48("273", "274", "275"), response && <div className='response'>{response}</div>)}

			<p>
				Back to{stryMutAct_9fa48("276") ? "" : (stryCov_9fa48("276"), ' ')}
				<Link to='/loginSignUp'>
					<span>Login</span>
				</Link>
			</p>
		</div>;
  }
};
export default ResetPass;