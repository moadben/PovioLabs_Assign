/*console.log("Hi");

function AddPostEvent(){
  console.log("It Worked!");
  var event = document.createEvent('Event');
  event.initEvent('addPostNav', true, true);
}


var AddPost = React.createClass({
  getInitialState: function (){
    return { showModal: 'none' }
  },
  componentDidMount: function (){
    var self = this;
    document.addEventListener('addPostNav', function (e) {
      self.showModal();
    }, false);
  },
  showModal: function () {
    this.setState({ showModal: 'inherit' });
  },
  closeModal: function (){
    this.setState({ showModal: 'none'});
  },
  addPost: function(){
    var self=this;
    var date = new Date();
    date = date.toISOString();

    var sendData = {title: $('#addNewsModalTitle').val(), description: $('#addNewsModalDescription'), username: "", date: date}

    $.ajax({
      url: 'localhost:8000/post/api/',
      dataType: 'json',
      data: sendData,
      success: function (data) {
        var id = data.id
        window.location.href="localhost:8000/post/" + id + "/";
      }.bind(this),
      error: function (xhr, status, err) {
        console.error("localhost:8000", status, err.toString());
      }.bind(this)
    });
  return false},
  render: function (){
    var style = {display: this.state.showModal, top: '50px'};
    var close = <button className="btn btn-default" onClick={this.closeModal}>Close</button>;
    var addPostBody = <div>
                          <form>
                            <label> Title: </label>
                            <input type="text" className="form-control" id="addPostModalTitle" />

                            <label> Description: </label>
                            <textarea className="form-control" style={{height: '350px'}} id="addPostModalDescription" />

                            <label> Username: </label>
                            <input type="text" className="form-control" id="addPostModalUsername" />

                            <button style={{marginTop: '20px'}} className="btn btn-primary" onClick={this.addPost}> Add Post </button>
                          </form>
                      </div>
    return (  
      <div>
        <AddPostModal style={style} title="Add a new post" close={close} body={addPostBody} />
      </div>
      )
  }
});


var AddPostModal = React.createClass({
  render: function () {
    return (
      <div id="AddPostModal" className="modal" style={this.props.style}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type = "button" className="close"></button>
              <h4 className="modal-title">{this.props.title}</h4>
            </div>
            <div className="modal-body">
              {this.props.body}
              <br />
              {this.props.matches}
            </div>
            <div className="modal-footer">
              {this.props.close}
            </div>
          </div>
        </div>
      </div>
    )
  }
});

ReactDOM.render(
  <AddPost />,
  document.getElementById('addPost')
  ) */