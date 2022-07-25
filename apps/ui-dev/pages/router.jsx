import { start, useEffect } from "@elf-framework/sapa";
import { Route, Router, Switch } from "@elf-framework/sapa-router";

const KontentDelivery = require("@kontent-ai/delivery-sdk");

function Default(props) {
  useEffect(async () => {
    // initialize delivery client
    const deliveryClient = KontentDelivery.createDeliveryClient({
      projectId: "5c16ec47-0fb4-006f-8e56-ef3628f634d1",
    });

    // fetch items
    const response = await deliveryClient
      .items()
      .type("c5837fd0-b1d8-4648-849c-ed87b77e5366")
      .toPromise();

    console.log(response);
  }, []);

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
    <div>
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
    </div>
  );
});
