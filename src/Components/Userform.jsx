import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'
import { Confirm } from './Confirm'
import Success from './Success'

export class Userform extends Component {

        state ={
           step:1,
           firstName:'',
           lastname:'',
           email:'',
           occupation:'',
           city:'',
           bio:''  
        }
        //proceed to next step
        nextStep =()=>{
           const {step} =this.state;
           this.setState({
            step:step+1
        })
        }
        //go back to previous step
        prevStep =()=>{
            const {step} =this.state;
            this.setState({
             step:step-1
         })
         }
    
         //Handle fields change
    
         handleChange = input => e=>{
            this.setState({[input] :e.target.value})
         }

    
  render() {
    const {step} = this.state;
    const {firstName,lastname,email,occupation,city,bio} = this.state
    const values ={firstName,lastname,email,occupation,city,bio}

    switch (step) {
        case 1:
            return(
               <FormUserDetails 
               nextStep={this.nextStep}
               handleChange={this.handleChange}
               values={values}/>
            )
        case 2:
            return (
                <FormPersonalDetails
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
                />
            )
        case 3:
            return (
                <Confirm
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
                />
            )
        case 4:
            return <Success/>
}

  }
}
export default Userform