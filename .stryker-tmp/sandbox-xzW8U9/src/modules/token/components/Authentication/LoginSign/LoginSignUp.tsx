/* eslint-disable no-mixed-spaces-and-tabs */
// @ts-nocheck

/* eslint-disable indent */function stryNS_9fa48() {
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
import { Link, useNavigate } from 'react-router-dom';
import './LoginSignUp.css';
const LoginSignUp: React.FC = () => {
  if (stryMutAct_9fa48("177")) {
    {}
  } else {
    stryCov_9fa48("177");
    const [activeTab, setActiveTab] = useState(stryMutAct_9fa48("178") ? "" : (stryCov_9fa48("178"), 'tabButton1'));
    const [email, setEmail] = useState(stryMutAct_9fa48("179") ? "Stryker was here!" : (stryCov_9fa48("179"), ''));
    const [password, setPassword] = useState(stryMutAct_9fa48("180") ? "Stryker was here!" : (stryCov_9fa48("180"), ''));
    const [name, setName] = useState(stryMutAct_9fa48("181") ? "Stryker was here!" : (stryCov_9fa48("181"), ''));
    const navigate = useNavigate();
    const handleTab = (tab: string): void => {
      if (stryMutAct_9fa48("182")) {
        {}
      } else {
        stryCov_9fa48("182");
        setActiveTab(tab);
      }
    };
    const HandleSubmit = async (e: React.FormEvent): Promise<void> => {
      if (stryMutAct_9fa48("183")) {
        {}
      } else {
        stryCov_9fa48("183");
        e.preventDefault();
        const body = (stryMutAct_9fa48("186") ? activeTab !== 'tabButton1' : stryMutAct_9fa48("185") ? false : stryMutAct_9fa48("184") ? true : (stryCov_9fa48("184", "185", "186"), activeTab === (stryMutAct_9fa48("187") ? "" : (stryCov_9fa48("187"), 'tabButton1')))) ? JSON.stringify(stryMutAct_9fa48("188") ? {} : (stryCov_9fa48("188"), {
          email,
          password
        })) : JSON.stringify(stryMutAct_9fa48("189") ? {} : (stryCov_9fa48("189"), {
          name,
          email,
          password
        }));
        const url = (stryMutAct_9fa48("192") ? activeTab !== 'tabButton1' : stryMutAct_9fa48("191") ? false : stryMutAct_9fa48("190") ? true : (stryCov_9fa48("190", "191", "192"), activeTab === (stryMutAct_9fa48("193") ? "" : (stryCov_9fa48("193"), 'tabButton1')))) ? stryMutAct_9fa48("194") ? "" : (stryCov_9fa48("194"), 'http://localhost:3000/api/login') : stryMutAct_9fa48("195") ? "" : (stryCov_9fa48("195"), 'http://localhost:3000/api/register');
        try {
          if (stryMutAct_9fa48("196")) {
            {}
          } else {
            stryCov_9fa48("196");
            const res = await fetch(url, stryMutAct_9fa48("197") ? {} : (stryCov_9fa48("197"), {
              method: stryMutAct_9fa48("198") ? "" : (stryCov_9fa48("198"), 'POST'),
              headers: stryMutAct_9fa48("199") ? {} : (stryCov_9fa48("199"), {
                'Content-type': stryMutAct_9fa48("200") ? "" : (stryCov_9fa48("200"), 'application/json; charset=UTF-8')
              }),
              body
            }));
            const data = await res.json();
            console.log(stryMutAct_9fa48("201") ? "" : (stryCov_9fa48("201"), 'Response:'), data);
            if (stryMutAct_9fa48("203") ? false : stryMutAct_9fa48("202") ? true : (stryCov_9fa48("202", "203"), res.ok)) {
              if (stryMutAct_9fa48("204")) {
                {}
              } else {
                stryCov_9fa48("204");
                localStorage.setItem(stryMutAct_9fa48("205") ? "" : (stryCov_9fa48("205"), 'user'), JSON.stringify(data.user));
                navigate(stryMutAct_9fa48("206") ? "" : (stryCov_9fa48("206"), '/shop'));
              }
            } else {
              if (stryMutAct_9fa48("207")) {
                {}
              } else {
                stryCov_9fa48("207");
                alert(stryMutAct_9fa48("210") ? data.message && 'Сталася помилка' : stryMutAct_9fa48("209") ? false : stryMutAct_9fa48("208") ? true : (stryCov_9fa48("208", "209", "210"), data.message || (stryMutAct_9fa48("211") ? "" : (stryCov_9fa48("211"), 'Сталася помилка'))));
              }
            }
          }
        } catch (err) {
          if (stryMutAct_9fa48("212")) {
            {}
          } else {
            stryCov_9fa48("212");
            console.log(stryMutAct_9fa48("213") ? "" : (stryCov_9fa48("213"), 'Error:'), err);
            alert(stryMutAct_9fa48("214") ? "" : (stryCov_9fa48("214"), 'Не вдалося з\'єднатися з сервером'));
          }
        }
      }
    };
    return <>
			<div className='loginSignUpSection'>
				<div className='loginSignUpContainer'>
					<div className='loginSignUpTabs'>
						<p onClick={(): void => {
              if (stryMutAct_9fa48("215")) {
                {}
              } else {
                stryCov_9fa48("215");
                handleTab(stryMutAct_9fa48("216") ? "" : (stryCov_9fa48("216"), 'tabButton1'));
              }
            }} className={(stryMutAct_9fa48("219") ? activeTab !== 'tabButton1' : stryMutAct_9fa48("218") ? false : stryMutAct_9fa48("217") ? true : (stryCov_9fa48("217", "218", "219"), activeTab === (stryMutAct_9fa48("220") ? "" : (stryCov_9fa48("220"), 'tabButton1')))) ? stryMutAct_9fa48("221") ? "" : (stryCov_9fa48("221"), 'active') : stryMutAct_9fa48("222") ? "Stryker was here!" : (stryCov_9fa48("222"), '')}>
							Login
						</p>
						<p onClick={(): void => {
              if (stryMutAct_9fa48("223")) {
                {}
              } else {
                stryCov_9fa48("223");
                handleTab(stryMutAct_9fa48("224") ? "" : (stryCov_9fa48("224"), 'tabButton2'));
              }
            }} className={(stryMutAct_9fa48("227") ? activeTab !== 'tabButton2' : stryMutAct_9fa48("226") ? false : stryMutAct_9fa48("225") ? true : (stryCov_9fa48("225", "226", "227"), activeTab === (stryMutAct_9fa48("228") ? "" : (stryCov_9fa48("228"), 'tabButton2')))) ? stryMutAct_9fa48("229") ? "" : (stryCov_9fa48("229"), 'active') : stryMutAct_9fa48("230") ? "Stryker was here!" : (stryCov_9fa48("230"), '')}>
							Register
						</p>
					</div>

					<div className='loginSignUpTabsContent'>
						{stryMutAct_9fa48("233") ? activeTab === 'tabButton1' || <div className='loginSignUpTabsContentLogin'>
								<form onSubmit={HandleSubmit}>
									<input value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                  setEmail(e.target.value);
                }} type='email' placeholder='Email address *' required />

									<input value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                  setPassword(e.target.value);
                }} type='password' placeholder='Password *' required />

									<div className='loginSignUpForgetPass'>
										<label>
											<input type='checkbox' className='brandRadio' />
											<p>Remember me</p>
										</label>
										<p>
											<Link to='/resetPassword'>Lost password?</Link>
										</p>
									</div>

									<button type='submit'>Log In</button>
								</form>

								<div className='loginSignUpTabsContentLoginText'>
									<p>
										No account yet?{' '}
										<span onClick={(): void => {
                    handleTab('tabButton2');
                  }}>
											Create Account
										</span>
									</p>
								</div>
							</div> : stryMutAct_9fa48("232") ? false : stryMutAct_9fa48("231") ? true : (stryCov_9fa48("231", "232", "233"), (stryMutAct_9fa48("235") ? activeTab !== 'tabButton1' : stryMutAct_9fa48("234") ? true : (stryCov_9fa48("234", "235"), activeTab === (stryMutAct_9fa48("236") ? "" : (stryCov_9fa48("236"), 'tabButton1')))) && <div className='loginSignUpTabsContentLogin'>
								<form onSubmit={HandleSubmit}>
									<input value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                  if (stryMutAct_9fa48("237")) {
                    {}
                  } else {
                    stryCov_9fa48("237");
                    setEmail(e.target.value);
                  }
                }} type='email' placeholder='Email address *' required />

									<input value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                  if (stryMutAct_9fa48("238")) {
                    {}
                  } else {
                    stryCov_9fa48("238");
                    setPassword(e.target.value);
                  }
                }} type='password' placeholder='Password *' required />

									<div className='loginSignUpForgetPass'>
										<label>
											<input type='checkbox' className='brandRadio' />
											<p>Remember me</p>
										</label>
										<p>
											<Link to='/resetPassword'>Lost password?</Link>
										</p>
									</div>

									<button type='submit'>Log In</button>
								</form>

								<div className='loginSignUpTabsContentLoginText'>
									<p>
										No account yet?{stryMutAct_9fa48("239") ? "" : (stryCov_9fa48("239"), ' ')}
										<span onClick={(): void => {
                    if (stryMutAct_9fa48("240")) {
                      {}
                    } else {
                      stryCov_9fa48("240");
                      handleTab(stryMutAct_9fa48("241") ? "" : (stryCov_9fa48("241"), 'tabButton2'));
                    }
                  }}>
											Create Account
										</span>
									</p>
								</div>
							</div>)}

						{stryMutAct_9fa48("244") ? activeTab === 'tabButton2' || <div className='loginSignUpTabsContentRegister'>
								<form onSubmit={HandleSubmit}>
									<input value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                  setName(e.target.value);
                }} type='text' placeholder='User name' required />

									<input value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                  setEmail(e.target.value);
                }} type='email' placeholder='Email address *' required />

									<input value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                  setPassword(e.target.value);
                }} type='password' placeholder='Password *' required />

									<p>
										Your personal data will be used for managing your account as
										described in{' '}
										<Link to='/terms' style={{
                    textDecoration: 'none',
                    color: '#c32929'
                  }}>
											privacy policy
										</Link>
										.
									</p>

									<button type='submit'>Register</button>
								</form>
							</div> : stryMutAct_9fa48("243") ? false : stryMutAct_9fa48("242") ? true : (stryCov_9fa48("242", "243", "244"), (stryMutAct_9fa48("246") ? activeTab !== 'tabButton2' : stryMutAct_9fa48("245") ? true : (stryCov_9fa48("245", "246"), activeTab === (stryMutAct_9fa48("247") ? "" : (stryCov_9fa48("247"), 'tabButton2')))) && <div className='loginSignUpTabsContentRegister'>
								<form onSubmit={HandleSubmit}>
									<input value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                  if (stryMutAct_9fa48("248")) {
                    {}
                  } else {
                    stryCov_9fa48("248");
                    setName(e.target.value);
                  }
                }} type='text' placeholder='User name' required />

									<input value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                  if (stryMutAct_9fa48("249")) {
                    {}
                  } else {
                    stryCov_9fa48("249");
                    setEmail(e.target.value);
                  }
                }} type='email' placeholder='Email address *' required />

									<input value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                  if (stryMutAct_9fa48("250")) {
                    {}
                  } else {
                    stryCov_9fa48("250");
                    setPassword(e.target.value);
                  }
                }} type='password' placeholder='Password *' required />

									<p>
										Your personal data will be used for managing your account as
										described in{stryMutAct_9fa48("251") ? "" : (stryCov_9fa48("251"), ' ')}
										<Link to='/terms' style={stryMutAct_9fa48("252") ? {} : (stryCov_9fa48("252"), {
                    textDecoration: stryMutAct_9fa48("253") ? "" : (stryCov_9fa48("253"), 'none'),
                    color: stryMutAct_9fa48("254") ? "" : (stryCov_9fa48("254"), '#c32929')
                  })}>
											privacy policy
										</Link>
										.
									</p>

									<button type='submit'>Register</button>
								</form>
							</div>)}
					</div>
				</div>
			</div>
		</>;
  }
};
export default LoginSignUp;