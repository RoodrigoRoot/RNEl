import React,{Component} from 'react'
import {Text,View,Modal} from 'react-native'
import { ListItem } from 'react-native-elements';

export class Teams extends Component{
    render(){
        return(
            <View>
                {this.props.equipos.map(equipo=>(
                <ListItem key={equipo.id}
                title={equipo.nombre}
                
                bottomDivider
                onPress={()=>this.props.onSelectTeam(equipo)}
                roundAvatar
                leftAvatar={{source: {uri:equipo.logo}}}
                subtitle={String(equipo.estado)}
                chevron
                />
              ))}
            </View>
        )
    }

}