import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  Pressable,
  StyleSheet
} from 'react-native'

import diceOne from './Assets/dice1.png'
import diceTwo from './Assets/dice2.png'
import diceThree from './Assets/dice3.png'
import diceFour from './Assets/dice4.png'
import diceFive from './Assets/dice5.png'
import diceSix from './Assets/dice6.png'

const App = () => {
  const [uri, setUri] = useState(diceOne)
  const playButtonTapped = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1
    
    switch (randomNumber) {
      case 1:
        setUri(diceOne)        
        break;
      case 2:
        setUri(diceTwo)        
        break;
      case 3:
        setUri(diceThree)        
        break;
      case 4:
        setUri(diceFour)        
        break;
      case 5:
        setUri(diceFive)        
        break;
      case 6:
        setUri(diceSix)        
        break;
    
      default:
        setUri(diceOne)
        break;
    }
}

  return(
    <>
      <View style={styles.container}>
      <Pressable onPress={playButtonTapped}>
        <Image source={uri} style={styles.image}/>
      </Pressable>
      </View>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  gamePlayButton: {
    fontSize: 20,
    marginTop: 30,
    color: '#f2a365',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderColor: '#30475e',
    borderRadius: 5,
    borderWidth: 3,
    fontWeight: 'bold'
  }
})
