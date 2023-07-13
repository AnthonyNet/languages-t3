import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
   <NextThemesProvider>
	 <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
</NextThemesProvider>
  );
};

export default api.withTRPC(MyApp);
