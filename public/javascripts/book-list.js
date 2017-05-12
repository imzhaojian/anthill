/**
 * Created by zhaojian on 2017/5/4.
 */

var BookNode = React.createClass({
    render: function () {
        return (
            <li className="bookNode">
                <div className="cover">
                    <img src={this.props.data.bookImg} />
                </div>
                <div className="name" title={this.props.data.bookName}>
                    <a href={"/book/info/" + this.props.data.bookId} target="_blank">{this.props.data.bookName}</a>
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
        var bookNodes = this.props.data.map(function (comment) {
            return (
                <BookNode data={comment} key={comment.bookId}></BookNode>
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
    render: function () {
        return (
            <div>
                <InnerTopNav />
                <BookListContainer data={this.props.data}/>
            </div>
        );
    }
});
var data = [
    {bookId: "1", bookName: "JavaScript权威指南(第1版)", bookImg: "./images/book1.jpg", desc: "内容涵盖JavaScript语言本身1"},
    {bookId: "2", bookName: "JavaScript权威指南(第2版)", bookImg: "./images/book2.jpg", desc: "内容涵盖JavaScript语言本身2"},
    {bookId: "3", bookName: "JavaScript权威指南(第3版)", bookImg: "./images/book3.jpg", desc: "内容涵盖JavaScript语言本身3"},
    {bookId: "4", bookName: "JavaScript权威指南(第4版)", bookImg: "./images/book4.jpg", desc: "内容涵盖JavaScript语言本身4"},
    {bookId: "5", bookName: "JavaScript权威指南(第5版)", bookImg: "./images/book1.jpg", desc: "内容涵盖JavaScript语言本身5"},
    {bookId: "6", bookName: "JavaScript权威指南(第6版)", bookImg: "./images/book2.jpg", desc: "内容涵盖JavaScript语言本身6"},
    {bookId: "7", bookName: "JavaScript权威指南(第7版)", bookImg: "./images/book3.jpg", desc: "内容涵盖JavaScript语言本身7"},
    {bookId: "8", bookName: "JavaScript权威指南(第8版)", bookImg: "./images/book4.jpg", desc: "内容涵盖JavaScript语言本身8"},
    {bookId: "9", bookName: "JavaScript权威指南(第9版)", bookImg: "./images/book2.jpg", desc: "内容涵盖JavaScript语言本身9"},
    {bookId: "10", bookName: "JavaScript权威指南(第10版)", bookImg: "./images/book3.jpg", desc: "内容涵盖JavaScript语言本身10"},
    {bookId: "11", bookName: "JavaScript权威指南(第11版)", bookImg: "./images/book4.jpg", desc: "内容涵盖JavaScript语言本身11"},
    {bookId: "12", bookName: "JavaScript权威指南(第12版)", bookImg: "./images/book1.jpg", desc: "内容涵盖JavaScript语言本身1"},
    {bookId: "13", bookName: "JavaScript权威指南(第13版)", bookImg: "./images/book2.jpg", desc: "内容涵盖JavaScript语言本身2"},
    {bookId: "14", bookName: "JavaScript权威指南(第14版)", bookImg: "./images/book3.jpg", desc: "内容涵盖JavaScript语言本身3"},
    {bookId: "15", bookName: "JavaScript权威指南(第15版)", bookImg: "./images/book4.jpg", desc: "内容涵盖JavaScript语言本身4"},
    {bookId: "16", bookName: "JavaScript权威指南(第16版)", bookImg: "./images/book1.jpg", desc: "内容涵盖JavaScript语言本身5"},
    {bookId: "17", bookName: "JavaScript权威指南(第17版)", bookImg: "./images/book2.jpg", desc: "内容涵盖JavaScript语言本身6"},
    {bookId: "18", bookName: "JavaScript权威指南(第18版)", bookImg: "./images/book3.jpg", desc: "内容涵盖JavaScript语言本身7"},
    {bookId: "19", bookName: "JavaScript权威指南(第19版)", bookImg: "./images/book4.jpg", desc: "内容涵盖JavaScript语言本身8"},
    {bookId: "20", bookName: "JavaScript权威指南(第20版)", bookImg: "./images/book2.jpg", desc: "内容涵盖JavaScript语言本身9"}
]

ReactDOM.render(
    <Content data={data}/>,
    document.getElementById('content')
);