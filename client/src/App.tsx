import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Navigation from "@/components/Navigation";
import Home from "@/pages/Home";
import Lessons from "@/pages/Lessons";
import Glossary from "@/pages/Glossary";
import FAQ from "@/pages/FAQ";
import MMBotMode from "@/pages/MMBotMode";
import GridBotPage from "@/pages/GridBotPage";
import MidBotPage from "@/pages/MidBotPage";
import RGridBotPage from "@/pages/RGridBotPage";
import YourFirstBot from "@/pages/YourFirstBot";

function Router() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/lessons" component={Lessons} />
        <Route path="/glossary" component={Glossary} />
        <Route path="/faq" component={FAQ} />
        <Route path="/get-started" component={YourFirstBot} />
        <Route path="/modes/grid" component={GridBotPage} />
        <Route path="/modes/mid" component={MidBotPage} />
        <Route path="/modes/rgrid" component={RGridBotPage} />
        <Route path="/modes/rsi">{() => <MMBotMode mode="RSI" />}</Route>
        <Route path="/modes/blend">{() => <MMBotMode mode="BLEND" />}</Route>
        <Route component={NotFound} />
      </Switch>
    </div>
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
