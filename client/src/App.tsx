import { Route, Switch } from 'wouter';
import Home from './pages/Home';
import CaseStudy from './pages/CaseStudy';
import ScriptBuilder from './pages/ScriptBuilder';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/case-study" component={CaseStudy} />
      <Route path="/script-builder" component={ScriptBuilder} />
      <Route component={NotFound} />
    </Switch>
  );
}
