import React from 'react'
import Helmet from 'react-helmet'

const AppleTouchIcon57 = 'src/images/favicons/apple-touch-icon-57x57.png'
const AppleTouchIcon114 = 'src/images/favicons/apple-touch-icon-114x114.png'
const AppleTouchIcon72 = 'src/images/favicons/apple-touch-icon-72x72.png'
const AppleTouchIcon144 = 'src/images/favicons/apple-touch-icon-144x144.png'
const AppleTouchIcon60 = 'src/images/favicons/apple-touch-icon-60x60.png'
const AppleTouchIcon120 = 'src/images/favicons/apple-touch-icon-120x120.png'
const AppleTouchIcon76 = 'src/images/favicons/apple-touch-icon-76x76.png'
const AppleTouchIcon152 = 'src/images/favicons/apple-touch-icon-152x152.png'

const Favicon196 = 'src/images/favicons/favicon-196x196.png'
const Favicon96 = 'src/images/favicons/favicon-96x96.png'
const Favicon32 = 'src/images/favicons/favicon-32x32.png'
const Favicon16 = 'src/images/favicons/favicon-16x16.png'
const Favicon128 = 'src/images/favicons/favicon-128.png'

const MsTile144 = 'src/images/favicons/mstile-144x144.png'
const MsTile70 = 'src/images/favicons/mstile-70x70.png'
const MsTile150 = 'src/images/favicons/mstile-150x150.png'
const MsTile310 = 'src/images/favicons/mstile-310x150.png'
const MsTile310 = 'src/images/favicons/mstile-310x310.png'

const Favicons = () => {
	<Helmet>
		<link rel="apple-touch-icon-precomposed" sizes="57x57" href={AppleTouchIcon57} />
		<link rel="apple-touch-icon-precomposed" sizes="114x114" href={AppleTouchIcon114} />
		<link rel="apple-touch-icon-precomposed" sizes="72x72" href={AppleTouchIcon72} />
		<link rel="apple-touch-icon-precomposed" sizes="144x144" href={AppleTouchIcon144} />
		<link rel="apple-touch-icon-precomposed" sizes="60x60" href={AppleTouchIcon60} />
		<link rel="apple-touch-icon-precomposed" sizes="120x120" href={AppleTouchIcon120} />
		<link rel="apple-touch-icon-precomposed" sizes="76x76" href={AppleTouchIcon76} />
		<link rel="apple-touch-icon-precomposed" sizes="152x152" href={AppleTouchIcon152} />

		<link rel="icon" type="image/png" href={Favicon196} sizes="196x196" />
		<link rel="icon" type="image/png" href={Favicon96} sizes="96x96" />
		<link rel="icon" type="image/png" href={Favicon32} sizes="32x32" />
		<link rel="icon" type="image/png" href={Favicon16} sizes="16x16" />
		<link rel="icon" type="image/png" href={Favicon128} sizes="128x128" />

		<meta name="application-name" content="Good Shot"/>
		<meta name="theme-color" content="#F898F3"></meta>
		<meta name="msapplication-TileColor" content="#F898F3" />

		<meta name="msapplication-TileImage" content={MsTile144} />
		<meta name="msapplication-square70x70logo" content={MsTile70} />
		<meta name="msapplication-square150x150logo" content={MsTile150} />
		<meta name="msapplication-wide310x150logo" content={MsTile310} />
		<meta name="msapplication-square310x310logo" content={MsTile310} />
	</Helmet>
}

export default Favicons
