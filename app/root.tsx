import type { LinksFunction, MetaFunction } from '@remix-run/node'

import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react'

import TailwindCSS from './styles/tailwind.css'

export const links: LinksFunction = () => {
	return [{ rel: 'stylesheet', href: TailwindCSS }]
}

export const meta: MetaFunction = () => {
	return {
		viewport: 'width=device-width, initial-scale=1',
		charset: 'utf-8',
		title: 'Barebones Stack - Remix',
		description: `A starter focused Remix Stack that integrates User Authentication, 
		Forms validation and Testing. Driven by Prisma ORM. Deploys to Fly.io `,
		keywords:
			'remix, remix-stack, typescript, sqlite, postgresql, prisma, tailwindcss, fly.io',
		'og:title': 'Barebones Stack - Remix',
		'og:type': 'website',
		'og:url': 'https://barebones-stack.fly.dev',
		'og:image':
			'https://raw.githubusercontent.com/dev-xo/dev-xo/main/barebones-stack/assets/images/Thumbnail.png',
		'og:card': 'summary_large_image',
		'og:creator': '@DanielKanem',
		'og:site': 'https://barebones-stack.fly.dev',
		'og:description': `A starter focused Remix Stack that integrates User Authentication, 
		Forms validation and Testing. Driven by Prisma ORM. Deploys to Fly.io `,
		'twitter:image':
			'https://raw.githubusercontent.com/dev-xo/dev-xo/main/barebones-stack/assets/images/Thumbnail.png',
		'twitter:card': 'summary_large_image',
		'twitter:creator': '@DanielKanem',
		'twitter:title': 'Barebones Stack - Remix',
		'twitter:description': `A Barebones focused Remix Stack that integrates User Subscriptions, 
		Authentication and Testing. Driven by Prisma ORM. Deploys to Fly.io`,
	}
}

export default function App() {
	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
			</head>
			<body className="h-full">
				<Outlet />
				<ScrollRestoration />
				<Scripts />

				{process.env.NODE_ENV === 'development' && <LiveReload />}
			</body>
		</html>
	)
}
