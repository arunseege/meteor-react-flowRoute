var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
import { findDOMNode } from 'react-dom';
var $ = require('jquery');
import {event} from 'jquery';
//var event = require('jsdom');
//var Posts=require('Posts');
InsertPost = createReactClass({
    insertToCollection(event){
event.defaultPrevented;

var content=$('#post-body').val();
        var user=$('#user').val();
console.log('content',content);
Posts.insert({content:content,user:user,dateAdded:new Date()});
    },
    render(){
        return (

            <div>
                <form onSubmit={this.insertToCollection}>
                    <input className="form-control" id="user" placeholder="User Name"></input>
                <textarea className="form-control" placeholder="Type a Post" id="post-body"></textarea>
                <button type="submit" className="btn btn-info"> Save Post</button>
                </form>
            </div>
        )
    }
});
