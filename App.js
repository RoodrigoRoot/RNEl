import React from 'react';
import { Vibration,StyleSheet, Text, View, Modal } from 'react-native';

import {Teams} from './componets/Teams'
import {Team} from './componets/Team'

const equipos = [
  {
    id: "1",
    nombre: "Equipo 1",
    logo: "https://via.placeholder.com/600x300/77b300/ffffff?text=Logo+equipo",
    estado: true,
    icon: 'av-timer',
    jugadores: [{ nombre: "Hugo" }]
  },
  {
    id: "2",
    nombre: "Equipo 2",
    logo: "https://via.placeholder.com/600x300/2eb8b8/ffffff?text=Logo+equipo",
    estado: false,
    icon: 'av-timer',
    jugadores: [{ nombre: "Paco" }, { nombre: "Luis" }]
  },
  {
    id: "3",
    nombre: "Equipo 3",
    icon: 'av-timer',
    logo: "https://via.placeholder.com/600x300/0040ff/ffffff?text=Logo+equipo",
    estado: true,
    jugadores: [
      { nombre: "Susana" },
      { nombre: "Carolina" },
      { nombre: "Marina" }
    ]
  },
  {
    id: "4",
    nombre: "Equipo 4",
    icon: 'av-timer',
    logo: "https://via.placeholder.com/600x300/ff00bf/ffffff?text=Logo+equipo",
    estado: false,
    jugadores: []
  },
  {
    id: "5",
    nombre: "Equipo 5",
    icon: 'av-timer',
    logo: "https://via.placeholder.com/600x300/D2B48C/ffffff?text=Logo+equipo",
    estado: true,
    jugadores: [{ nombre: "Gabriela" }, { nombre: "Alonso" }]
  }
];


export default class App extends React.Component {

  state={
    teamVisible:false,
    selectedTeam:{}
  }

  toggleTeam(){
    Vibration.vibrate()
    this.setState({
      teamVisible: !this.state.teamVisible
    })
  }

  displayTeam(equipo){
    this.setState({
      selectedTeam:equipo
    })
    this.toggleTeam()
  }

  render(){
    return (
     <View>
       
       
       <Teams onSelectTeam={(equipo)=> this.displayTeam(equipo)} equipos={equipos}/>
        <Team equipo={this.state.selectedTeam} onToggleTeam={()=> this.toggleTeam()}  animation="slide" vis={this.state.teamVisible} />
     </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
