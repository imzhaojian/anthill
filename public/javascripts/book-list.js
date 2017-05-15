/**
 * Created by zhaojian on 2017/5/4.
 */

var BookNode = React.createClass({
    render: function () {
        return (
            <li className="bookNode">
                <div className="cover">
                    <img src={this.props.data.bookimg} />
                </div>
                <div className="name" title={this.props.data.bookname}>
                    <a href={"/book/info/" + this.props.data.bookid} target="_blank">{this.props.data.bookname}</a>
                </div>
                <div className="appraise">
                    <i className="icon star"></i>
                    <i className="icon star"></i>
                    <i className="icon star"></i>
                    <i className="icon star"></i>
                    <i className="icon star"></i>
                </div>
                <div className="operate">
                    <div className="btn borrow">借阅</div>
                </div>
                <div className="shortDesc">{this.props.data.desc}</div>
            </li>
        );
    }
});

var BookListContainer = React.createClass({
    render: function () {
        var bookNodes = this.props.data.map(function (book) {
            return (
                <BookNode data={book} key={book.bookid}></BookNode>
            );
        });
        return (
            <div className="book-list-container">
                <ul>
                {bookNodes}
                </ul>
            </div>
        );
    }
});

var InnerTopNav = React.createClass({
    render: function () {
        return (
            <div className="innerTopNav">
                <ul>
                    <li className="all active">
                        <a href="">
                            <i className="icon home"></i>
                            所有图书</a>
                    </li>
                    <li className="new">
                        <a href="">
                            <i className="icon important"></i>
                            新书</a>
                    </li>
                    <li className="canBorrow">
                        <a href="">
                            <i className="icon flag"></i>
                            未被借阅的书</a>
                    </li>
                </ul>
            </div>
        );
    }
});


var Content = React.createClass({
    loadAllBookServer: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    getInitialState: function() {
        return {data: []};
    },
    componentDidMount: function() {
        this.loadAllBookServer();
    },
    render: function () {
        return (
            <div>
                <InnerTopNav />
                <BookListContainer data={this.state.data}/>
            </div>
        );
    }
});

ReactDOM.render(
    <Content url="/getAllBook"/>,
    document.getElementById('content')
);