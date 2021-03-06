import React from 'react'
import { connect } from 'react-redux'


import { Button } from 'react-bootstrap';

import TaskboardContainer from './TaskboardContainer';
import SessionContainer from './SessionContainer'
import NewProjectForm from '../components/NewProjectForm'


class UserDashboard extends React.Component{
    state={
        formActive: false
       
    }

    toggleForm=() =>{
        this.setState({formActive: !this.state.formActive})
    }
 
    render(){
        return(
            <>
           
             {
                 this.state.formActive
                 ?
                 <NewProjectForm toggleForm={this.toggleForm}/>
                 :
                 <>
                    <Button onClick={this.toggleForm} variant="outline-info" size="sm" className='float-right'> Add a New Project</Button> <br></br><br></br>
                    <TaskboardContainer/>
                    
                    <SessionContainer />
                </>
             }
             
            </>
        )
    }
}


function msp(state){
      return state
    }
    
   
  
  export default connect(msp)(UserDashboard);