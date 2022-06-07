import React from "react";

class RandomUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isDisplay: false,
      data: "",
      name: "",
      text: "Random User",
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((user) => this.setState({ user }));
  }

  handleClick = (event) => {
    console.log(event);
    let data = event.target.id;
    let name = event.target.innerText;
    this.setState({
      isDisplay: true,
      data: data,
      name: name,
    });
  };

  handleLoding = (event) => {
    this.setState({
      text: "Loading..",
    });
  };
  render() {
    if (!this.state.user) {
      return <h2>Data fetching</h2>;
    }

    return (
      <>
        <div>
          <img src={this.state.user.results[0].picture.thumbnail} alt="user" />

          {this.state.isDisplay === true ? (
            <div>
              <p>My {this.state.name} is</p>
              <h2>{this.state.data}</h2>
            </div>
          ) : (
            <p>{this.state.user.results[0].id.name}</p>
          )}

          <button
            onClick={(event) => {
              this.handleClick(event);
            }}
            id={this.state.user.results[0].name.first}
            name="name"
          >
            name
          </button>
          <button
            onClick={(event) => {
              this.handleClick(event);
            }}
            id={this.state.user.results[0].email}
            name="email"
          >
            email
          </button>
          <button
            onClick={(event) => {
              this.handleClick(event);
            }}
            id={this.state.user.results[0].dob.age}
            name="age"
          >
            age
          </button>
          <button
            onClick={(event) => {
              this.handleClick(event);
            }}
            id={this.state.user.results[0].location.street.name}
            name="street"
          >
            street
          </button>
          <button
            onClick={(event) => {
              this.handleClick(event);
            }}
            id={this.state.user.results[0].phone}
            name="phone"
          >
            phone
          </button>
          <button
            onClick={(event) => {
              this.handleClick(event);
            }}
            id={this.state.user.results[0].login.password}
            
          >
            password
          </button>
          <br></br>
          <a href="/">
            <button
              onClick={(event) => {
                this.handleLoding(event);
              }}
            >
              {this.state.text}
            </button>
          </a>
        </div>
      </>
    );
  }
}

export default RandomUser;
