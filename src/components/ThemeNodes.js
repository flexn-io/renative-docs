import DarkMode from '../../static/img/dark/icon.svg';
import LightMode from '../../static/img/light/icon.svg';

export const ThemeModes = () => {
    const { colorMode, setColorMode } = useColorMode();

    let darkThemeClasses = 'theme-mode'
    let lightThemeClasses = 'theme-mode'
    if (colorMode === 'dark') {
        darkThemeClasses += ' theme-mode-active'
    } else {
        lightThemeClasses += ' theme-mode-active'
    }
    return (
        <>
            <div className="theme-modes">
                <div className={lightThemeClasses} onClick={() => setColorMode('light')}>
                    <LightMode className="theme-mode-img" />
                </div>
                <div className={darkThemeClasses} onClick={() => setColorMode('dark')}>
                    <DarkMode className="theme-mode-img" />
                </div>
            </div>
        </>)
}