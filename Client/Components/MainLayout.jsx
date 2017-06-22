var React = require('react');
var createReactClass = require('create-react-class');
MainLayout = createReactClass({
    render(){
        return (
            <div>
            {this.props.header}
{this.props.content}
{this.props.footer}
{this.props.logThis}

            </div>
    )
    }
});


