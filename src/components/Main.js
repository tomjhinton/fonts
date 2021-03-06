
import React from 'react'
import { SketchPicker } from 'react-color';


class Main extends React.Component{
  constructor(){
    super()
    this.state = {
      data: {},
      error: '',
      font: 'Passio',
      fontList: [{name: 'Passio'}, {name: 'Ferrite'}, {name: 'Art-Dystopia II'}, {name: 'ChunkFive'}, {name: 'Orbitron Black'}, {name: 'Tapeworm'}],
      fontSize: 2,
      fontColor: 'black',
      bgColor: 'white'

    }
    this.componentDidMount = this.componentDidMount.bind(this)
    this.fontSelect = this.fontSelect.bind(this)
    this.handleChangeComplete = this.handleChangeComplete.bind(this)







  }


  componentDidMount(){



  }

  componentDidUpdate(){



  }

  mouseMove(e){

    //console.log(e)

    // this.setState({bass: `${e.screenX /100000} ${e.screenY /100000} `, scale: `${e.screenY /2}` })
  }

  fontSelect(e){
    this.setState({font: e.target.innerText})
  }

  handleChangeComplete(color) {
    this.setState({ background: color.hex })
  }

  render() {


    console.log(this.state)
    return (

      <div onMouseMove={this.mouseMove} className="container">
        <SketchPicker
          color={ this.state.background }
          onChangeComplete={ this.handleChangeComplete }/>

        <div className='columns'>
          <div className='column is-2'>

            {this.state.fontList.map((x,index)=>{
              return(
                <div key={index} onClick={this.fontSelect} style={{fontFamily: x.name, cursor: 'pointer'}}>
                  {x.name}
                </div>

              )

            })}

          </div>
          <div className='column'  style={{fontFamily: this.state.font}}>
            <p>
            The sky above the port was the color of television, tuned to a dead channel.
            </p>

            <p>
            The sky above the port was the color of television, tuned to a dead channel.
            </p>

            <p>
            The sky above the port was the color of television, tuned to a dead channel.
            </p>

            <p>
            The sky above the port was the color of television, tuned to a dead channel.
            </p>

            <p>
            The sky above the port was the color of television, tuned to a dead channel.
            </p>

          </div>

        </div>

      </div>




    )
  }
}
export default Main
