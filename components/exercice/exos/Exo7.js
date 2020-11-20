function Exo7() {
    const [value, onChangeText] = React.useState('Useless Placeholder');
    let icon = <FontAwesome name="send" size={22} color="white" style={{marginLeft: 15}} />
  
    return (
      <View style={{width: '100%'}}>
        <Text style={styles.title}>Quel est votre prénom ?</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => onChangeText(text)}
          value={value}
        />
        <Exo3 onPress={() => createButtonAlert(value)} text={'Envoyer'} icon={icon} />
      </View>
    );
}

export default Exo7;