/**
 * Created by zhaojian on 2017/5/4.
 */

var BookNode = React.createClass({
    render: function () {
        var rank = this.props.data.starLevel;
        var stars = [];
        {
            for (var index = 0; index < rank; index++) {
                stars.push(<i className="icon star" key={index}></i>);
            }
        }
        return (
            <li className="bookNode">
                <div className="cover">
                    <img src={this.props.data.img} />
                </div>
                <div className="name" title={this.props.data.name}>
                    <a href={"/book-detail?id=" + this.props.data.id} target="_blank">{this.props.data.name}</a>
                </div>
                <div className="appraise">
                    {stars}
                </div>
                <div className="operate">
                    <div className="btn borrow">借阅</div>
                </div>
                <div className="shortDesc">{this.props.data.shortDesc}</div>
            </li>
        );
    }
});

var BookListContainer = React.createClass({
    render: function () {
        var bookNodes = this.props.data.map(function (book) {
            return (
                <BookNode data={book} key={book.id}></BookNode>
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
    getInitialState: function () {
        return {type: "all"};
    },
    handleClick: function (event) {
        var type = event.target.getAttribute('data-key');
        this.setState({type: type});
        this.props.loadAllBookServer(type);
    },
    render: function () {
        var catalogs = [{type: "all", name: "所有图书"}, {type: "new", name: "新书"}, {type: "canBorrow", name: "未被借阅的书"}];

        var navLis = catalogs.map(function (catalog) {
            var className = catalog.type == this.state.type ? catalog.type + " active" : catalog.type;
            return (
                <li className={className} key={catalog.type} data-key={catalog.type} onClick={this.handleClick}>
                    <i className="icon home" data-key={catalog.type}></i>{catalog.name}
                </li>
            )
        }.bind(this));
        return (
            <div className="innerTopNav">
                <ul>
                    {navLis}
                </ul>
            </div>
        );
    }
});


var Content = React.createClass({
    loadAllBookServer: function (type) {
        $.ajax({
            url: this.props.url,
            data: {
                type: type
            },
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
        this.loadAllBookServer("all");
    },
    render: function () {
        return (
            <div>
                <InnerTopNav loadAllBookServer={this.loadAllBookServer}/>
                <BookListContainer data={this.state.data}/>
            </div>
        );
    }
});

ReactDOM.render(
    <Content url="/getAllBook"/>,
    document.getElementById('content')
);

