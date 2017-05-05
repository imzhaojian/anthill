class BookDetail extends React.Component {
    render(){
        return (
            <div className="book-detail">
                <StarLevel  />
            </div>
        )
    }
}


class StarLevel extends React.Component{
    render() {
        return (
            <div className="starLevel">
                <Star selected={true} level={1} />
                <Star selected={true} level={2} />
                <Star selected={true} level={3} />
                <Star selected={true} level={4} />
                <Star selected={true} level={5} />
            </div>
        )
    }
}

class Star extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <span className="star">☆</span>
        )
    }
}





ReactDOM.render(<BookDetail/>,document.getElementById("bookDetailApp"));