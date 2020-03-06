import React from 'react';
import BigIphone from '../../img/Iphone 1@2x.png';
import SmallIphoneFront from '../../img/apple-iphonexs-max-gold@2x.png';
import SmallIphoneBack from '../../img/apple-iphonexs-max-gold-back-1@2x.png';

const Iphone = () => {
	return (
		<section className="container-iphone">
			<div className="iphone-group1">
				<h1>iPhone</h1>
				<h2>
					The ultimate<br />iPhone
				</h2>
				<p>
					The future is here. Join the iPhone Upgrade<br /> Program to get the latest iPhone - NOW!
				</p>
			</div>
			<img className="big-iphone-img" src={BigIphone} alt="" />
			<div className="iphone-group2">
				<p className="price-tag">From $699</p>
				<p className="buy-now">Buy Now &#62;</p>
			</div>
			<div className="iphone-group3">
				<img src={SmallIphoneFront} alt="" />
				<img src={SmallIphoneBack} alt="" />
			</div>
		</section>
	);
};

const mapStateToProps = (state) => ({
	auth: state.auth
});

export default Iphone;
