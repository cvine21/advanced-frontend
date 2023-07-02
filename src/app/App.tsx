import {AppRouter} from 'app/providers/router';
import {useTheme} from 'app/providers/ThemeProvider';

import {classNames} from 'shared/lib/classNames/classNames';

import {Navbar, Sidebar} from 'widgets';

const App = () => {
	const {theme} = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar />
			<div className='content-page'>
				<Sidebar />
				<AppRouter />
			</div>
		</div>
	);
};

export default App;
