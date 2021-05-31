import React, { Component } from 'react';
import AddSubscriber from './AddSubscriber';
import Header from "./Header";
import ShowSubscriber from './ShowSubscriber';
import {BrowserRouter as Router ,Route} from 'react-router-dom';
class PhoneDirectory extends Component{
    constructor(){
        super();
        this.state = {
            subscriberList:[{
                id:1,
                name:  'Vipin Mohan',
                phone:'9980703426'
            },{
                id:2,
                name:'Jithin Mohan',
                phone:'8086038750'
            }]
        }
    }
    addSubscriberHandler=(newSubscriber) =>{
        let subscriberList = this.state.subscriberList;
        if(subscriberList.length>0){
            newSubscriber.id=subscriberList[subscriberList.length-1].id+1;
        }
        else{
            newSubscriber.id=1;
        }
        subscriberList.push(newSubscriber);
        this.setState({subscriberList:subscriberList});
        console.log(this.state.subscriberList);
    }
    render(){
        return (
            
            <Router>
                <div classNmae="main-container">
                <Route exact path='/' render ={(props)=> <ShowSubscriber {...props} subscriberList={this.state.subscriberList}/>}/>
                <Route exact path='/add' render ={({history},props)=> <AddSubscriber history={history} {...props} addSubscriberHandler={this.addSubscriberHandler}/>}/>
                </div>
            </Router>
            

        )
    }
}
export default PhoneDirectory;