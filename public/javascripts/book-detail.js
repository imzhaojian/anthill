/**
 * 书籍详细信息页面
 */
class BookDetail extends React.Component {
    render(){

        let baseInfo = {
            name: this.props.book.name,
            author: this.props.book.author,
            publishHouse: this.props.book.publishHouse,
            publishTime: this.props.book.publishTime,
            buyTime: this.props.book.buyTime,
            shortDesc: this.props.book.shortDesc
        };

        return (
            <div className="book-container">
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
        let className;
        if(this.props.className){
            className = "book-base-line "+this.props.className;
        }else{
            className = "book-base-line";
        }

        return (
            <div className={className}>
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
                {this.props.desc}
                <br/><br/>
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
        var i=0;
        let contents = this.props.contents.map((content) => {
            if(content == ''){
                return <br/>
            }
            return <p key={i++}>{content}</p>
        });

        return (
            <div className="book-content">
                {contents}
            </div>
        )
    }
}

var book = {
    starLevel: 3,
    img: "/images/book1.jpg",
    name: "JavaScript权威指南(第6版)",
    author: "David Flanagan",
    publishHouse: "机械工业出版社华章公司",
    publishTime: "2012-11-01T00:00:00.000Z",
    buyTime: "2017-3",
    shortDesc: "内容涵盖JavaScript语言本身",
    desc:"O'Reilly精品图书系列:JavaScript权威指南(第6版)》讲述的内容涵盖JavaScript语言本身，以及Web浏览器所实现的JavaScriptAPI。《O'Reilly精品图书系列:JavaScript权威指南(第6版)》涵盖了HTML5和ECMAScript5，很多章节完全重写，增加了当今Web开发的实践内容，新增的章节包括jQuery、服务器端JavaScript、图形编程以及JavaScript式的面向对象。《O'Reilly精品图书系列:JavaScript权威指南(第6版)》不仅适合初学者系统学习，也适合有经验的JavaScript开发者随手翻阅。",
    contents: [
        "编辑推荐"
        , "《O'Reilly精品图书系列:JavaScript权威指南(第6版)》编辑推荐：经典权威的JavaScript工具书，是程序员学习核心JavaScript语言和由Web浏览器定义的JavaScript API的指南和综合参考手册。第6版涵盖HTML5和ECMAScript5。"
        , "名人推荐"
        , '从1996年以来，本书已经成为JavaScript程序员心中的《圣经》。该书已经印刷了50多万册，Web开发人员对它如是评价：“本书是JavaScript程序员的必备参考……内容组织得很好，而且非常详细。”'
        ,'——Brendan Eich，JavaScript之父，Mozilla CTO '
        ,'“我从本书学到的内容直接影响到我的职业生涯。” '
        , '——Andrew Hedges，Tapulous公司游戏工程师 '
        , '“本书教会了我JavaScript。”'
        , '——Tom Robinson，280 North的创始人，Cappuccion的合作创始人'
        , '“通过阅读本书，我能全面地掌握JavaScript这门语言，本书让我受益匪浅。” '
        , '——J.Chris Anderson，CouchBase的创始人，Apache CouchDB委员会成员，《CouchDB：The Definitive Guide》一书的作者'
        , '“如果让我来推荐一本学习JavaScript的最佳书籍，我一定会推荐本书。”'
        , '——Rey Bango，微软客户端Web社区项目主管和jQuery团队成员'
        , '媒体推荐'
        , '“本书是JavaScript程序员的必备参考.内容组织得很好，而且非常详细。 ”—— Brendan Eich，JavaScript之父，Mozilla CTO'
        , '“我从本书学到的内容直接影响到我的职业生涯。”——Andrew Hedges，Tapulous公司游戏工程师'
        , '“本书教会了我JavaScript。”——Tom Robinson，280 North的创始人，Cappuccion的合作创始人'
        , '“通过阅读本书，我能全面地掌握JavaScript这门语言，本书让我受益匪浅。”——J. Chris Anderson，CouchBase的创始人，Apache CouchDB委员会成员，《CouchDB：The Definitive Guide》一书的作者'
        , '“如果让我来推荐一本学习JavaScript的最佳书籍，我一定会推荐本书。”——Rey Bango，微软客户端Web社区项目主管和jQuery团队成员'
        , '作者简介'
        , '作者：(美国)弗兰纳根(David Flanagan) 译者：淘宝前端团队'
        , ''
        , '弗兰纳根(David Flanagan)是一名程序员，也是一名作家，他在O’Reilly出版的其他畅销书还包括《JavaScript Pocket Reference》、《The Ruby Programming Language》、以及《Java in a Nutshell》。David毕业于麻省理工学院，获得计算机科学与工程学位。他和妻子和孩子一起生活在西雅图和温哥华之间的美国太平洋西北海岸。'
        , '目录'
        , '前言1'
        , '第1章JavaScript概述 5'
        , '1.1JavaScript语言核心 8'
        , '1.2客户端JavaScript 12'
        , '第一部分JavaScript语言核心'
        , '第2章词法结构 25'
        , '2.1字符集 25'
        , '2.2注释 27'
        , '2.3直接量 27'
        , '2.4标识符和保留字 28'
        , '2.5可选的分号 30'
        , '第3章类型、值和变量 32'
        , '3.1数字 34'
        , '3.2文本 38'
        , '3.3布尔值 43'
        , '3.4null和undefined 44'
        , '3.5全局对象 45'
        , '3.6包装对象 46'
        , '3.7不可变的原始值和可变的对象引用 47'
        , '3.8类型转换 48'
        , '3.9变量声明 55'
        , '3.10变量作用域 56'
        , '第4章表达式和运算符 60'
        , '4.1原始表达式 60'
        , '4.2对象和数组的初始化表达式 61'
        , '4.3函数定义表达式 62'
        , '4.4属性访问表达式 63'
        , '4.5调用表达式 64'
        , '4.6对象创建表达式 64'
        , '4.7运算符概述 65'
        , '4.8算术表达式 69'
        , '4.9关系表达式 74'
        , '4.10逻辑表达式 79'
        , '4.11赋值表达式 81'
        , '4.12表达式计算 83'
        , '4.13其他运算符 86'
        , '第5章语句 91'
        , '5.1表达式语句 92'
        , '5.2复合语句和空语句 92'
        , '5.3声明语句 94'
        , '5.4条件语句 96'
        , '5.5循环 101'
    ]
}


ReactDOM.render(<BookDetail book={book}/>,document.getElementById("bookDetailApp"));