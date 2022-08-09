import { start } from "@elf-framework/sapa";
import { Route, Router, Switch } from "@elf-framework/sapa-router";

import { Layout } from "../../component/Layout";

function Default(props) {
  return (
    <div>
      Default{" "}
      <button type="button" onClick={() => props.action("/about")}>
        Go About
      </button>
    </div>
  );
}

function About(props) {
  return (
    <div>
      About{" "}
      <button type="button" onClick={() => props.action("/home")}>
        Go Home
      </button>
    </div>
  );
}

function Home(props) {
  return (
    <div>
      Home{" "}
      <button type="button" onClick={() => props.action("/")}>
        Go Default
      </button>
    </div>
  );
}

start(function () {
  const action = this.createFunction("action", (target) => {
    this.setState({
      target,
    });
  });

  return (
    <Layout>
      <Router target={this.state.target || "/"} forceUpdate={true}>
        <Switch>
          <Route path="/">
            <Default action={action} />
          </Route>
          <Route path="/about">
            <About action={action} />
          </Route>
          <Route path="/home">
            <Home action={action} />
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
});
