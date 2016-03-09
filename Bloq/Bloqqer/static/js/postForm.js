
var PostList = React.createClass({
    loadPostFromServer: function(){
        $.ajax({
            url: this.props.url,
            datatype: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this)
        })
    },
    PushPostToServer: function(post){
     var posts = this.state.data;
     post.id = Date.now();
     var newPosts = posts.concat([post]);
     this.setState({data: newPosts});
     console.log(post)
     $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: post,
      success: function(data) {
      //this.setState({data:data});
      var id = post.id
      window.location.href="http://localhost:8000/bloq/" + id + "/";
      }.bind(this),
      error: function(xhr, status, err) {
        this.setState({data: post});
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
   },

    getInitialState: function() {
        return {data: []};
    },

    componentDidMount: function() {
        this.loadPostFromServer();
        setInterval(this.loadPostFromServer, 
                    this.props.pollInterval)
    }, 
    render: function() {
        if (this.state.data) {
            console.log('DATA!')
            var postNodes = this.state.data.map(function(post){
                return  <div>
                          <h2> {post.title} </h2>
                          <li> {post.description} </li>
                        </div>
            })
        }
        return (
            <div>
                <h1>Hello React!</h1>
                <ul>
                    {postNodes}
                </ul>
                <CommentForm onCommentSubmit={this.PushPostToServer}/>
            </div>
        )
    }
});

var CommentForm = React.createClass({
  getInitialState: function() {
    return {username: '', title:'', description: '', date:''};
  },
  handleUsernameChange: function(e) {
    this.setState({username: e.target.value});
  },
  handleDescriptionChange: function(e) {
    this.setState({description: e.target.value});
  },
  handleTitleChange: function(e) {
    var date = new Date()
    date = date.toISOString();
    this.setState({date: date});
    this.setState({title: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var username = this.state.username.trim();
    var description = this.state.description.trim();
    var title = this.state.title.trim();
    var date = this.state.date;
    if (!username || !description || !title) {
      return;
    }
    this.props.onCommentSubmit({username: username, title:title, description: description, date: date});
    this.setState({username: '', description: '', title: '', date:''});
  },
  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={this.state.username}
          onChange={this.handleUsernameChange}/>
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