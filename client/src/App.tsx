import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

// Import all pages
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import OfferingsPage from "@/pages/OfferingsPage";
import HowItWorksPage from "@/pages/HowItWorksPage";
import ResourcesPage from "@/pages/ResourcesPage";
import DataRoomPage from "@/pages/DataRoomPage";
import InvestorTypesPage from "@/pages/InvestorTypesPage";
import CalendarPage from "@/pages/CalendarPage";
import CompliancePage from "@/pages/CompliancePage";

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
