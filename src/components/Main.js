
import React from 'react'



class Main extends React.Component{
  constructor(){
    super()
    this.state = {
      data: {},
      error: '',
      size: 10

    }
    this.componentDidMount = this.componentDidMount.bind(this)







  }


  componentDidMount(){



  }

  componentDidUpdate(){



  }

  mouseMove(e){

    //console.log(e)

    // this.setState({bass: `${e.screenX /100000} ${e.screenY /100000} `, scale: `${e.screenY /2}` })
  }



  render() {


    console.log(this.state)
    return (

      <div onMouseMove={this.mouseMove} className="body">

        <div className='board'>

        </div>

      </div>




    )
  }
}
export default Main
