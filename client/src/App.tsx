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
import BlendBotPage from "@/pages/BlendBotPage";
import RSIBotPage from "@/pages/RSIBotPage";
import YourFirstBot from "@/pages/YourFirstBot";
import Lesson1Page from "@/pages/Lesson1Page";
import Lesson2Page from "@/pages/Lesson2Page";
import Blog from "@/pages/Blog";
import BlogPost1Page from "@/pages/BlogPost1Page";
import BlogPost2Page from "@/pages/BlogPost2Page";
import PolymarketPage from "@/pages/PolymarketPage";
import DNBotPage from "@/pages/DNBotPage";
import BlogPost3Page from "@/pages/BlogPost3Page";
import StatsPage from "@/pages/StatsPage";
import BlogPost4Page from "@/pages/BlogPost4Page";
import BlogPost5Page from "@/pages/BlogPost5Page";
import BlogPost6Page from "@/pages/BlogPost6Page";
import AgentsIndexPage from "@/pages/AgentsIndexPage";
import AgentsGettingStartedPage from "@/pages/AgentsGettingStartedPage";
import AgentsCustomAgentBuilderPage from "@/pages/AgentsCustomAgentBuilderPage";
import AgentsMarketMakingPage from "@/pages/AgentsMarketMakingPage";
import AgentsArcusMarketMakingPage from "@/pages/AgentsArcusMarketMakingPage";
import ExchangeTutorialsIndexPage from "@/pages/ExchangeTutorialsIndexPage";
import ExchangeTutorialArticlePage from "@/pages/ExchangeTutorialArticlePage";
import ExchangeTutorialAftermathPage from "@/pages/ExchangeTutorialAftermathPage";
import DiscountsRefsPage from "@/pages/DiscountsRefsPage";

function Router() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/lessons" component={Lessons} />
        <Route path="/lessons/1" component={Lesson1Page} />
        <Route path="/lessons/2" component={Lesson2Page} />
        <Route path="/blog" component={Blog} />
        <Route path="/discounts-and-refs" component={DiscountsRefsPage} />
        <Route path="/blog/1" component={BlogPost1Page} />
        <Route path="/blog/2" component={BlogPost2Page} />
        <Route path="/glossary" component={Glossary} />
        <Route path="/faq" component={FAQ} />
        <Route path="/get-started" component={YourFirstBot} />
        <Route path="/modes/grid" component={GridBotPage} />
        <Route path="/modes/mid" component={MidBotPage} />
        <Route path="/modes/rgrid" component={RGridBotPage} />
        <Route path="/modes/rsi" component={RSIBotPage} />
        <Route path="/modes/blend" component={BlendBotPage} />
        <Route path="/blog/3" component={BlogPost3Page} />
        <Route path="/blog/4" component={BlogPost4Page} />
        <Route path="/blog/5" component={BlogPost5Page} />
        <Route path="/blog/6" component={BlogPost6Page} />
        <Route path="/stats" component={StatsPage} />
        <Route path="/modes/polymarket" component={PolymarketPage} />
        <Route path="/modes/dn-bot" component={DNBotPage} />
        <Route path="/agents" component={AgentsIndexPage} />
        <Route path="/agents/getting-started" component={AgentsGettingStartedPage} />
        <Route path="/agents/build-your-first-custom-agent" component={AgentsCustomAgentBuilderPage} />
        <Route path="/agents/market-making-custom-agent" component={AgentsMarketMakingPage} />
        <Route path="/agents/arcus-market-making-agent" component={AgentsArcusMarketMakingPage} />
        <Route path="/exchange-tutorials" component={ExchangeTutorialsIndexPage} />
        <Route path="/exchange-tutorials/arcus-treadfi-robinhood" component={ExchangeTutorialArticlePage} />
        <Route path="/exchange-tutorials/aftermath-treadfi-sui" component={ExchangeTutorialAftermathPage} />
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
