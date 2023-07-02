import {AppRouter} from 'app/providers/router';
import {useTheme} from 'app/providers/ThemeProvider';
import {useState} from 'react';

import {classNames} from 'shared/lib/classNames/classNames';

import {Navbar, Sidebar, Modal} from 'widgets';

const App = () => {
	const {theme} = useTheme();

	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar />
			<button onClick={() => setIsOpen(true)}>toggle</button>
			<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
				temporibus harum corporis doloremque libero accusantium et perferendis
				in ad commodi?
			</Modal>
			<div className='content-page'>
				<Sidebar />
				<AppRouter />
			</div>
		</div>
	);
};

export default App;
