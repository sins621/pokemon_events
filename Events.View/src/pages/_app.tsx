import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/store";
import { Header } from "@/components/ui/header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
        <div className="bg-background text-foreground min-h-screen">
          <Header />
          <Component {...pageProps} />
        </div>
    </Provider>
  );
}
