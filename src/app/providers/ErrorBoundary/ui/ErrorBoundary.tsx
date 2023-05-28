import React, {ErrorInfo, ReactNode} from 'react';

interface ErrorBoundaryProps {
	children: ReactNode;
	fallback: ReactNode;
}

interface ErrorBoundaryState {
	hasError: boolean;
}

class ErrorBoundary extends React.Component<
	ErrorBoundaryProps,
	ErrorBoundaryState
> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = {hasError: false};
	}

	static getDerivedStateFromError() {
		// Update state so the next render will show the fallback UI.
		return {hasError: true};
	}

	componentDidCatch(error: Error, info: ErrorInfo) {
		console.log(error, info.componentStack);
	}

	render() {
		const {children, fallback} = this.props;
		const {hasError} = this.state;

		// You can render any custom fallback UI
		return hasError ? fallback : children;
	}
}

export default ErrorBoundary;
