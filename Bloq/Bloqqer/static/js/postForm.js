
var PostList = React.createClass({
    PushPostToServer: function(post){
     var posts = this.state.data;
     post.id = Date.now();
     var newPosts = posts.concat([post]);
     this.setState({data: newPosts});
     console.log(post)
     $.ajax({
      url: 'http://localhost:8000/bloq/api/',
      dataType: 'json',
      type: 'POST',
      data: post,
      success: function(data) {
      this.setState({data:data});
      var id = post.id
      //window.location.href="http://localhost:8000/bloq/" + id + "/";
      }.bind(this),
      error: function(xhr, status, err) {
        this.setState({data: post});
        console.error('/post/api/', status, err.toString());
      }.bind(this)
    });
   },

    getInitialState: function() {
        return {data: []};
    },
    render: function() {
        return (
            <div>
              <CommentForm onCommentSubmit={this.PushPostToServer}/>
            </div>
        )
    }
});

var CommentForm = React.createClass({
  getInitialState: function() {
    return {user: '', title:'', description: '', date:''};
  },
  handleDescriptionChange: function(e) {
    this.setState({description: e.target.value});
  },
  handleTitleChange: function(e) {
    this.setState({title: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var description = this.state.description.trim();
    var title = this.state.title.trim();
    if (!description || !title) {
      return;
    }
    this.props.onCommentSubmit({title:title, description: description});
    this.setState({description: '', title: ''});
  },
  render: function() {
    return (
      <form className="commentForm create" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Say something..."
          value={this.state.description}
          onChange={this.handleDescriptionChange} />
        <input
          type="text"
          placeholder="Title here"
          value={this.state.title}
          onChange={this.handleTitleChange} />
        <input type="submit" value="Post" />
      </form>
    );
  }
});

ReactDOM.render(<PostList url='/bloq/api/' pollInterval={1000} />, 
    document.getElementById('form'))