import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Bulletin News | Local, National and International News',
	description: '© Bulletin 2023',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap" rel="stylesheet" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Inter+Tight&display=swap" rel="stylesheet" />
			</head>
			<body>{children}</body>
		</html>
	);
}
