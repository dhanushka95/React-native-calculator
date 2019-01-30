/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity,Button} from 'react-native';



export default class App extends Component {
  constructor(){
    super()
    this.state={
      resutValue: "",
      calculationText: ""
    }
    this.operation=['DEL','+','-','*','/']
    
    }

    calculateResult(){
      const text=this.state.resutValue
      this.setState({
        calculationText:eval(text)
      })
      

    }

    validate(){
      const text=this.state.resutValue
      switch(text.slice(-1)){
        case '+':
        case '-':
        case '*':
        case '/':
        return false
      }
      return true
    }

    operat(operation){

    switch(operation){
      case'D':
              let text=this.state.resutValue.split('')
              text.pop()
              this.setState({
                resutValue:text.join('')
              })
      break;

      case'+':
      
      case'-':
      
      case'*':
     
      case'/':
    

      const lastCharacter=this.state.resutValue.split('').pop()

      if(this.operation.indexOf(lastCharacter) > 0)return

      if(this.validate() && this.state.resutValue=="") return 

      this.setState({
        resutValue:this.state.resutValue+operation

      })


      

    }

    }

    buttonOnPressed(text){

    if(text=='='){

     return this.calculateResult()
    }

      this.setState({
        resutValue:this.state.resutValue+text

      })
    }

  render() {

    let rows=[]
    let nums=[[1, 2, 3],[4, 5, 6],[7, 8,9 ],['.', 0, '=']]
    for(let i=0;i<4;i++){
    let row=[]
      for(let k=0;k<3;k++){
          row.push(<TouchableOpacity key={nums[i][k]} onPress={() => this.buttonOnPressed(nums[i][k]) } style={styles.btn}>
            <Text style={styles.btnText}>{nums[i][k]}</Text>
            </TouchableOpacity>) 

      }
        rows.push(<View key={i} style={styles.row}>{row}</View>)

    }

    
    let ops=[]
    for(let i=0;i<5;i++){

      ops.push(<TouchableOpacity key={this.operation[i]} onPress={() => this.operat(this.operation[i]) } style={styles.btn}>
        <Text style={[styles.btnText,styles.white]}>{this.operation[i]}</Text>
        </TouchableOpacity>)

    }


    return (
      <View style={styles.container}>
       
       <View style={styles.result}>
       <Text style={styles.resultText}>{this.state.resutValue}</Text>
       </View>
       <View style={styles.calculation}>
       <Text style={styles.calculationText}>{this.state.calculationText}</Text>
       </View>
       <View style={styles.button}>
          <View style={styles.numbers}>
                 
                {rows}

            </View>
            <View style={styles.operation}>
            
                    {ops}
              
            </View>
       </View>
     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  result:{
    flex: 2,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'flex-end'
  },
  calculation:{
    flex: 1,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'flex-end'
  },
  button:{
    flex: 7,
    flexDirection:'row',
   
  },
  btn:{
    flex:1,
    alignItems:'center',
    alignSelf:'stretch',
    justifyContent:'center',
  },
  btnText:{
    fontSize:30,
    color:'white',
  },
  white:{
    color:'white'
  }
  ,
  numbers:{
    flex: 3,
    backgroundColor:'#434343',
    color:'white'
  },
  operation:{
    flex: 1,
    backgroundColor:'#636363',
    justifyContent:'space-around',
   
  },
  resultText:{
    fontSize:30,
    color:'black'
  },
  calculationText:{
    fontSize:24,
    color:'black'
  },
  row:{
    flexDirection:'row',
    flex:1,
    justifyContent:'space-around',
    alignItems:'center'
  }

});
