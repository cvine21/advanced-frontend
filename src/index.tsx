import {Suspense} from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import App from 'app/App';

import {ThemeProvider} from 'app/providers/ThemeProvider';
import ErrorBoundary from 'app/providers/ErrorBoundary';

import 'shared/config/i18n/i18n';

import Error from 'widgets/Error';

render(
	<BrowserRouter>
		<Suspense fallback=''>
			<ErrorBoundary fallback={<Error />}>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</ErrorBoundary>
		</Suspense>
	</BrowserRouter>,
	document.getElementById('root'),
);
