/* eslint-disable complexity */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-console */
/* eslint-disable max-lines */
import React, {
	useEffect, useState,
} from 'react'
import './ShoppingCart.css'

import {
	MdOutlineClose,
} from 'react-icons/md'

import {
	Link,
} from 'react-router-dom'

// Додайте типи для пропсів та стану
// eslint-disable-next-line @typescript-eslint/naming-convention
interface CartItem {
	productID: string
	productName: string
	productReviews: string
	productPrice: number
	quantity: number
	frontImg: string
}

// eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface
interface ShoppingCartProps {}

const ShoppingCart: React.FC<ShoppingCartProps> = () => {
	const [activeTab, setActiveTab,] = useState('cartTab1',)
	const [payments, setPayments,] = useState(false,)

	const [cartItems, setCartItems,] = useState<Array<CartItem>>([],)
	const [totalPrice, ,] = useState(0,)
	const [orderNumber, ,] = useState('12345',)

	useEffect(() => {
		const cartItemsUrl: string = 'cartItemsServer'
		const fetchCartItems = async() => {
			try {
				const res = await fetch(cartItemsUrl,)
				if (!res.ok) {
					throw new Error(`Response status: ${res.status}`,)
				}
				const json = await res.json()
				setCartItems(json,)
			} catch (error) {
				console.log(error.message,)
			}
		}
		fetchCartItems()
	}, [],)
	const currentDate = new Date()

	const scrollToTop = (): void => {
		window.scrollTo({
			top:      0,
			behavior: 'smooth',
		},)
	}

	const handleQuantityChange = (productID: string, quantity: number,): void => {
		if (quantity < 1) {
			return
		}
		setCartItems((prevItems,) => {
			return prevItems.map((item,) => {
				return item.productID === productID ?
					{
						...item,
						quantity,
					} :
					item
			},)
		},)
	}

	const removeFromCart = (productID: string,) => {
		return {
			type:    'REMOVE_FROM_CART',
			payload: productID,
		}
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const dispatch = (action: any,) => {
		console.log('Dispatching action:', action,)
	}

	const formatDate = (date: Date,): string => {
		return date.toLocaleDateString()
	}

	const handleTabClick = (tab: string,): void => {
		if (tab === 'cartTab1' || cartItems.length > 0) {
			setActiveTab(tab,)
		}
	}

	const [selectedPayment, setSelectedPayment,] = useState('Direct Bank Transfer',)

	const handlePaymentChange = (
		e: React.ChangeEvent<HTMLInputElement>,
	): void => {
		setSelectedPayment(e.target.value,)
	}

	return (
		<>
			<div className='shoppingCartSection'>

				<div className='shoppingCartTabsContainer'>
					<div className={`shoppingCartTabs ${activeTab}`}>
						<button
							className={activeTab === 'cartTab1' ?
								'active' :
								''}
							onClick={() => {
								handleTabClick('cartTab1',)
								setPayments(false,)
							}}
							type='button'
						>
							<div className='shoppingCartTabsNumber'>
								<h3>01</h3>
								<div className='shoppingCartTabsHeading'>
									<h3>Shopping Bag</h3>
									<p>Manage Your Items List</p>
								</div>
							</div>
						</button>
						<button
							className={activeTab === 'cartTab2' ?
								'active' :
								''}
							onClick={() => {
								handleTabClick('cartTab2',)
								setPayments(false,)
							}}
							disabled={cartItems.length === 0}
							type='button'
						>
							<div className='shoppingCartTabsNumber'>
								<h3>02</h3>
								<div className='shoppingCartTabsHeading'>
									<h3>Shipping and Checkout</h3>
									<p>Checkout Your Items List</p>
								</div>
							</div>
						</button>
						<button
							className={activeTab === 'cartTab3' ?
								'active' :
								''}
							onClick={() => {
								handleTabClick('cartTab3',)
							}}
							disabled={cartItems.length === 0 || !payments}
							type='button'
						>
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
						{activeTab === 'cartTab1' && (
							<div className='shoppingBagSection'>
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
											{cartItems.length > 0 ?
												(
													cartItems.map((item,) => {
														return (
															<tr key={item.productID}>
																<td data-label='Product'>
																	<div className='shoppingBagTableImg'>
																		<Link to='/product' onClick={scrollToTop}>
																			<img
																				src={item.frontImg}
																				alt={item.productName}
																			/>
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
																<td
																	data-label='Price'
																	style={{
																		textAlign: 'center',
																	}}
																>
																${item.productPrice}
																</td>
																<td data-label='Quantity'>
																	<div className='ShoppingBagTableQuantity'>
																		<button
																			onClick={() => {
																				handleQuantityChange(
																					item.productID,
																					item.quantity - 1,
																				)
																			}}
																			type='button'
																		>
																		-
																		</button>
																		<input
																			type='text'
																			min='1'
																			max='20'
																			value={item.quantity}
																			onChange={(e,) => {
																				handleQuantityChange(
																					item.productID,
																					parseInt(e.target.value,) || 1,
																				)
																			}}
																		/>
																		<button
																			onClick={() => {
																				handleQuantityChange(
																					item.productID,
																					item.quantity + 1,
																				)
																			}}
																			type='button'
																		>
																		+
																		</button>
																	</div>
																</td>
																<td data-label='Subtotal'>
																	<p
																		style={{
																			textAlign:  'center',
																			fontWeight: '500',
																		}}
																	>
																	${item.quantity * item.productPrice}
																	</p>
																</td>
																<td data-label=''>
																	<button
																		onClick={() => {
																			dispatch(removeFromCart(item.productID,),)
																		}}
																		style={{
																			background: 'none',
																			border:     'none',
																			cursor:     'pointer',
																		}}
																		type='button'
																	>
																		<MdOutlineClose />
																	</button>
																</td>
															</tr>
														)
													},)
												) :
												(
													<tr>
														<td colSpan={6}>
															<div className='shoppingCartEmpty'>
																<span>Your cart is empty!</span>
																<Link to='/shop' onClick={scrollToTop}>
																	<button type='button'>Shop Now</button>
																</Link>
															</div>
														</td>
													</tr>
												)}
										</tbody>
										<tfoot>
											<tr>
												<th
													colSpan={6}
													className='shopCartFooter'
													style={{
														borderBottom: 'none',
														padding:      '20px 0px',
													}}
												>
													{cartItems.length > 0 && (
														<div className='shopCartFooterContainer'>
															<form>
																<input
																	type='text'
																	placeholder='Coupon Code'
																></input>
																<button
																	onClick={(e,) => {
																		e.preventDefault()
																	}}
																	type='button'
																>
																	Apply Coupon
																</button>
															</form>
															<button
																onClick={(e,) => {
																	e.preventDefault()
																}}
																className='shopCartFooterbutton'
																type='button'
															>
																Update Cart
															</button>
														</div>
													)}
												</th>
											</tr>
										</tfoot>
									</table>

									<div className='shoppingBagTableMobile'>
										{cartItems.length > 0 ?
											(
												<>
													{cartItems.map((item,) => {
														return (
															<div key={item.productID}>
																<div className='shoppingBagTableMobileItems'>
																	<div className='shoppingBagTableMobileItemsImg'>
																		<Link to='/product' onClick={scrollToTop}>
																			<img
																				src={item.frontImg}
																				alt={item.productName}
																			/>
																		</Link>
																	</div>
																	<div className='shoppingBagTableMobileItemsDetail'>
																		<div className='shoppingBagTableMobileItemsDetailMain'>
																			<Link to='/product' onClick={scrollToTop}>
																				<h4>{item.productName}</h4>
																			</Link>
																			<p>{item.productReviews}</p>
																			<div className='shoppingBagTableMobileQuantity'>
																				<button
																					onClick={() => {
																						handleQuantityChange(
																							item.productID,
																							item.quantity - 1,
																						)
																					}}
																					type='button'
																				>
																				-
																				</button>
																				<input
																					type='text'
																					min='1'
																					max='20'
																					value={item.quantity}
																					onChange={(e,) => {
																						handleQuantityChange(
																							item.productID,
																							parseInt(e.target.value,) || 1,
																						)
																					}}
																				/>
																				<button
																					onClick={() => {
																						handleQuantityChange(
																							item.productID,
																							item.quantity + 1,
																						)
																					}}
																					type='button'
																				>
																				+
																				</button>
																			</div>
																			<span>${item.productPrice}</span>
																		</div>
																		<div className='shoppingBagTableMobileItemsDetailTotal'>
																			<button
																				onClick={() => {
																					dispatch(removeFromCart(item.productID,),)
																				}}
																				style={{
																					background: 'none',
																					border:     'none',
																					cursor:     'pointer',
																				}}
																				type='button'
																			>
																				<MdOutlineClose size={20} />
																			</button>
																			<p>${item.quantity * item.productPrice}</p>
																		</div>
																	</div>
																</div>
															</div>
														)
													},)}
													<div className='shopCartFooter'>
														<div className='shopCartFooterContainer'>
															<form>
																<input
																	type='text'
																	placeholder='Coupon Code'
																></input>
																<button
																	onClick={(e,) => {
																		e.preventDefault()
																	}}
																	type='button'
																>
																Apply Coupon
																</button>
															</form>
															<button
																onClick={(e,) => {
																	e.preventDefault()
																}}
																className='shopCartFooterbutton'
																type='button'
															>
															Update Cart
															</button>
														</div>
													</div>
												</>
											) :
											(
												<div className='shoppingCartEmpty'>
													<span>Your cart is empty!</span>
													<Link to='/shop' onClick={scrollToTop}>
														<button type='button'>Shop Now</button>
													</Link>
												</div>
											)}
									</div>
								</div>
								<div className='shoppingBagTotal'>
									<h3>Cart Totals</h3>
									<table className='shoppingBagTotalTable'>
										<tbody>
											<tr>
												<th>Subtotal</th>
												<td>${totalPrice.toFixed(2,)}</td>
											</tr>
											<tr>
												<th>Shipping</th>
												<td>
													<div className='shoppingBagTotalTableCheck'>
														<p>${(totalPrice === 0 ?
															0 :
															5).toFixed(2,)}</p>
														<p>Shipping to Al..</p>
														<p
															onClick={scrollToTop}
															style={{
																cursor: 'pointer',
															}}
															onKeyDown={(e,) => {
																if (e.key === 'Enter' || e.key === ' ') {
																	scrollToTop()
																}
															}}
															tabIndex={0}
															role='button'
														>
															CHANGE ADDRESS
														</p>
													</div>
												</td>
											</tr>
											<tr>
												<th>VAT</th>
												<td>${(totalPrice === 0 ?
													0 :
													11).toFixed(2,)}</td>
											</tr>
											<tr>
												<th>Total</th>
												<td>
													${(totalPrice === 0 ?
														0 :
														totalPrice + 16).toFixed(2,)}
												</td>
											</tr>
										</tbody>
									</table>
									<button
										onClick={() => {
											handleTabClick('cartTab2',)
											window.scrollTo({
												top:      0,
												behavior: 'smooth',
											},)
										}}
										disabled={cartItems.length === 0}
										type='button'
									>
										Proceed to Checkout
									</button>
								</div>
							</div>
						)}

						{/* tab2 */}
						{activeTab === 'cartTab2' && (
							<div className='checkoutSection'>
								<div className='checkoutDetailsSection'>
									<h4>Billing Details</h4>
									<div className='checkoutDetailsForm'>
										<form>
											<div className='checkoutDetailsFormRow'>
												<input type='text' placeholder='First Name' />
												<input type='text' placeholder='Last Name' />
											</div>
											<input
												type='text'
												placeholder='Company Name (optional)'
											/>
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
											<textarea
												cols={30}
												rows={8}
												placeholder='Order Notes (Optional)'
											/>
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
													{cartItems.map((items,) => {
														return (
															<tr key={items.productID}>
																<td>
																	{items.productName} x {items.quantity}
																</td>
																<td>${items.productPrice * items.quantity}</td>
															</tr>
														)
													},)}
												</tbody>
											</table>
										</div>
										<div className='checkoutTotal'>
											<table>
												<tbody>
													<tr>
														<th>Subtotal</th>
														<td>${totalPrice.toFixed(2,)}</td>
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
															{(totalPrice === 0 ?
																0 :
																totalPrice + 16).toFixed(
																2,
															)}
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
									<div className='checkoutPaymentContainer'>
										<label>
											<input
												type='radio'
												name='payment'
												value='Direct Bank Transfer'
												defaultChecked
												onChange={handlePaymentChange}
											/>
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
											<input
												type='radio'
												name='payment'
												value='Check Payments'
												onChange={handlePaymentChange}
											/>
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
											<input
												type='radio'
												name='payment'
												value='Cash on delivery'
												onChange={handlePaymentChange}
											/>
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
											<input
												type='radio'
												name='payment'
												value='Paypal'
												onChange={handlePaymentChange}
											/>
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
									<button
										onClick={() => {
											handleTabClick('cartTab3',)
											window.scrollTo({
												top:      0,
												behavior: 'smooth',
											},)
											setPayments(true,)
										}}
										type='button'
									>
										Place Order
									</button>
								</div>
							</div>
						)}

						{/* tab3 */}
						{activeTab === 'cartTab3' && (
							<div className='orderCompleteSection'>
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
											<h4>{formatDate(currentDate,)}</h4>
										</div>
										<div className='orderInfoItem'>
											<p>Total</p>
											<h4>${totalPrice.toFixed(2,)}</h4>
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
													{cartItems.map((items,) => {
														return (
															<tr key={items.productID}>
																<td>
																	{items.productName} x {items.quantity}
																</td>
																<td>${items.productPrice * items.quantity}</td>
															</tr>
														)
													},)}
												</tbody>
											</table>
										</div>
										<div className='orderTotal'>
											<table>
												<tbody>
													<tr>
														<th>Subtotal</th>
														<td>${totalPrice.toFixed(2,)}</td>
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
															{(totalPrice === 0 ?
																0 :
																totalPrice + 16).toFixed(
																2,
															)}
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	)
}

export default ShoppingCart
