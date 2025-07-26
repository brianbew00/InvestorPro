import { Switch, Route, Router } from "wouter";
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

function RouterComponent() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/offerings" component={OfferingsPage} />
      <Route path="/howitworks" component={HowItWorksPage} />
      <Route path="/resources" component={ResourcesPage} />
      <Route path="/dataroom" component={DataRoomPage} />
      <Route path="/investortypes" component={InvestorTypesPage} />
      <Route path="/calendar" component={CalendarPage} />
      <Route path="/compliance" component={CompliancePage} />
      <Route path="/privacypolicy" component={NotFound} />
      <Route path="/termsofuse" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <RouterComponent />
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;