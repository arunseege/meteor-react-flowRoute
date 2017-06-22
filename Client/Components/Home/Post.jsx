var React = require('react');
var createReactClass = require('create-react-class');
Post = createReactClass({
    render(){
        consloe.log("inside POST asp");
        let {post}=this.props;
        console.log(post.user);
        return (
            <div className="card">
                <h3>{post.user}</h3>
                <p>{post.content}</p>
            </div>
        )
    }
});