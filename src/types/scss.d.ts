// SCSS modules (*.module.scss)
declare module "*.module.scss" {
	const classes: { [key: string]: string }
	export default classes
}

// Global SCSS imports (for side-effect imports like globals.scss)
declare module "*.scss" {
	const content: Record<string, never>
	export default content
}

// SASS modules (*.module.sass)
declare module "*.module.sass" {
	const classes: { [key: string]: string }
	export default classes
}

// Global SASS imports
declare module "*.sass" {
	const content: Record<string, never>
	export default content
}

// CSS modules (*.module.css)
declare module "*.module.css" {
	const classes: { [key: string]: string }
	export default classes
}

// Global CSS imports
declare module "*.css" {
	const content: Record<string, never>
	export default content
}
