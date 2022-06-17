import { start } from "@elf-framework/sapa";
import { Button, LinkButton } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

start(function () {
  return (
    <div>
      <div>
        <h1>Type</h1>
        <div style="display: flex; align-items: center;">
          <div style={{padding: 10}}>
            <Button>Hello</Button>
            <label>Default</label>
          </div>
          <div style={{padding: 10}}>
            <Button type="primary">Hello</Button>
            <label>Primary</label>
          </div>        
          <div style={{padding: 10}}>
            <Button type="primary" destructive={true}>Hello</Button>
            <label>Primary Destructive</label>
          </div>                
          <div style={{padding: 10}}>
            <Button type="outline">Hello</Button>
            <label>Outline</label>
          </div>      
          <div style={{padding: 10}}>
            <LinkButton>Link</LinkButton>
            <label>link</label>
          </div>      
        </div>                  
      </div>
      <div>
        <h1>Size</h1>
        <div style="display: flex; align-items: center;">
          <div style={{padding: 10}}>
            <Button type="outline" size="large">Hello</Button>
            <label>large</label>
          </div>       
          <div style={{padding: 10}}>
            <Button type="outline">medium</Button>
            <label>medium</label>
          </div>       
          <div style={{padding: 10}}>
            <Button type="outline" size="small">small</Button>
            <label>small</label>
          </div>                     
        </div>          
      </div>
      <div>
        <h1>Disabled</h1>
        <div style="display: flex; align-items: center;">
          <div style={{padding: 10}}>
            <Button disabled={true}>Disabled</Button>
            <label>Disabled</label>
          </div>                   
        </div>        
      </div>
      <div>
        <h1>Shape</h1>
        <div style="display: flex; align-items: center;">
          <div style={{padding: 10}}>
            <Button type="primary" shape="round">Primary</Button>
            <label>Round</label>
          </div>                   
          <div style={{padding: 10}}>
            <Button type="primary" shape="circle">C</Button>
            <label>Circle</label>
          </div>                    
        </div>               
      </div>
      <div>
        <h1>Style</h1>
        <div style="display:flex">
          <div style={{padding: 10}}>
            <Button style={{borderColor: "red"}}>Primary</Button>
            <label>Border Color</label>
          </div>
          <div style={{padding: 10}}>
            <Button type="primary" style={{backgroundColor: "red"}}>Primary</Button>
            <label>Background Color</label>
          </div>        
        </div>        
      </div>
    </div>
  );
});
