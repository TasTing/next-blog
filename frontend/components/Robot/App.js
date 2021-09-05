import React from 'react';

class App extends React.Component {
  render(){
    return (
      <div className="robotBody">
        <header className="App-header">
        <h1>Robot Movement</h1>
        <div className='usage'>Usage:
          <div>PLACE X,Y,F</div>
          <div>i,e: PLACE 0,0,EAST</div>
          <div>MOVE</div>
          <div>RIGHT</div>
          <div>LEFT</div>
        </div>
        <div className="robot-table">
          <Board />
        </div>
        </header>
      </div>
    );
  }
}

//Each Square on Table
class Square extends React.Component {
  render() {
    if (this.props.xaxis==this.props.xpos && this.props.yaxis==this.props.ypos){
      return (
        <div className="square" xaxis={this.props.xaxis} yaxis={this.props.yaxis} face={this.props.face} >
          <Robot face={this.props.face}/>
        </div>
      );
    } else {
      return(
        <div className="square" xaxis={this.props.xaxis} yaxis={this.props.yaxis} >
        </div>
      )
    }
  }
}

//Table Component
class Board extends React.Component {
  //Position and Direction of Index
  constructor(props){
    super(props);
    this.state= {
      cmd:'',
      details:'',
      xpos:null,
      ypos:null,
      face:1,
      report:''
    }
  }

  //Handle input
  handleChange = event => {
    this.setState({
      cmd: event.target.value.split(' ')[0]
    })
  }

  //Switch for input
  faceswitch(e){
    switch(e){
      case('WEST'):return 1;
      case('NORTH'):return 2;
      case('EAST'):return 3;
      case('SOUTH'):return 4;
      default:return 0;
    }
  }

  //Switch for output
  faceswitch2(e){
    let direction = Math.abs(e)%4
    switch(direction){
      case(1):return 'WEST';
      case(2):return 'NORTH';
      case(3):return 'EAST';
      case(4):return 'SOUTH';
      default:return 0;
    }
  }

  //Place the robot (default robot is not on the table)
  handleSubmit = event => {
    event.preventDefault();
    this.setState({
        cmd:this.input.value.split(' ')[0]
    })
    //TRY CATCH TO THROW EXCEPTIONS
    if (this.state.cmd=='PLACE'){
      try {
        this.setState({
          xpos: this.input.value.split(' ')[1].split(',')[0],
          ypos: this.input.value.split(' ')[1].split(',')[1],
          face: this.faceswitch(this.input.value.split(' ')[1].split(',')[2])
        })
      }
      catch (e) {
        console.error(e.message);
      }
    } else {
      //CMDS NOT 'PLACE' DO NO REQUIRE STRING SPLITS
      if(this.state.cmd=="REPORT"){
        if(this.state.xpos!=null||this.state.ypos!=null){
          this.setState({
            report:`${this.state.xpos} , ${this.state.ypos} , ${this.faceswitch2(this.state.face)}`
          })
        } else {
          alert("Index is not placed yet")
        }

      }
      //CONSTRAINTS OF MOVEMENT
      if(this.state.cmd=="MOVE"){
        if(this.state.xpos!=null||this.state.ypos!=null){
          if (Math.abs(this.state.face)%4==0){
            let e = parseInt(this.state.ypos) - 1
            if (e > -1){
              this.setState({ ypos: parseInt(this.state.ypos) - 1 })
            }
          }
          if (Math.abs(this.state.face)%4==1) {
            let e = parseInt(this.state.xpos) - 1
            if (e > -1){
              this.setState({ xpos: parseInt(this.state.xpos) - 1 })
            }
          }
          if (Math.abs(this.state.face)%4==2) {
            let e = parseInt(this.state.ypos) + 1
            if (e < 5){
              this.setState({ ypos: parseInt(this.state.ypos) + 1 })
            }
          }
          if (Math.abs(this.state.face)%4==3) {
            let e = parseInt(this.state.xpos) + 1
            if (e < 5){
              this.setState({ xpos: parseInt(this.state.xpos) + 1 })
            }
          }
        } else {
          alert("Index is not placed yet")
        }
      }

      //ROTATE RIGHT
      if(this.state.cmd=="RIGHT"){
        if(this.state.xpos!=null||this.state.ypos!=null){
          let e = this.state.face + 1;
          if (e < 4){
            this.setState({ face: this.state.face + 1 })
          } else {
            this.setState({ face: 0 })
          }
        } else {
          alert("Index is not placed yet")
        }
      }
      //ROTATE LEFT
      if(this.state.cmd=="LEFT"){
        if(this.state.xpos!=null||this.state.ypos!=null){
          let e = this.state.face - 1;
          if (e > -1){
            this.setState({ face: this.state.face - 1 })
          } else {
            this.setState({ face: 3 })
          }
        } else {
          alert("Index is not placed yet")
        }
      }
    }
  }



  renderSquare(x,y,f) {
    return <Square xaxis = {x} yaxis={y} defaultface={f} xpos={this.state.xpos} ypos={this.state.ypos} face={this.state.face}/>;
  }

  //Draw the Table for robot move
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0,4)}
          {this.renderSquare(1,4)}
          {this.renderSquare(2,4)}
          {this.renderSquare(3,4)}
          {this.renderSquare(4,4)}
        </div>
        <div className="board-row">
          {this.renderSquare(0,3)}
          {this.renderSquare(1,3)}
          {this.renderSquare(2,3)}
          {this.renderSquare(3,3)}
          {this.renderSquare(4,3)}
        </div>
        <div className="board-row">
          {this.renderSquare(0,2)}
          {this.renderSquare(1,2)}
          {this.renderSquare(2,2)}
          {this.renderSquare(3,2)}
          {this.renderSquare(4,2)}
        </div>
        <div className="board-row">
          {this.renderSquare(0,1)}
          {this.renderSquare(1,1)}
          {this.renderSquare(2,1)}
          {this.renderSquare(3,1)}
          {this.renderSquare(4,1)}
        </div>
        <div className="board-row">
          {this.renderSquare(0,0)}
          {this.renderSquare(1,0)}
          {this.renderSquare(2,0)}
          {this.renderSquare(3,0)}
          {this.renderSquare(4,0)}
        </div>
        <div className="inputfield">
          <form onSubmit={this.handleSubmit}>
            <input type='text' onChange={this.handleChange} placeholder="Enter a Command" ref={(input) => this.input = input}></input>
            <button type='submit'>
              Go!
            </button>
          </form>
          <div>Your Input Command is:</div>
          <div className="inputresult">{this.state.cmd}</div>
          <div>Your Output report is:</div>
          <div className="output">{this.state.report}</div>
        </div>
      </div>
    );
  }
}

//Landing Index with facing direction
class Robot extends React.Component{
  render(){
    return(
      <div className='robot'>
        <img src="https://s3.envato.com/files/144770895/5.png" style={{transform: `rotate(${this.props.face*90}deg)`}} alt='I am robot'/>
      </div>
    )
  }
}


export default App;
