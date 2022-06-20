import { start, UIElement, POPSTATE, HASHCHANGE, SUBSCRIBE, FRAME, DEBOUNCE } from "@elf-framework/sapa";
import { Button, LinkButton } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";
import { SUBSCRIBE_SELF } from "@elf-framework/sapa"; 


let router = {}

function createRouter(context) {
  router = context;
}


class Route extends UIElement {

  changedProps() {
    return true;
  }

  template() {
    const { content, path } = this.props;

    if (path === location.pathname) {
      return <div>{content}</div>
    }

    return <div></div>;
  }

  // [SUBSCRIBE("changeHistory")] (e) {
  //   console.log(e);
  //   this.refresh();
  // }
}

class Router extends UIElement {

  initialize() {
    super.initialize();

    createRouter(this);
  }

  template () {
    return <div>{this.props.content}</div>
  }

  // debounce 나 frame 통해서 연속적으로 일어나는 부분은 하나만 실행함
  [SUBSCRIBE_SELF("changeHistory") + DEBOUNCE(1)](e) {
    console.log(e);
    this.emit("changeHistory", e);

    this.refresh();
  }

  [POPSTATE("window")] (e) {
    const info = {
      type: "popstate",
      state: e.state,
      url: location,
    }

    this.trigger("changeHistory", info);
  }

  [HASHCHANGE("window")] (e) {
    const info = {
      type: "hashchange",
      state: null,
      url: location,
    }

    this.trigger("changeHistory", info);
  }

  pushState(url, state = null, title = null) {
    console.log(url);
    history.pushState(state, title, url);
    this.trigger("changeHistory", {
      type: "pushState",
      state,
      url,
    });
  }
}

router({
  "/": Home,
  "/about": About,
  "/contact": Contact,
  "/contact/:id": Contact,
  "/contact/:id/:name": Contact,
  "/contact/:id/:name/:age": Contact,
  "/contact/:id/:name/:age/" : Contact,
}, {
  container: document.body,
})

start(function () {
  return (
    <div>


    {/*  
      Router 를 Tag 로 구현할지  밖에서 호출하는 개념으로 할지 고민을 좀 해야할 듯 
      일단 컴포넌트가 특정 렌더링 요소 하나에 대응하기 때문에 이 부분부터 어떻게 해야할지 정리가 필요함. 
      렌더링 안하는 도구를 사용하는 것이 좋을 지. 아님 전체를 무조건 다 렌더링 해야하는게 좋은지 

    
    */}
    <Router>
      <Button type="primary">dffadsfds</Button>
      <LinkButton href="#">LinkButton</LinkButton>

      <Route ref="$home" path="/pages/router.html" content={<Button onClick={() => {
        router.pushState("/pages/contact");
      }}>Home</Button>} />
      <Route ref="$about" path="/pages/about" content={<Button onClick={() => {
        router.pushState("/pages/router.html");
      }}>About</Button>} />
      <Route ref="$contact" path="/pages/contact" content={<Button onClick={() => {
        console.log('aaaa');
        router.pushState("/pages/about");
      }}>Contact</Button>} />
      <Route  ref="$home2" path="/pages/router.html" content={<Button>Home</Button>} />      
    </Router>
    </div>    
  );
});
