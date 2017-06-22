var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
//var mixins = require('react-mixin');
Home = createReactClass({
   // mixins: [ReactMeteorData],
    getMeteorData(){
    var posts=Posts.find().fetch();
    return{
        posts:posts
    }
  },
    getPosts(){

       return  Posts.find().fetch();
    },
    renderPosts(){
        console.log("inside renderpost");

    return this.getPosts().map(function(post){
      return( <Post key={post._id} post={post} />
        )
    });
    },
   render(){
         return (
            <div>
            <h1> Hello World</h1>
                <InsertPost/>
            <br/>
<div>
               {
                   this.renderPosts()
               }</div>
            </div>
        )
    }
});


