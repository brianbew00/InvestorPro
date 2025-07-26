import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "./pages/not-found";

// Import all pages
import HomePage from "./pages/index";
import AboutPage from "./pages/about";
import OfferingsPage from "./pages/offerings";
import HowItWorksPage from "./pages/howitworks";
import ResourcesPage from "./pages/resources";
import DataRoomPage from "./pages/dataroom";
import InvestorTypesPage from "./pages/investortypes";
import CalendarPage from "./pages/calendar";
import CompliancePage from "./pages/compliance";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/offerings" component={OfferingsPage} />
      <Route path="/how-it-works" component={HowItWorksPage} />
      <Route path="/resources" component={ResourcesPage} />
      <Route path="/data-room" component={DataRoomPage} />
      <Route path="/investor-types" component={InvestorTypesPage} />
      <Route path="/calendar" component={CalendarPage} />
      <Route path="/compliance" component={CompliancePage} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
