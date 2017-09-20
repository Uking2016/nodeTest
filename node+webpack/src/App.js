import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'

class Header extends React.Component{
    constructor(){
        super();
        this.state={ 
            lastRoute : "/next",
            nextRoute : "/last"
        };
    }
    render(){
      return(
        
         <div className="header">
         

             <p>上一页</p>
             <p>标题</p>
             <p><Link to="/next">下一页</Link></p>
            
         </div>
      
      );
    }
}
class TabsControl extends React.Component{
    constructor(){
        super();
        this.state={ 
            currentIndex : 0
        };
    }
    check_tittle_index(index){
        return index===this.state.currentIndex ? "Tab_tittle active" : "Tab_tittle";
    }

    check_item_index(index){
        return index===this.state.currentIndex ? "Tab_item show" : "Tab_item";
    }

    render(){
        let _this=this;
        return(
            <div>
                {/*动态生成Tab导航*/}
                <div className="Tab_tittle_wrap">
                    { React.Children.map( this.props.children , (element,index) => {
                        return(
                            /*箭头函数没有自己的this，这里的this继承自外围作用域，即组件本身*/
                            <div onClick={ () => { this.setState({currentIndex : index}) } } className={ this.check_tittle_index(index) }>{ element.props.name }</div>
                            );
                    }) }
                </div>
                {/*Tab内容区域*/}
                <div className="Tab_item_wrap">
                    {React.Children.map(this.props.children,(element,index)=>{
                        return(
                            <div className={ this.check_item_index(index) }>{ element }</div>
                            );
                    })}
                </div>
            </div>
            );
    }
}

class App extends React.Component{


  render() {
   
    return (<Router>
          
           
            <div className="container">

                <Header></Header>
                <TabsControl>
                    <div name="社会新闻">
                        社会新闻的内容
                    </div>
                    <div name="体育世界">
                        体育世界的内容
                    </div>
                    <div name="娱乐圈">
                        娱乐圈的内容<Route path="/next" component={next}/>
                    </div>
                </TabsControl>
             
                  
            </div>
          
           </Router>

            );
    }
}
class next extends React.Component{

    render(){
        return(

            <div className="next">
                我是下一页内容
            </div>
            );
    }
}
class nextnext extends React.Component{

    render(){
      console.log("in render nextnext");
        return(

            <div className="next">
                我是下一页de下一页内容
            </div>
            );
    }
}
    <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/next" component={next}/>
            <Route path="/nextnext" component={nextnext}/>
    </Switch>  

export {App,next};
