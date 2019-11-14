import React,{Component} from 'react'
import {View,Modal,Text} from 'react-native'
import {Button,Card} from'react-native-elements'

export class Team extends Component{

    render(){
        return(
            <View>
                {
                    <Modal  animationType={this.props.animation} visible={this.props.vis} >
                        <Card
                        title={this.props.equipo.nombre}
                        image={{uri:this.props.equipo.logo}}
                        >
                            <Text>Jugadores:0</Text>
                            <Text>Estado:{this.props.equipo.estado}</Text>

                    <Button onPress={()=> this.props.onToggleTeam()} title="Quitar"></Button>

                    </Card>
                    </Modal>
                }
            </View>
        )
    }

}