import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/store";
import { Header } from "@/components/ui/header";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Header />
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </Provider>
  );
}
