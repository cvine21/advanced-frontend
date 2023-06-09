import {Theme, useTheme} from 'app/providers/ThemeProvider';
import {Button, ThemeButton} from 'shared';

import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';

import {classNames} from 'shared/lib/classNames/classNames';

type ThemeSwitcherProps = {
	className?: string;
};

const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
	const {theme, toggleTheme} = useTheme();

	return (
		<Button
			theme={ThemeButton.CLEAR}
			className={classNames('', {}, [className])}
			onClick={toggleTheme}
		>
			{theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
		</Button>
	);
};

export default ThemeSwitcher;
