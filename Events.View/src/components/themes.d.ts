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

interface Theme {
    mode: ThemeMode;
    color: ThemeColors;
}

interface ThemeProviderProps {
    children: React.ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
}

interface ThemeProviderState {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}