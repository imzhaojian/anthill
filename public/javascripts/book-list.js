/**
 * Created by zhaojian on 2017/5/4.
 */

/**
 * page
 */
var Page = React.createClass({
    loadAllBookServer: function (event) {
        this.props.loadAllBookServer(this.props.type, event.target.getAttribute("data-pageNo"));
    },
    render: function () {
        var totalPage = this.props.totalPage;
        var pageNo = this.props.pageNo;
        var pageLi = [];

        pageLi.push(<li className={pageNo <= 1 ? "cursor prev icon up disable" : "cursor prev icon up"}></li>);
        for (var index = 1; index <= totalPage; index++) {
            pageLi.push((function (index) {
                return (<li className={pageNo == index ? "cursor current" : "cursor"} key={index} data-pageNo={index} onClick={this.loadAllBookServer}>{index}</li>);
            }.bind(this))(index));
        }
        pageLi.push(<li className={pageNo >= totalPage ? "cursor next icon down disable" : "cursor next icon down"}></li>);

        return (
            <div className="pager">
                <ul className="cursorContainer">
                    {pageLi}
                </ul>
            </div>
        );
    }
})

/**
 *  返回顶部
 */
var GoTop = React.createClass({
    getInitialState: function () {
        $(window).scroll(function () {
            var scrollValue = $(window).scrollTop();
            if (scrollValue > 200 && !this.state.show) {
                this.setState({show: true})
            }
            ;
            if (scrollValue < 200 && this.state.show) {
                this.setState({show: false})
            }
            ;
        }.bind(this));

        return {show: false};
    },
    goToTop: function () {
        $('html,body').animate({scrollTop: 0}, 500);
        this.setState({show: false});
    },
    render: function () {
        return (
            <div className={this.state.show ? "gotop icon up show" : "gotop icon up"} onClick={this.goToTop}></div>
        )
    }
});

/**
 * 书籍详细信息页面
 */
class BookDetailContainer extends React.Component {
    render() {
        let baseInfo = {
            name: this.props.book.name,
            author: this.props.book.author,
            publishHouse: this.props.book.publishHouse,
            publishTime: this.props.book.publishTime,
            buyTime: this.props.book.buyTime,
            shortDesc: this.props.book.shortDesc
        };

        return (
            <div className="book-detail-container center-flip">
                <div className="book-info-container">
                    <BookImg img={this.props.book.img} />
                    <BookBaseInfo baseInfo={baseInfo} />
                    <BookDesc desc={this.props.book.desc} contents={this.props.book.contents} />
                </div>
            </div>
        )
    }
}
/**
 * 书籍图片信息
 */
class BookImg extends React.Component {
    render() {
        return (
            <div className="book-img-container">
                <img src={this.props.img} />
            </div>
        )
    }
}

class BookBaseInfo extends React.Component {

    render() {
        return (
            <div className="book-base-container">
                <BookBaseLine className="book-name" content={this.props.baseInfo.name} />
                <BookBaseLine className="book-author" content={this.props.baseInfo.author} />
                <BookBaseLine  content={this.props.baseInfo.publishHouse} />
                <BookBaseLine  content={this.props.baseInfo.publishTime} />
                <BookBaseLine  content={this.props.baseInfo.buyTime} />
                <BookBaseLine className="book-short-desc"  content={this.props.baseInfo.shortDesc} />
            </div>
        )
    }
}

/**
 * 书籍单条基础信息
 */
class BookBaseLine extends React.Component {
    render() {
        return (
            <div className={ this.props.className ? "book-base-line " + this.props.className : "book-base-line"}>
                {this.props.content}
            </div>
        )
    }
}

/**
 * 书籍介绍
 */
class BookDesc extends React.Component {
    render() {
        return (
            <div className="book-desc-container">
                <p dangerouslySetInnerHTML={{__html: this.props.desc}}></p>
                <br/>
                <br/>
                <BookContent contents={this.props.contents} />
            </div>
        )
    }
}

/**
 * 书籍推荐
 */
class BookContent extends React.Component {

    render() {
        return (
            <div className="book-content" dangerouslySetInnerHTML={{__html: this.props.contents}} >
            </div>
        )
    }
}

var BookNode = React.createClass({
    loadBookDetailServer: function () {
        this.props.loadBookDetailServer(this.props.data.id);
    },
    render: function () {
        var rank = this.props.data.starLevel;
        var stars = [];
        for (var index = 0; index < rank; index++) {
            stars.push(<i className="icon star" key={index}></i>);
        }
        return (
            <li className="bookNode">
                <div className="cover">
                    <img src={this.props.data.img} />
                </div>
                <div className="name" title={this.props.data.name}>
                    <a href={"javascript:void(0);"}  onClick={this.loadBookDetailServer}>{this.props.data.name}</a>
                </div>
                <div className="appraise">
                    {stars}
                </div>
                <div className="operate">
                    <div className="btn borrow">借阅</div>
                </div>
                <div className="shortDesc">{this.props.data.shortDesc.length > 20 ? this.props.data.shortDesc.substring(0, 20) + "..." : this.props.data.shortDesc}</div>
            </li>
        );
    }
});

var BookListContainer = React.createClass({
    render: function () {
        var bookNodes = this.props.data.map(function (book) {
            return (
                <BookNode data={book} key={book.id} loadBookDetailServer={this.props.loadBookDetailServer}></BookNode>
            );
        }.bind(this));
        return (
            <div className="book-list-container center-flip">
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
            return (
                <li className={catalog.type == this.state.type ? catalog.type + " active" : catalog.type} key={catalog.type} data-key={catalog.type} onClick={this.handleClick}>
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
    loadAllBookServer: function (type, pageNo) {
        this.setState({type: type});
        $(".book-list-container").removeClass("s-hide").addClass("s-show");
        $(".book-detail-container").removeClass("s-show").addClass("s-hide");
        $.ajax({
            url: this.props.listUrl,
            data: {
                type: type,
                pageNo: pageNo ? pageNo : 1
            },
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data.results, pageNo: data.pageNo, totalPage: data.totalPage});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    loadBookDetailServer: function (id) {
        $(".book-detail-container").removeClass("s-hide").addClass("s-show");
        $(".book-list-container").removeClass("s-show").addClass("s-hide");
        $.ajax({
            url: this.props.detailUrl,
            data: {
                id: id
            },
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({book: data[0]});
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    getInitialState: function() {
        return {data: [], pageNo: 1, totalPage: 1, book: {}, type: "all"};
    },
    componentDidMount: function() {
        this.loadAllBookServer("all");
    },
    render: function () {
        return (
            <div>
                <InnerTopNav loadAllBookServer={this.loadAllBookServer}/>
                <BookListContainer data={this.state.data} loadBookDetailServer={this.loadBookDetailServer}/>
                <BookDetailContainer book={this.state.book}/>
                <GoTop></GoTop>
                <Page pageNo={this.state.pageNo} totalPage={this.state.totalPage} type={this.state.type} loadAllBookServer={this.loadAllBookServer}></Page>
            </div>
        );
    }
});

ReactDOM.render(
    <Content listUrl="/getAllBook" detailUrl="/bookDetail"/>,
    document.getElementById('content')
);

