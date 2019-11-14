import React,{Component} from 'react'
import {View,Modal,Text} from 'react-native'
import {Button,Card} from'react-native-elements'

export class Team extends Component{
getTotalPlayers(players){
    let total = 0
    if(players !==undefined){
        total = players.length
    }
    return total
}
    render(){
        return(
            <View>
                {
                    <Modal  animationType={this.props.animation} visible={this.props.vis} >
                        <Card
                        title={this.props.equipo.nombre}
                        image={{uri:this.props.equipo.logo}}
                        >
                        <Text>Jugadores:{this.getTotalPlayers(this.props.equipo.jugadores)}</Text>
                            <Text>Estado:{this.props.equipo.estado}</Text>

                    <Button 
                    icon={{name:'x',type:'octicon'}}
                    onPress={()=> this.props.onToggleTeam()} title="Quitar"></Button>

                    </Card>
                    </Modal>
                }
            </View>
        )
    }

}