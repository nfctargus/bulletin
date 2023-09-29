import { css } from '@emotion/css';
import { BiLogoLinkedin, BiLogoInstagram, BiLogoFacebook } from 'react-icons/bi';
import { FaXTwitter } from 'react-icons/fa6';
import { IconContext } from 'react-icons';
import { FooterMenuListStyle, FooterSocialLinksListStyle } from '../utils/styles';

const Footer = () => {
	return (
		<>
			<div
				className={css`
					display: flex;
					justify-content: space-between;
					align-items: center;
					background-color: #f5f5f5;
					padding: 40px;
					margin: 50px 0;
					border-radius: 5px;
				`}>
				<div
					className={css`
						width: 50%;
					`}>
					<h1
						className={css`
							text-transform: uppercase;
							font-size: 16px;
							letter-spacing: 2px;
							padding-bottom: 10px;
							color: #1f1f1f;
						`}>
						Stay Up To Date
					</h1>
					<h2
						className={css`
							font-size: 24px;
							color: #1f1f1f;
							font-weight: 600;
						`}>
						Get the news first by{' '}
						<span
							className={css`
								color: #e9353b;
							`}>
							subscribing
						</span>{' '}
						to our newsletter
					</h2>
				</div>
				<div
					className={css`
						display: flex;
						width: 50%;
						justify-content: flex-end;
						gap: 10px;
					`}>
					<input
						className={css`
							border-radius: 5px;
							border: 1px solid #434343;
							padding: 10px;
							width: 60%;

							:focus {
								outline: 1px solid #e50914;
							}
						`}
						placeholder="Email"
					/>
					<button
						className={css`
							border: none;
							background-color: #e50914;
							color: #fff;
							border-radius: 5px;
							padding: 10px;
							&:hover {
								cursor: pointer;
							}
						`}>
						Subscribe
					</button>
				</div>
			</div>
			<div
				className={css`
					display: flex;
					justify-content: space-between;
					gap: 40px;
				`}>
				<div
					className={css`
						width: 30%;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						gap: 10px;
						padding-bottom: 20px;
					`}>
					<div>
						<h1
							className={css`
								font-size: 20px;
								color: #e9353b;
								font-family: 'Noto Serif', serif;
							`}>
							Bulletin
						</h1>
						<div
							className={css`
								font-size: 12px;
								padding: 10px 20px 10px 0;
							`}>
							Crafting narratives that ignite inspiration, knowledge and entertainment.
						</div>
						<FooterSocialLinksListStyle>
							<IconContext.Provider value={{ className: 'socialIcons' }}>
								<li>
									<BiLogoFacebook />
								</li>
								<li>
									<FaXTwitter />
								</li>
								<li>
									<BiLogoInstagram />
								</li>
								<li>
									<BiLogoLinkedin />
								</li>
							</IconContext.Provider>
						</FooterSocialLinksListStyle>
					</div>
					<small
						className={css`
							font-size: 11px;
							color: #434343;
							position: relative;
							bottom: 0;
						`}>
						Copyright © 2023 Bulletin
					</small>
				</div>
				<div
					className={css`
						width: 70%;
						display: grid;
						grid-template-columns: 1fr 1fr 1fr 1fr;
						grid-template-rows: 1fr 1fr;
						gap: 20px 20px;
						grid-auto-flow: row;
						grid-template-areas:
							'. . . .'
							'. . . .';
					`}>
					<>
						<FooterMenuListStyle>
							<li>Business</li>
							<li>Startup</li>
							<li>Employee</li>
							<li>Success</li>
							<li>Videos</li>
							<li>Markets</li>
						</FooterMenuListStyle>
						<FooterMenuListStyle>
							<li>Technology</li>
							<li>Innovate</li>
							<li>Gadget</li>
							<li>Innovative Cities</li>
							<li>Upstarts</li>
							<li>Future Tech</li>
						</FooterMenuListStyle>
						<FooterMenuListStyle>
							<li>Travel</li>
							<li>Destinations</li>
							<li>Food & Drink</li>
							<li>Stay</li>
							<li>News</li>
							<li>Videos</li>
						</FooterMenuListStyle>
						<FooterMenuListStyle>
							<li>Sports</li>
							<li>Football</li>
							<li>Tennis</li>
							<li>Golf</li>
							<li>Motorsports</li>
							<li>AFL</li>
						</FooterMenuListStyle>
						<FooterMenuListStyle>
							<li>Entertainment</li>
							<li>Movies</li>
							<li>Art</li>
							<li>TV</li>
							<li>Influencers</li>
							<li>Viral</li>
						</FooterMenuListStyle>
						<FooterMenuListStyle>
							<li>Features</li>
							<li>As Equals</li>
							<li>Call to Earth</li>
							<li>Freedom Project</li>
							<li>Inside Asia</li>
							<li>2 Degress</li>
						</FooterMenuListStyle>
						<FooterMenuListStyle>
							<li>Weather</li>
							<li>Climate</li>
							<li>Storm Tracker</li>
							<li>Wildlife Tracker</li>
							<li>Earthquakes</li>
							<li>Videos</li>
						</FooterMenuListStyle>
						<FooterMenuListStyle>
							<li>More</li>
							<li>About Us</li>
							<li>Mentorship</li>
							<li>Investment</li>
							<li>Careers</li>
							<li>Support Us</li>
						</FooterMenuListStyle>
					</>
				</div>
			</div>
		</>
	);
};

export default Footer;
