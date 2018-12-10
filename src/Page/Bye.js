import  React from 'react'
import MyButton from '../components/Buttons'
import { increment } from '../start/action/count';
import { connect } from 'react-redux';
import { stat } from 'fs';
class Bye extends React.Component{
    constructor(props){
        super(props);
        this.state={};
console.log(this.props,21221)
    }

    render(){
        return (
      <div>

          <div>{this.props.count}</div>
      </div>
        )
       
    }
    
}
export default connect(state=>({count:state.count.count}),{increment})(Bye);