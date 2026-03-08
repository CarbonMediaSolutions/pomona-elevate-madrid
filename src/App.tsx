import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const Memberships = lazy(() => import("./pages/Memberships"));
const Classes = lazy(() => import("./pages/Classes"));
const Recovery = lazy(() => import("./pages/Recovery"));
const HealthyBar = lazy(() => import("./pages/HealthyBar"));
const About = lazy(() => import("./pages/About"));
const Trainers = lazy(() => import("./pages/Trainers"));
const Schedule = lazy(() => import("./pages/Schedule"));
const Journal = lazy(() => import("./pages/Journal"));
const Contact = lazy(() => import("./pages/Contact"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/memberships" element={<Memberships />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/recovery" element={<Recovery />} />
            <Route path="/healthy-bar" element={<HealthyBar />} />
            <Route path="/about" element={<About />} />
            <Route path="/trainers" element={<Trainers />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
