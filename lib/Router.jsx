import React from 'react';
import {mount} from 'react-mounter';
// load Layout and Welcome React components
// import {Layout, Welcome} from './app.jsx';

FlowRouter.route("/",{name:"Home",
action(params){
    renderView(<Home/>);
}});

function renderView(component) {
    mount(MainLayout
    ,{
            header: <Header/>,
            content:component,
            footer:<Footer/>,
            logThis:"This is a property"
        });
}


/*import React from 'react';
import {mount} from 'react-mounter';
// load Layout and Welcome React components
import {Layout, Welcome} from './app.jsx';

FlowRouter.route("/", {
  action() {
    mount(Layout, {
        content: (<Welcome name="arunoda"/>)
    });
  }
});*/
