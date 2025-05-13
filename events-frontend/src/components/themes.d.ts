type ThemeColors =
| 'zinc'
| 'rose'
| 'blue'
| 'green'
| 'orange'
| 'red'
| 'yellow'
| 'violet'

type ThemeMode = 'dark' | 'light' | 'system';

type Theme = {
    mode: ThemeMode,
    color: ThemeColors
}

type ThemeProviderProps = {
    children: React.ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
}

type ThemeProviderState = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}