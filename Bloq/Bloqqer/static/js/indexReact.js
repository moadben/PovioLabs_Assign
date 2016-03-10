
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
            var postNodes = this.state.data.map(function(post){
                return  <div className="post">
                          <h2> {post.title} </h2>
                          <p> {post.description} </p>
                          <p> Posted by: {post.username} </p>
                        </div>
            })
        }
        return (
            <div>
                <ul>
                    {postNodes}
                </ul>
            </div>
        )
    }
});


ReactDOM.render(<PostList url='/bloq/api/' pollInterval={1000} />, 
    document.getElementById('content'))