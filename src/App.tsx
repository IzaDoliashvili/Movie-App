import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setBannerData, setImageURL } from "./store/movieSlice/movieSlice";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useSetAtom } from "jotai";
import router from "./routes"; 
import DashboardLayout from "./layouts";
import "../src/index.css"; 
import { userAtom } from "./store/auth";
import { supabase } from "./supabase";
import { ThemeProvider } from "./components/ui/components/theme-provider"

const queryClient = new QueryClient();

const App = () => {
  const dispatch = useDispatch();
  const setUser = useSetAtom(userAtom);

  const fetchTrendingData = async () => {
    try {
      const response = await axios.get("/trending/all/week");
      dispatch(setBannerData(response.data.results));
    } catch (error) {
      console.error("Error fetching trending data:", error);
    }
  };

  const fetchConfiguration = async () => {
    try {
      const response = await axios.get("/configuration");
      dispatch(setImageURL(response.data.images.secure_base_url + "original"));
    } catch (error) {
      console.error("Error fetching configuration:", error);
    }
  };

  useEffect(() => {
    fetchTrendingData();
    fetchConfiguration();

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session);
    });

    return () => subscription.unsubscribe();
  }, [dispatch, setUser]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>
        <DashboardLayout />
      </RouterProvider>
    </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
