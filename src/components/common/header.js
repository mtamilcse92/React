import React from 'react';
import { Nav } from 'react-bootstrap';
import img from '../../images/log.png';
import styles from '../../styles/header.css';

class Header extends React.Component {
	
	render() {
		let style = {
					img:{
						width: 28
					},
					ul:{
						listStyleType: "none",
						margin: 0,
						padding: 0,
						overflow: "hidden",
						backgroundColor: "#333"
					},
					liLeft:{
						float: "left",
					},
					liRight:{
						float: "right"
					},
					a:{
						display: "block",
						color: "white",
						textAlign: "center",
						fontSize: "25px",
						padding: "14px 16px",
						textDecoration: "none"
					}
				};
		return (
			<ul style={style.ul}>
			<li style={style.liLeft}><a style={style.a} className={styles.linkHover} href="/"><img style={style.img} src={img} /></a></li>
			<li style={style.liLeft}><a style={style.a} href="/">HOME</a></li>
			<li style={style.liLeft}><a style={style.a} href="/#about">ABOUT</a></li>
			<li style={style.liLeft}><a style={style.a} href="/#authors">AUTHOR</a></li>
			<li style={style.liRight}><a style={style.a} href="#about">CONTACT</a></li>
			</ul>
			);
	}

}

export default Header;