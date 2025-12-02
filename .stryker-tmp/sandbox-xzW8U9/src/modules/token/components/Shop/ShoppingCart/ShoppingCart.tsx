/* eslint-disable complexity */
// @ts-nocheck

/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-console */
/* eslint-disable max-lines */function stryNS_9fa48() {
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
import React, { useEffect, useState } from 'react';
import './ShoppingCart.css';
import { MdOutlineClose } from 'react-icons/md';
import { Link } from 'react-router-dom';

// Додайте типи для пропсів та стану
// eslint-disable-next-line @typescript-eslint/naming-convention
interface CartItem {
  productID: string;
  productName: string;
  productReviews: string;
  productPrice: number;
  quantity: number;
  frontImg: string;
}

// eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface
interface ShoppingCartProps {}
const ShoppingCart: React.FC<ShoppingCartProps> = () => {
  if (stryMutAct_9fa48("891")) {
    {}
  } else {
    stryCov_9fa48("891");
    const [activeTab, setActiveTab] = useState(stryMutAct_9fa48("892") ? "" : (stryCov_9fa48("892"), 'cartTab1'));
    const [payments, setPayments] = useState(stryMutAct_9fa48("893") ? true : (stryCov_9fa48("893"), false));
    const [cartItems, setCartItems] = useState<Array<CartItem>>(stryMutAct_9fa48("894") ? ["Stryker was here"] : (stryCov_9fa48("894"), []));
    const [totalPrice, setTotalPrice] = useState(0);
    const [orderNumber,,] = useState(stryMutAct_9fa48("895") ? "" : (stryCov_9fa48("895"), '12345'));
    useEffect(() => {
      if (stryMutAct_9fa48("896")) {
        {}
      } else {
        stryCov_9fa48("896");
        const fetchCartItems = async () => {
          if (stryMutAct_9fa48("897")) {
            {}
          } else {
            stryCov_9fa48("897");
            try {
              if (stryMutAct_9fa48("898")) {
                {}
              } else {
                stryCov_9fa48("898");
                const res = await fetch(stryMutAct_9fa48("899") ? "" : (stryCov_9fa48("899"), 'http://localhost:3000/cart'));
                if (stryMutAct_9fa48("902") ? false : stryMutAct_9fa48("901") ? true : stryMutAct_9fa48("900") ? res.ok : (stryCov_9fa48("900", "901", "902"), !res.ok)) {
                  if (stryMutAct_9fa48("903")) {
                    {}
                  } else {
                    stryCov_9fa48("903");
                    throw new Error(stryMutAct_9fa48("904") ? `` : (stryCov_9fa48("904"), `Response status: ${res.status}`));
                  }
                }
                const json = await res.json();
                setCartItems(json);
                const total = json.reduce((acc: number, item: CartItem) => {
                  if (stryMutAct_9fa48("905")) {
                    {}
                  } else {
                    stryCov_9fa48("905");
                    return stryMutAct_9fa48("906") ? acc - item.productPrice * item.quantity : (stryCov_9fa48("906"), acc + (stryMutAct_9fa48("907") ? item.productPrice / item.quantity : (stryCov_9fa48("907"), item.productPrice * item.quantity)));
                  }
                }, 0);
              }
            } catch (error) {
              if (stryMutAct_9fa48("908")) {
                {}
              } else {
                stryCov_9fa48("908");
                console.log(error.message);
              }
            }
          }
        };
        fetchCartItems();
      }
    }, stryMutAct_9fa48("909") ? ["Stryker was here"] : (stryCov_9fa48("909"), []));
    const currentDate = new Date();
    const scrollToTop = (): void => {
      if (stryMutAct_9fa48("910")) {
        {}
      } else {
        stryCov_9fa48("910");
        window.scrollTo(stryMutAct_9fa48("911") ? {} : (stryCov_9fa48("911"), {
          top: 0,
          behavior: stryMutAct_9fa48("912") ? "" : (stryCov_9fa48("912"), 'smooth')
        }));
      }
    };
    const handleQuantityChange = async (productID: string, quantity: number): Promise<void> => {
      if (stryMutAct_9fa48("913")) {
        {}
      } else {
        stryCov_9fa48("913");
        if (stryMutAct_9fa48("917") ? quantity >= 1 : stryMutAct_9fa48("916") ? quantity <= 1 : stryMutAct_9fa48("915") ? false : stryMutAct_9fa48("914") ? true : (stryCov_9fa48("914", "915", "916", "917"), quantity < 1)) {
          if (stryMutAct_9fa48("918")) {
            {}
          } else {
            stryCov_9fa48("918");
            return;
          }
        }
        try {
          if (stryMutAct_9fa48("919")) {
            {}
          } else {
            stryCov_9fa48("919");
            await fetch(stryMutAct_9fa48("920") ? `` : (stryCov_9fa48("920"), `http://localhost:3000/cart/${productID}`), stryMutAct_9fa48("921") ? {} : (stryCov_9fa48("921"), {
              method: stryMutAct_9fa48("922") ? "" : (stryCov_9fa48("922"), 'PATCH'),
              headers: stryMutAct_9fa48("923") ? {} : (stryCov_9fa48("923"), {
                'Content-Type': stryMutAct_9fa48("924") ? "" : (stryCov_9fa48("924"), 'application/json')
              }),
              body: JSON.stringify(stryMutAct_9fa48("925") ? {} : (stryCov_9fa48("925"), {
                quantity
              }))
            }));
            setCartItems(prevItems => {
              if (stryMutAct_9fa48("926")) {
                {}
              } else {
                stryCov_9fa48("926");
                return prevItems.map(item => {
                  if (stryMutAct_9fa48("927")) {
                    {}
                  } else {
                    stryCov_9fa48("927");
                    return (stryMutAct_9fa48("930") ? item.productID !== productID : stryMutAct_9fa48("929") ? false : stryMutAct_9fa48("928") ? true : (stryCov_9fa48("928", "929", "930"), item.productID === productID)) ? stryMutAct_9fa48("931") ? {} : (stryCov_9fa48("931"), {
                      ...item,
                      quantity
                    }) : item;
                  }
                });
              }
            });
          }
        } catch (err) {
          if (stryMutAct_9fa48("932")) {
            {}
          } else {
            stryCov_9fa48("932");
            console.error(err);
          }
        }
      }
    };
    const removeFromCart = async (productID: string) => {
      if (stryMutAct_9fa48("933")) {
        {}
      } else {
        stryCov_9fa48("933");
        try {
          if (stryMutAct_9fa48("934")) {
            {}
          } else {
            stryCov_9fa48("934");
            await fetch(stryMutAct_9fa48("935") ? `` : (stryCov_9fa48("935"), `http://localhost:3000/cart/${productID}`), stryMutAct_9fa48("936") ? {} : (stryCov_9fa48("936"), {
              method: stryMutAct_9fa48("937") ? "" : (stryCov_9fa48("937"), 'DELETE')
            }));
            setCartItems(prev => {
              if (stryMutAct_9fa48("938")) {
                {}
              } else {
                stryCov_9fa48("938");
                return stryMutAct_9fa48("939") ? prev : (stryCov_9fa48("939"), prev.filter(item => {
                  if (stryMutAct_9fa48("940")) {
                    {}
                  } else {
                    stryCov_9fa48("940");
                    return stryMutAct_9fa48("943") ? item.productID === productID : stryMutAct_9fa48("942") ? false : stryMutAct_9fa48("941") ? true : (stryCov_9fa48("941", "942", "943"), item.productID !== productID);
                  }
                }));
              }
            });
          }
        } catch (err) {
          if (stryMutAct_9fa48("944")) {
            {}
          } else {
            stryCov_9fa48("944");
            console.error(err);
          }
        }
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dispatch = (action: any) => {
      if (stryMutAct_9fa48("945")) {
        {}
      } else {
        stryCov_9fa48("945");
        console.log(stryMutAct_9fa48("946") ? "" : (stryCov_9fa48("946"), 'Dispatching action:'), action);
      }
    };
    const formatDate = (date: Date): string => {
      if (stryMutAct_9fa48("947")) {
        {}
      } else {
        stryCov_9fa48("947");
        return date.toLocaleDateString();
      }
    };
    const handleTabClick = (tab: string): void => {
      if (stryMutAct_9fa48("948")) {
        {}
      } else {
        stryCov_9fa48("948");
        if (stryMutAct_9fa48("951") ? tab === 'cartTab1' && cartItems.length > 0 : stryMutAct_9fa48("950") ? false : stryMutAct_9fa48("949") ? true : (stryCov_9fa48("949", "950", "951"), (stryMutAct_9fa48("953") ? tab !== 'cartTab1' : stryMutAct_9fa48("952") ? false : (stryCov_9fa48("952", "953"), tab === (stryMutAct_9fa48("954") ? "" : (stryCov_9fa48("954"), 'cartTab1')))) || (stryMutAct_9fa48("957") ? cartItems.length <= 0 : stryMutAct_9fa48("956") ? cartItems.length >= 0 : stryMutAct_9fa48("955") ? false : (stryCov_9fa48("955", "956", "957"), cartItems.length > 0)))) {
          if (stryMutAct_9fa48("958")) {
            {}
          } else {
            stryCov_9fa48("958");
            setActiveTab(tab);
          }
        }
      }
    };
    const [selectedPayment, setSelectedPayment] = useState(stryMutAct_9fa48("959") ? "" : (stryCov_9fa48("959"), 'Direct Bank Transfer'));
    const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      if (stryMutAct_9fa48("960")) {
        {}
      } else {
        stryCov_9fa48("960");
        setSelectedPayment(e.target.value);
      }
    };
    return <>
			<div className='shoppingCartSection'>

				<div className='shoppingCartTabsContainer'>
					<div className={stryMutAct_9fa48("961") ? `` : (stryCov_9fa48("961"), `shoppingCartTabs ${activeTab}`)}>
						<button className={(stryMutAct_9fa48("964") ? activeTab !== 'cartTab1' : stryMutAct_9fa48("963") ? false : stryMutAct_9fa48("962") ? true : (stryCov_9fa48("962", "963", "964"), activeTab === (stryMutAct_9fa48("965") ? "" : (stryCov_9fa48("965"), 'cartTab1')))) ? stryMutAct_9fa48("966") ? "" : (stryCov_9fa48("966"), 'active') : stryMutAct_9fa48("967") ? "Stryker was here!" : (stryCov_9fa48("967"), '')} onClick={() => {
              if (stryMutAct_9fa48("968")) {
                {}
              } else {
                stryCov_9fa48("968");
                handleTabClick(stryMutAct_9fa48("969") ? "" : (stryCov_9fa48("969"), 'cartTab1'));
                setPayments(stryMutAct_9fa48("970") ? true : (stryCov_9fa48("970"), false));
              }
            }} type='button'>
							<div className='shoppingCartTabsNumber'>
								<h3>01</h3>
								<div className='shoppingCartTabsHeading'>
									<h3>Shopping Bag</h3>
									<p>Manage Your Items List</p>
								</div>
							</div>
						</button>
						<button className={(stryMutAct_9fa48("973") ? activeTab !== 'cartTab2' : stryMutAct_9fa48("972") ? false : stryMutAct_9fa48("971") ? true : (stryCov_9fa48("971", "972", "973"), activeTab === (stryMutAct_9fa48("974") ? "" : (stryCov_9fa48("974"), 'cartTab2')))) ? stryMutAct_9fa48("975") ? "" : (stryCov_9fa48("975"), 'active') : stryMutAct_9fa48("976") ? "Stryker was here!" : (stryCov_9fa48("976"), '')} onClick={() => {
              if (stryMutAct_9fa48("977")) {
                {}
              } else {
                stryCov_9fa48("977");
                handleTabClick(stryMutAct_9fa48("978") ? "" : (stryCov_9fa48("978"), 'cartTab2'));
                setPayments(stryMutAct_9fa48("979") ? true : (stryCov_9fa48("979"), false));
              }
            }} disabled={stryMutAct_9fa48("982") ? cartItems.length !== 0 : stryMutAct_9fa48("981") ? false : stryMutAct_9fa48("980") ? true : (stryCov_9fa48("980", "981", "982"), cartItems.length === 0)} type='button'>
							<div className='shoppingCartTabsNumber'>
								<h3>02</h3>
								<div className='shoppingCartTabsHeading'>
									<h3>Shipping and Checkout</h3>
									<p>Checkout Your Items List</p>
								</div>
							</div>
						</button>
						<button className={(stryMutAct_9fa48("985") ? activeTab !== 'cartTab3' : stryMutAct_9fa48("984") ? false : stryMutAct_9fa48("983") ? true : (stryCov_9fa48("983", "984", "985"), activeTab === (stryMutAct_9fa48("986") ? "" : (stryCov_9fa48("986"), 'cartTab3')))) ? stryMutAct_9fa48("987") ? "" : (stryCov_9fa48("987"), 'active') : stryMutAct_9fa48("988") ? "Stryker was here!" : (stryCov_9fa48("988"), '')} onClick={() => {
              if (stryMutAct_9fa48("989")) {
                {}
              } else {
                stryCov_9fa48("989");
                handleTabClick(stryMutAct_9fa48("990") ? "" : (stryCov_9fa48("990"), 'cartTab3'));
              }
            }} disabled={stryMutAct_9fa48("993") ? cartItems.length === 0 && !payments : stryMutAct_9fa48("992") ? false : stryMutAct_9fa48("991") ? true : (stryCov_9fa48("991", "992", "993"), (stryMutAct_9fa48("995") ? cartItems.length !== 0 : stryMutAct_9fa48("994") ? false : (stryCov_9fa48("994", "995"), cartItems.length === 0)) || (stryMutAct_9fa48("996") ? payments : (stryCov_9fa48("996"), !payments)))} type='button'>
							<div className='shoppingCartTabsNumber'>
								<h3>03</h3>
								<div className='shoppingCartTabsHeading'>
									<h3>Confirmation</h3>
									<p>Review And Submit Your Order</p>
								</div>
							</div>
						</button>
					</div>
					<div className='shoppingCartTabsContent'>
						{/* tab1 */}
						{stryMutAct_9fa48("999") ? activeTab === 'cartTab1' || <div className='shoppingBagSection'>
								<div className='shoppingBagTableSection'>
									<table className='shoppingBagTable'>
										<thead>
											<tr>
												<th>Product</th>
												<th></th>
												<th>Price</th>
												<th>Quantity</th>
												<th>Subtotal</th>
												<th></th>
											</tr>
										</thead>
										<tbody>
											{cartItems.length > 0 ? cartItems.map(item => {
                      return <tr key={item.productID}>
																<td data-label='Product'>
																	<div className='shoppingBagTableImg'>
																		<Link to='/product' onClick={scrollToTop}>
																			<img src={item.frontImg} alt={item.productName} />
																		</Link>
																	</div>
																</td>
																<td data-label=''>
																	<div className='shoppingBagTableProductDetail'>
																		<Link to='/product' onClick={scrollToTop}>
																			<h4>{item.productName}</h4>
																		</Link>
																		<p>{item.productReviews}</p>
																	</div>
																</td>
																<td data-label='Price' style={{
                          textAlign: 'center'
                        }}>
																${item.productPrice}
																</td>
																<td data-label='Quantity'>
																	<div className='ShoppingBagTableQuantity'>
																		<button onClick={() => {
                              handleQuantityChange(item.productID, item.quantity - 1);
                            }} type='button'>
																		-
																		</button>
																		<input type='text' min='1' max='20' value={item.quantity} onChange={e => {
                              handleQuantityChange(item.productID, parseInt(e.target.value) || 1);
                            }} />
																		<button onClick={() => {
                              handleQuantityChange(item.productID, item.quantity + 1);
                            }} type='button'>
																		+
																		</button>
																	</div>
																</td>
																<td data-label='Subtotal'>
																	<p style={{
                            textAlign: 'center',
                            fontWeight: '500'
                          }}>
																	${item.quantity * item.productPrice}
																	</p>
																</td>
																<td data-label=''>
																	<button onClick={() => {
                            dispatch(removeFromCart(item.productID));
                          }} style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer'
                          }} type='button'>
																		<MdOutlineClose />
																	</button>
																</td>
															</tr>;
                    }) : <tr>
														<td colSpan={6}>
															<div className='shoppingCartEmpty'>
																<span>Your cart is empty!</span>
																<Link to='/shop' onClick={scrollToTop}>
																	<button type='button'>Shop Now</button>
																</Link>
															</div>
														</td>
													</tr>}
										</tbody>
										<tfoot>
											<tr>
												<th colSpan={6} className='shopCartFooter' style={{
                        borderBottom: 'none',
                        padding: '20px 0px'
                      }}>
													{cartItems.length > 0 && <div className='shopCartFooterContainer'>
															<form>
																<input type='text' placeholder='Coupon Code'></input>
																<button onClick={e => {
                              e.preventDefault();
                            }} type='button'>
																	Apply Coupon
																</button>
															</form>
															<button onClick={e => {
                            e.preventDefault();
                          }} className='shopCartFooterbutton' type='button'>
																Update Cart
															</button>
														</div>}
												</th>
											</tr>
										</tfoot>
									</table>

									<div className='shoppingBagTableMobile'>
										{cartItems.length > 0 ? <>
													{cartItems.map(item => {
                      return <div key={item.productID}>
																<div className='shoppingBagTableMobileItems'>
																	<div className='shoppingBagTableMobileItemsImg'>
																		<Link to='/product' onClick={scrollToTop}>
																			<img src={item.frontImg} alt={item.productName} />
																		</Link>
																	</div>
																	<div className='shoppingBagTableMobileItemsDetail'>
																		<div className='shoppingBagTableMobileItemsDetailMain'>
																			<Link to='/product' onClick={scrollToTop}>
																				<h4>{item.productName}</h4>
																			</Link>
																			<p>{item.productReviews}</p>
																			<div className='shoppingBagTableMobileQuantity'>
																				<button onClick={() => {
                                  handleQuantityChange(item.productID, item.quantity - 1);
                                }} type='button'>
																				-
																				</button>
																				<input type='text' min='1' max='20' value={item.quantity} onChange={e => {
                                  handleQuantityChange(item.productID, parseInt(e.target.value) || 1);
                                }} />
																				<button onClick={() => {
                                  handleQuantityChange(item.productID, item.quantity + 1);
                                }} type='button'>
																				+
																				</button>
																			</div>
																			<span>${item.productPrice}</span>
																		</div>
																		<div className='shoppingBagTableMobileItemsDetailTotal'>
																			<button onClick={() => {
                                dispatch(removeFromCart(item.productID));
                              }} style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer'
                              }} type='button'>
																				<MdOutlineClose size={20} />
																			</button>
																			<p>${item.quantity * item.productPrice}</p>
																		</div>
																	</div>
																</div>
															</div>;
                    })}
													<div className='shopCartFooter'>
														<div className='shopCartFooterContainer'>
															<form>
																<input type='text' placeholder='Coupon Code'></input>
																<button onClick={e => {
                            e.preventDefault();
                          }} type='button'>
																Apply Coupon
																</button>
															</form>
															<button onClick={e => {
                          e.preventDefault();
                        }} className='shopCartFooterbutton' type='button'>
															Update Cart
															</button>
														</div>
													</div>
												</> : <div className='shoppingCartEmpty'>
													<span>Your cart is empty!</span>
													<Link to='/shop' onClick={scrollToTop}>
														<button type='button'>Shop Now</button>
													</Link>
												</div>}
									</div>
								</div>
								<div className='shoppingBagTotal'>
									<h3>Cart Totals</h3>
									<table className='shoppingBagTotalTable'>
										<tbody>
											<tr>
												<th>Subtotal</th>
												<td>${totalPrice.toFixed(2)}</td>
											</tr>
											<tr>
												<th>Shipping</th>
												<td>
													<div className='shoppingBagTotalTableCheck'>
														<p>${(totalPrice === 0 ? 0 : 5).toFixed(2)}</p>
														<p>Shipping to Al..</p>
														<p onClick={scrollToTop} style={{
                            cursor: 'pointer'
                          }} onKeyDown={e => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              scrollToTop();
                            }
                          }} tabIndex={0} role='button'>
															CHANGE ADDRESS
														</p>
													</div>
												</td>
											</tr>
											<tr>
												<th>VAT</th>
												<td>${(totalPrice === 0 ? 0 : 11).toFixed(2)}</td>
											</tr>
											<tr>
												<th>Total</th>
												<td>
													${(totalPrice === 0 ? 0 : totalPrice + 16).toFixed(2)}
												</td>
											</tr>
										</tbody>
									</table>
									<button onClick={() => {
                  handleTabClick('cartTab2');
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  });
                }} disabled={cartItems.length === 0} type='button'>
										Proceed to Checkout
									</button>
								</div>
							</div> : stryMutAct_9fa48("998") ? false : stryMutAct_9fa48("997") ? true : (stryCov_9fa48("997", "998", "999"), (stryMutAct_9fa48("1001") ? activeTab !== 'cartTab1' : stryMutAct_9fa48("1000") ? true : (stryCov_9fa48("1000", "1001"), activeTab === (stryMutAct_9fa48("1002") ? "" : (stryCov_9fa48("1002"), 'cartTab1')))) && <div className='shoppingBagSection'>
								<div className='shoppingBagTableSection'>
									<table className='shoppingBagTable'>
										<thead>
											<tr>
												<th>Product</th>
												<th></th>
												<th>Price</th>
												<th>Quantity</th>
												<th>Subtotal</th>
												<th></th>
											</tr>
										</thead>
										<tbody>
											{(stryMutAct_9fa48("1006") ? cartItems.length <= 0 : stryMutAct_9fa48("1005") ? cartItems.length >= 0 : stryMutAct_9fa48("1004") ? false : stryMutAct_9fa48("1003") ? true : (stryCov_9fa48("1003", "1004", "1005", "1006"), cartItems.length > 0)) ? cartItems.map(item => {
                      if (stryMutAct_9fa48("1007")) {
                        {}
                      } else {
                        stryCov_9fa48("1007");
                        return <tr key={item.productID}>
																<td data-label='Product'>
																	<div className='shoppingBagTableImg'>
																		<Link to='/product' onClick={scrollToTop}>
																			<img src={item.frontImg} alt={item.productName} />
																		</Link>
																	</div>
																</td>
																<td data-label=''>
																	<div className='shoppingBagTableProductDetail'>
																		<Link to='/product' onClick={scrollToTop}>
																			<h4>{item.productName}</h4>
																		</Link>
																		<p>{item.productReviews}</p>
																	</div>
																</td>
																<td data-label='Price' style={stryMutAct_9fa48("1008") ? {} : (stryCov_9fa48("1008"), {
                            textAlign: stryMutAct_9fa48("1009") ? "" : (stryCov_9fa48("1009"), 'center')
                          })}>
																${item.productPrice}
																</td>
																<td data-label='Quantity'>
																	<div className='ShoppingBagTableQuantity'>
																		<button onClick={() => {
                                if (stryMutAct_9fa48("1010")) {
                                  {}
                                } else {
                                  stryCov_9fa48("1010");
                                  handleQuantityChange(item.productID, stryMutAct_9fa48("1011") ? item.quantity + 1 : (stryCov_9fa48("1011"), item.quantity - 1));
                                }
                              }} type='button'>
																		-
																		</button>
																		<input type='text' min='1' max='20' value={item.quantity} onChange={e => {
                                if (stryMutAct_9fa48("1012")) {
                                  {}
                                } else {
                                  stryCov_9fa48("1012");
                                  handleQuantityChange(item.productID, stryMutAct_9fa48("1015") ? parseInt(e.target.value) && 1 : stryMutAct_9fa48("1014") ? false : stryMutAct_9fa48("1013") ? true : (stryCov_9fa48("1013", "1014", "1015"), parseInt(e.target.value) || 1));
                                }
                              }} />
																		<button onClick={() => {
                                if (stryMutAct_9fa48("1016")) {
                                  {}
                                } else {
                                  stryCov_9fa48("1016");
                                  handleQuantityChange(item.productID, stryMutAct_9fa48("1017") ? item.quantity - 1 : (stryCov_9fa48("1017"), item.quantity + 1));
                                }
                              }} type='button'>
																		+
																		</button>
																	</div>
																</td>
																<td data-label='Subtotal'>
																	<p style={stryMutAct_9fa48("1018") ? {} : (stryCov_9fa48("1018"), {
                              textAlign: stryMutAct_9fa48("1019") ? "" : (stryCov_9fa48("1019"), 'center'),
                              fontWeight: stryMutAct_9fa48("1020") ? "" : (stryCov_9fa48("1020"), '500')
                            })}>
																	${stryMutAct_9fa48("1021") ? item.quantity / item.productPrice : (stryCov_9fa48("1021"), item.quantity * item.productPrice)}
																	</p>
																</td>
																<td data-label=''>
																	<button onClick={() => {
                              if (stryMutAct_9fa48("1022")) {
                                {}
                              } else {
                                stryCov_9fa48("1022");
                                dispatch(removeFromCart(item.productID));
                              }
                            }} style={stryMutAct_9fa48("1023") ? {} : (stryCov_9fa48("1023"), {
                              background: stryMutAct_9fa48("1024") ? "" : (stryCov_9fa48("1024"), 'none'),
                              border: stryMutAct_9fa48("1025") ? "" : (stryCov_9fa48("1025"), 'none'),
                              cursor: stryMutAct_9fa48("1026") ? "" : (stryCov_9fa48("1026"), 'pointer')
                            })} type='button'>
																		<MdOutlineClose />
																	</button>
																</td>
															</tr>;
                      }
                    }) : <tr>
														<td colSpan={6}>
															<div className='shoppingCartEmpty'>
																<span>Your cart is empty!</span>
																<Link to='/shop' onClick={scrollToTop}>
																	<button type='button'>Shop Now</button>
																</Link>
															</div>
														</td>
													</tr>}
										</tbody>
										<tfoot>
											<tr>
												<th colSpan={6} className='shopCartFooter' style={stryMutAct_9fa48("1027") ? {} : (stryCov_9fa48("1027"), {
                        borderBottom: stryMutAct_9fa48("1028") ? "" : (stryCov_9fa48("1028"), 'none'),
                        padding: stryMutAct_9fa48("1029") ? "" : (stryCov_9fa48("1029"), '20px 0px')
                      })}>
													{stryMutAct_9fa48("1032") ? cartItems.length > 0 || <div className='shopCartFooterContainer'>
															<form>
																<input type='text' placeholder='Coupon Code'></input>
																<button onClick={e => {
                              e.preventDefault();
                            }} type='button'>
																	Apply Coupon
																</button>
															</form>
															<button onClick={e => {
                            e.preventDefault();
                          }} className='shopCartFooterbutton' type='button'>
																Update Cart
															</button>
														</div> : stryMutAct_9fa48("1031") ? false : stryMutAct_9fa48("1030") ? true : (stryCov_9fa48("1030", "1031", "1032"), (stryMutAct_9fa48("1035") ? cartItems.length <= 0 : stryMutAct_9fa48("1034") ? cartItems.length >= 0 : stryMutAct_9fa48("1033") ? true : (stryCov_9fa48("1033", "1034", "1035"), cartItems.length > 0)) && <div className='shopCartFooterContainer'>
															<form>
																<input type='text' placeholder='Coupon Code'></input>
																<button onClick={e => {
                              if (stryMutAct_9fa48("1036")) {
                                {}
                              } else {
                                stryCov_9fa48("1036");
                                e.preventDefault();
                              }
                            }} type='button'>
																	Apply Coupon
																</button>
															</form>
															<button onClick={e => {
                            if (stryMutAct_9fa48("1037")) {
                              {}
                            } else {
                              stryCov_9fa48("1037");
                              e.preventDefault();
                            }
                          }} className='shopCartFooterbutton' type='button'>
																Update Cart
															</button>
														</div>)}
												</th>
											</tr>
										</tfoot>
									</table>

									<div className='shoppingBagTableMobile'>
										{(stryMutAct_9fa48("1041") ? cartItems.length <= 0 : stryMutAct_9fa48("1040") ? cartItems.length >= 0 : stryMutAct_9fa48("1039") ? false : stryMutAct_9fa48("1038") ? true : (stryCov_9fa48("1038", "1039", "1040", "1041"), cartItems.length > 0)) ? <>
													{cartItems.map(item => {
                      if (stryMutAct_9fa48("1042")) {
                        {}
                      } else {
                        stryCov_9fa48("1042");
                        return <div key={item.productID}>
																<div className='shoppingBagTableMobileItems'>
																	<div className='shoppingBagTableMobileItemsImg'>
																		<Link to='/product' onClick={scrollToTop}>
																			<img src={item.frontImg} alt={item.productName} />
																		</Link>
																	</div>
																	<div className='shoppingBagTableMobileItemsDetail'>
																		<div className='shoppingBagTableMobileItemsDetailMain'>
																			<Link to='/product' onClick={scrollToTop}>
																				<h4>{item.productName}</h4>
																			</Link>
																			<p>{item.productReviews}</p>
																			<div className='shoppingBagTableMobileQuantity'>
																				<button onClick={() => {
                                    if (stryMutAct_9fa48("1043")) {
                                      {}
                                    } else {
                                      stryCov_9fa48("1043");
                                      handleQuantityChange(item.productID, stryMutAct_9fa48("1044") ? item.quantity + 1 : (stryCov_9fa48("1044"), item.quantity - 1));
                                    }
                                  }} type='button'>
																				-
																				</button>
																				<input type='text' min='1' max='20' value={item.quantity} onChange={e => {
                                    if (stryMutAct_9fa48("1045")) {
                                      {}
                                    } else {
                                      stryCov_9fa48("1045");
                                      handleQuantityChange(item.productID, stryMutAct_9fa48("1048") ? parseInt(e.target.value) && 1 : stryMutAct_9fa48("1047") ? false : stryMutAct_9fa48("1046") ? true : (stryCov_9fa48("1046", "1047", "1048"), parseInt(e.target.value) || 1));
                                    }
                                  }} />
																				<button onClick={() => {
                                    if (stryMutAct_9fa48("1049")) {
                                      {}
                                    } else {
                                      stryCov_9fa48("1049");
                                      handleQuantityChange(item.productID, stryMutAct_9fa48("1050") ? item.quantity - 1 : (stryCov_9fa48("1050"), item.quantity + 1));
                                    }
                                  }} type='button'>
																				+
																				</button>
																			</div>
																			<span>${item.productPrice}</span>
																		</div>
																		<div className='shoppingBagTableMobileItemsDetailTotal'>
																			<button onClick={() => {
                                  if (stryMutAct_9fa48("1051")) {
                                    {}
                                  } else {
                                    stryCov_9fa48("1051");
                                    dispatch(removeFromCart(item.productID));
                                  }
                                }} style={stryMutAct_9fa48("1052") ? {} : (stryCov_9fa48("1052"), {
                                  background: stryMutAct_9fa48("1053") ? "" : (stryCov_9fa48("1053"), 'none'),
                                  border: stryMutAct_9fa48("1054") ? "" : (stryCov_9fa48("1054"), 'none'),
                                  cursor: stryMutAct_9fa48("1055") ? "" : (stryCov_9fa48("1055"), 'pointer')
                                })} type='button'>
																				<MdOutlineClose size={20} />
																			</button>
																			<p>${stryMutAct_9fa48("1056") ? item.quantity / item.productPrice : (stryCov_9fa48("1056"), item.quantity * item.productPrice)}</p>
																		</div>
																	</div>
																</div>
															</div>;
                      }
                    })}
													<div className='shopCartFooter'>
														<div className='shopCartFooterContainer'>
															<form>
																<input type='text' placeholder='Coupon Code'></input>
																<button onClick={e => {
                            if (stryMutAct_9fa48("1057")) {
                              {}
                            } else {
                              stryCov_9fa48("1057");
                              e.preventDefault();
                            }
                          }} type='button'>
																Apply Coupon
																</button>
															</form>
															<button onClick={e => {
                          if (stryMutAct_9fa48("1058")) {
                            {}
                          } else {
                            stryCov_9fa48("1058");
                            e.preventDefault();
                          }
                        }} className='shopCartFooterbutton' type='button'>
															Update Cart
															</button>
														</div>
													</div>
												</> : <div className='shoppingCartEmpty'>
													<span>Your cart is empty!</span>
													<Link to='/shop' onClick={scrollToTop}>
														<button type='button'>Shop Now</button>
													</Link>
												</div>}
									</div>
								</div>
								<div className='shoppingBagTotal'>
									<h3>Cart Totals</h3>
									<table className='shoppingBagTotalTable'>
										<tbody>
											<tr>
												<th>Subtotal</th>
												<td>${totalPrice.toFixed(2)}</td>
											</tr>
											<tr>
												<th>Shipping</th>
												<td>
													<div className='shoppingBagTotalTableCheck'>
														<p>${((stryMutAct_9fa48("1061") ? totalPrice !== 0 : stryMutAct_9fa48("1060") ? false : stryMutAct_9fa48("1059") ? true : (stryCov_9fa48("1059", "1060", "1061"), totalPrice === 0)) ? 0 : 5).toFixed(2)}</p>
														<p>Shipping to Al..</p>
														<p onClick={scrollToTop} style={stryMutAct_9fa48("1062") ? {} : (stryCov_9fa48("1062"), {
                            cursor: stryMutAct_9fa48("1063") ? "" : (stryCov_9fa48("1063"), 'pointer')
                          })} onKeyDown={e => {
                            if (stryMutAct_9fa48("1064")) {
                              {}
                            } else {
                              stryCov_9fa48("1064");
                              if (stryMutAct_9fa48("1067") ? e.key === 'Enter' && e.key === ' ' : stryMutAct_9fa48("1066") ? false : stryMutAct_9fa48("1065") ? true : (stryCov_9fa48("1065", "1066", "1067"), (stryMutAct_9fa48("1069") ? e.key !== 'Enter' : stryMutAct_9fa48("1068") ? false : (stryCov_9fa48("1068", "1069"), e.key === (stryMutAct_9fa48("1070") ? "" : (stryCov_9fa48("1070"), 'Enter')))) || (stryMutAct_9fa48("1072") ? e.key !== ' ' : stryMutAct_9fa48("1071") ? false : (stryCov_9fa48("1071", "1072"), e.key === (stryMutAct_9fa48("1073") ? "" : (stryCov_9fa48("1073"), ' ')))))) {
                                if (stryMutAct_9fa48("1074")) {
                                  {}
                                } else {
                                  stryCov_9fa48("1074");
                                  scrollToTop();
                                }
                              }
                            }
                          }} tabIndex={0} role='button'>
															CHANGE ADDRESS
														</p>
													</div>
												</td>
											</tr>
											<tr>
												<th>VAT</th>
												<td>${((stryMutAct_9fa48("1077") ? totalPrice !== 0 : stryMutAct_9fa48("1076") ? false : stryMutAct_9fa48("1075") ? true : (stryCov_9fa48("1075", "1076", "1077"), totalPrice === 0)) ? 0 : 11).toFixed(2)}</td>
											</tr>
											<tr>
												<th>Total</th>
												<td>
													${((stryMutAct_9fa48("1080") ? totalPrice !== 0 : stryMutAct_9fa48("1079") ? false : stryMutAct_9fa48("1078") ? true : (stryCov_9fa48("1078", "1079", "1080"), totalPrice === 0)) ? 0 : stryMutAct_9fa48("1081") ? totalPrice - 16 : (stryCov_9fa48("1081"), totalPrice + 16)).toFixed(2)}
												</td>
											</tr>
										</tbody>
									</table>
									<button onClick={() => {
                  if (stryMutAct_9fa48("1082")) {
                    {}
                  } else {
                    stryCov_9fa48("1082");
                    handleTabClick(stryMutAct_9fa48("1083") ? "" : (stryCov_9fa48("1083"), 'cartTab2'));
                    window.scrollTo(stryMutAct_9fa48("1084") ? {} : (stryCov_9fa48("1084"), {
                      top: 0,
                      behavior: stryMutAct_9fa48("1085") ? "" : (stryCov_9fa48("1085"), 'smooth')
                    }));
                  }
                }} disabled={stryMutAct_9fa48("1088") ? cartItems.length !== 0 : stryMutAct_9fa48("1087") ? false : stryMutAct_9fa48("1086") ? true : (stryCov_9fa48("1086", "1087", "1088"), cartItems.length === 0)} type='button'>
										Proceed to Checkout
									</button>
								</div>
							</div>)}

						{/* tab2 */}
						{stryMutAct_9fa48("1091") ? activeTab === 'cartTab2' || <div className='checkoutSection'>
								<div className='checkoutDetailsSection'>
									<h4>Billing Details</h4>
									<div className='checkoutDetailsForm'>
										<form>
											<div className='checkoutDetailsFormRow'>
												<input type='text' placeholder='First Name' />
												<input type='text' placeholder='Last Name' />
											</div>
											<input type='text' placeholder='Company Name (optional)' />
											<select name='country' id='country'>
												<option value='Country / Region' disabled>
													Country / Region
												</option>
												<option value='India'>India</option>
												<option value='Canada'>Canada</option>
												<option value='United Kingdom'>United Kingdom</option>
												<option value='United States'>United States</option>
												<option value='Turkey'>Turkey</option>
											</select>
											<input type='text' placeholder='Street Address*' />
											<input type='text' placeholder='' />
											<input type='text' placeholder='Town / City *' />
											<input type='text' placeholder='Postcode / ZIP *' />
											<input type='text' placeholder='Phone *' />
											<input type='email' placeholder='Your Mail *' />
											<div className='checkoutDetailsFormCheck'>
												<label>
													<input type='checkbox' />
													<p>Create An Account?</p>
												</label>
												<label>
													<input type='checkbox' />
													<p>Ship to a different Address</p>
												</label>
											</div>
											<textarea cols={30} rows={8} placeholder='Order Notes (Optional)' />
										</form>
									</div>
								</div>
								<div className='checkoutPaymentSection'>
									<div className='checkoutTotalContainer'>
										<h3>Your Order</h3>
										<div className='checkoutItems'>
											<table>
												<thead>
													<tr>
														<th>PRODUCTS</th>
														<th>SUBTOTALS</th>
													</tr>
												</thead>
												<tbody>
													{cartItems.map(items => {
                          return <tr key={items.productID}>
																<td>
																	{items.productName} x {items.quantity}
																</td>
																<td>${items.productPrice * items.quantity}</td>
															</tr>;
                        })}
												</tbody>
											</table>
										</div>
										<div className='checkoutTotal'>
											<table>
												<tbody>
													<tr>
														<th>Subtotal</th>
														<td>${totalPrice.toFixed(2)}</td>
													</tr>
													<tr>
														<th>Shipping</th>
														<td>$5</td>
													</tr>
													<tr>
														<th>VAT</th>
														<td>$11</td>
													</tr>
													<tr>
														<th>Total</th>
														<td>
															$
															{(totalPrice === 0 ? 0 : totalPrice + 16).toFixed(2)}
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
									<div className='checkoutPaymentContainer'>
										<label>
											<input type='radio' name='payment' value='Direct Bank Transfer' defaultChecked onChange={handlePaymentChange} />
											<div className='checkoutPaymentMethod'>
												<span>Direct Bank Transfer</span>
												<p>
													Make your payment directly into our bank account.
													Please use your Order ID as the payment reference.Your
													order will not be shipped until the funds have cleared
													in our account.
												</p>
											</div>
										</label>
										<label>
											<input type='radio' name='payment' value='Check Payments' onChange={handlePaymentChange} />
											<div className='checkoutPaymentMethod'>
												<span>Check Payments</span>
												<p>
													Phasellus sed volutpat orci. Fusce eget lore mauris
													vehicula elementum gravida nec dui. Aenean aliquam
													varius ipsum, non ultricies tellus sodales eu. Donec
													dignissim viverra nunc, ut aliquet magna posuere eget.
												</p>
											</div>
										</label>
										<label>
											<input type='radio' name='payment' value='Cash on delivery' onChange={handlePaymentChange} />
											<div className='checkoutPaymentMethod'>
												<span>Cash on delivery</span>
												<p>
													Phasellus sed volutpat orci. Fusce eget lore mauris
													vehicula elementum gravida nec dui. Aenean aliquam
													varius ipsum, non ultricies tellus sodales eu. Donec
													dignissim viverra nunc, ut aliquet magna posuere eget.
												</p>
											</div>
										</label>
										<label>
											<input type='radio' name='payment' value='Paypal' onChange={handlePaymentChange} />
											<div className='checkoutPaymentMethod'>
												<span>Paypal</span>
												<p>
													Phasellus sed volutpat orci. Fusce eget lore mauris
													vehicula elementum gravida nec dui. Aenean aliquam
													varius ipsum, non ultricies tellus sodales eu. Donec
													dignissim viverra nunc, ut aliquet magna posuere eget.
												</p>
											</div>
										</label>
										<div className='policyText'>
											Your personal data will be used to process your order,
											support your experience throughout this website, and for
											other purposes described in our{' '}
											<Link to='/terms' onClick={scrollToTop}>
												Privacy Policy
											</Link>
											.
										</div>
									</div>
									<button onClick={() => {
                  handleTabClick('cartTab3');
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  });
                  setPayments(true);
                }} type='button'>
										Place Order
									</button>
								</div>
							</div> : stryMutAct_9fa48("1090") ? false : stryMutAct_9fa48("1089") ? true : (stryCov_9fa48("1089", "1090", "1091"), (stryMutAct_9fa48("1093") ? activeTab !== 'cartTab2' : stryMutAct_9fa48("1092") ? true : (stryCov_9fa48("1092", "1093"), activeTab === (stryMutAct_9fa48("1094") ? "" : (stryCov_9fa48("1094"), 'cartTab2')))) && <div className='checkoutSection'>
								<div className='checkoutDetailsSection'>
									<h4>Billing Details</h4>
									<div className='checkoutDetailsForm'>
										<form>
											<div className='checkoutDetailsFormRow'>
												<input type='text' placeholder='First Name' />
												<input type='text' placeholder='Last Name' />
											</div>
											<input type='text' placeholder='Company Name (optional)' />
											<select name='country' id='country'>
												<option value='Country / Region' disabled>
													Country / Region
												</option>
												<option value='India'>India</option>
												<option value='Canada'>Canada</option>
												<option value='United Kingdom'>United Kingdom</option>
												<option value='United States'>United States</option>
												<option value='Turkey'>Turkey</option>
											</select>
											<input type='text' placeholder='Street Address*' />
											<input type='text' placeholder='' />
											<input type='text' placeholder='Town / City *' />
											<input type='text' placeholder='Postcode / ZIP *' />
											<input type='text' placeholder='Phone *' />
											<input type='email' placeholder='Your Mail *' />
											<div className='checkoutDetailsFormCheck'>
												<label>
													<input type='checkbox' />
													<p>Create An Account?</p>
												</label>
												<label>
													<input type='checkbox' />
													<p>Ship to a different Address</p>
												</label>
											</div>
											<textarea cols={30} rows={8} placeholder='Order Notes (Optional)' />
										</form>
									</div>
								</div>
								<div className='checkoutPaymentSection'>
									<div className='checkoutTotalContainer'>
										<h3>Your Order</h3>
										<div className='checkoutItems'>
											<table>
												<thead>
													<tr>
														<th>PRODUCTS</th>
														<th>SUBTOTALS</th>
													</tr>
												</thead>
												<tbody>
													{cartItems.map(items => {
                          if (stryMutAct_9fa48("1095")) {
                            {}
                          } else {
                            stryCov_9fa48("1095");
                            return <tr key={items.productID}>
																<td>
																	{items.productName} x {items.quantity}
																</td>
																<td>${stryMutAct_9fa48("1096") ? items.productPrice / items.quantity : (stryCov_9fa48("1096"), items.productPrice * items.quantity)}</td>
															</tr>;
                          }
                        })}
												</tbody>
											</table>
										</div>
										<div className='checkoutTotal'>
											<table>
												<tbody>
													<tr>
														<th>Subtotal</th>
														<td>${totalPrice.toFixed(2)}</td>
													</tr>
													<tr>
														<th>Shipping</th>
														<td>$5</td>
													</tr>
													<tr>
														<th>VAT</th>
														<td>$11</td>
													</tr>
													<tr>
														<th>Total</th>
														<td>
															$
															{((stryMutAct_9fa48("1099") ? totalPrice !== 0 : stryMutAct_9fa48("1098") ? false : stryMutAct_9fa48("1097") ? true : (stryCov_9fa48("1097", "1098", "1099"), totalPrice === 0)) ? 0 : stryMutAct_9fa48("1100") ? totalPrice - 16 : (stryCov_9fa48("1100"), totalPrice + 16)).toFixed(2)}
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
									<div className='checkoutPaymentContainer'>
										<label>
											<input type='radio' name='payment' value='Direct Bank Transfer' defaultChecked onChange={handlePaymentChange} />
											<div className='checkoutPaymentMethod'>
												<span>Direct Bank Transfer</span>
												<p>
													Make your payment directly into our bank account.
													Please use your Order ID as the payment reference.Your
													order will not be shipped until the funds have cleared
													in our account.
												</p>
											</div>
										</label>
										<label>
											<input type='radio' name='payment' value='Check Payments' onChange={handlePaymentChange} />
											<div className='checkoutPaymentMethod'>
												<span>Check Payments</span>
												<p>
													Phasellus sed volutpat orci. Fusce eget lore mauris
													vehicula elementum gravida nec dui. Aenean aliquam
													varius ipsum, non ultricies tellus sodales eu. Donec
													dignissim viverra nunc, ut aliquet magna posuere eget.
												</p>
											</div>
										</label>
										<label>
											<input type='radio' name='payment' value='Cash on delivery' onChange={handlePaymentChange} />
											<div className='checkoutPaymentMethod'>
												<span>Cash on delivery</span>
												<p>
													Phasellus sed volutpat orci. Fusce eget lore mauris
													vehicula elementum gravida nec dui. Aenean aliquam
													varius ipsum, non ultricies tellus sodales eu. Donec
													dignissim viverra nunc, ut aliquet magna posuere eget.
												</p>
											</div>
										</label>
										<label>
											<input type='radio' name='payment' value='Paypal' onChange={handlePaymentChange} />
											<div className='checkoutPaymentMethod'>
												<span>Paypal</span>
												<p>
													Phasellus sed volutpat orci. Fusce eget lore mauris
													vehicula elementum gravida nec dui. Aenean aliquam
													varius ipsum, non ultricies tellus sodales eu. Donec
													dignissim viverra nunc, ut aliquet magna posuere eget.
												</p>
											</div>
										</label>
										<div className='policyText'>
											Your personal data will be used to process your order,
											support your experience throughout this website, and for
											other purposes described in our{stryMutAct_9fa48("1101") ? "" : (stryCov_9fa48("1101"), ' ')}
											<Link to='/terms' onClick={scrollToTop}>
												Privacy Policy
											</Link>
											.
										</div>
									</div>
									<button onClick={() => {
                  if (stryMutAct_9fa48("1102")) {
                    {}
                  } else {
                    stryCov_9fa48("1102");
                    handleTabClick(stryMutAct_9fa48("1103") ? "" : (stryCov_9fa48("1103"), 'cartTab3'));
                    window.scrollTo(stryMutAct_9fa48("1104") ? {} : (stryCov_9fa48("1104"), {
                      top: 0,
                      behavior: stryMutAct_9fa48("1105") ? "" : (stryCov_9fa48("1105"), 'smooth')
                    }));
                    setPayments(stryMutAct_9fa48("1106") ? false : (stryCov_9fa48("1106"), true));
                  }
                }} type='button'>
										Place Order
									</button>
								</div>
							</div>)}

						{/* tab3 */}
						{stryMutAct_9fa48("1109") ? activeTab === 'cartTab3' || <div className='orderCompleteSection'>
								<div className='orderComplete'>
									<div className='orderCompleteMessage'>
										<div className='orderCompleteMessageImg'></div>
										<h3>Your order is completed!</h3>
										<p>Thank you. Your order has been received.</p>
									</div>
									<div className='orderInfo'>
										<div className='orderInfoItem'>
											<p>Order Number</p>
											<h4>{orderNumber}</h4>
										</div>
										<div className='orderInfoItem'>
											<p>Date</p>
											<h4>{formatDate(currentDate)}</h4>
										</div>
										<div className='orderInfoItem'>
											<p>Total</p>
											<h4>${totalPrice.toFixed(2)}</h4>
										</div>
										<div className='orderInfoItem'>
											<p>Payment Method</p>
											<h4>{selectedPayment}</h4>
										</div>
									</div>
									<div className='orderTotalContainer'>
										<h3>Order Details</h3>
										<div className='orderItems'>
											<table>
												<thead>
													<tr>
														<th>PRODUCTS</th>
														<th>SUBTOTALS</th>
													</tr>
												</thead>
												<tbody>
													{cartItems.map(items => {
                          return <tr key={items.productID}>
																<td>
																	{items.productName} x {items.quantity}
																</td>
																<td>${items.productPrice * items.quantity}</td>
															</tr>;
                        })}
												</tbody>
											</table>
										</div>
										<div className='orderTotal'>
											<table>
												<tbody>
													<tr>
														<th>Subtotal</th>
														<td>${totalPrice.toFixed(2)}</td>
													</tr>
													<tr>
														<th>Shipping</th>
														<td>$5</td>
													</tr>
													<tr>
														<th>VAT</th>
														<td>$11</td>
													</tr>
													<tr>
														<th>Total</th>
														<td>
															$
															{(totalPrice === 0 ? 0 : totalPrice + 16).toFixed(2)}
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div> : stryMutAct_9fa48("1108") ? false : stryMutAct_9fa48("1107") ? true : (stryCov_9fa48("1107", "1108", "1109"), (stryMutAct_9fa48("1111") ? activeTab !== 'cartTab3' : stryMutAct_9fa48("1110") ? true : (stryCov_9fa48("1110", "1111"), activeTab === (stryMutAct_9fa48("1112") ? "" : (stryCov_9fa48("1112"), 'cartTab3')))) && <div className='orderCompleteSection'>
								<div className='orderComplete'>
									<div className='orderCompleteMessage'>
										<div className='orderCompleteMessageImg'></div>
										<h3>Your order is completed!</h3>
										<p>Thank you. Your order has been received.</p>
									</div>
									<div className='orderInfo'>
										<div className='orderInfoItem'>
											<p>Order Number</p>
											<h4>{orderNumber}</h4>
										</div>
										<div className='orderInfoItem'>
											<p>Date</p>
											<h4>{formatDate(currentDate)}</h4>
										</div>
										<div className='orderInfoItem'>
											<p>Total</p>
											<h4>${totalPrice.toFixed(2)}</h4>
										</div>
										<div className='orderInfoItem'>
											<p>Payment Method</p>
											<h4>{selectedPayment}</h4>
										</div>
									</div>
									<div className='orderTotalContainer'>
										<h3>Order Details</h3>
										<div className='orderItems'>
											<table>
												<thead>
													<tr>
														<th>PRODUCTS</th>
														<th>SUBTOTALS</th>
													</tr>
												</thead>
												<tbody>
													{cartItems.map(items => {
                          if (stryMutAct_9fa48("1113")) {
                            {}
                          } else {
                            stryCov_9fa48("1113");
                            return <tr key={items.productID}>
																<td>
																	{items.productName} x {items.quantity}
																</td>
																<td>${stryMutAct_9fa48("1114") ? items.productPrice / items.quantity : (stryCov_9fa48("1114"), items.productPrice * items.quantity)}</td>
															</tr>;
                          }
                        })}
												</tbody>
											</table>
										</div>
										<div className='orderTotal'>
											<table>
												<tbody>
													<tr>
														<th>Subtotal</th>
														<td>${totalPrice.toFixed(2)}</td>
													</tr>
													<tr>
														<th>Shipping</th>
														<td>$5</td>
													</tr>
													<tr>
														<th>VAT</th>
														<td>$11</td>
													</tr>
													<tr>
														<th>Total</th>
														<td>
															$
															{((stryMutAct_9fa48("1117") ? totalPrice !== 0 : stryMutAct_9fa48("1116") ? false : stryMutAct_9fa48("1115") ? true : (stryCov_9fa48("1115", "1116", "1117"), totalPrice === 0)) ? 0 : stryMutAct_9fa48("1118") ? totalPrice - 16 : (stryCov_9fa48("1118"), totalPrice + 16)).toFixed(2)}
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>)}
					</div>
				</div>
			</div>
		</>;
  }
};
export default ShoppingCart;