import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Reviews from "./pages/Review";
import Compare from "./pages/Compare";
import Learn from "./pages/Learn";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <Provider store={store}>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
