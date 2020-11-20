function Exo11 () {
    const [count, onChangeCount] = React.useState(0);
    let icon = <View style={{padding: 10, borderRadius: 100, backgroundColor: '#fff', marginLeft: 15}}><AntDesign name="plus" size={24} color="rgb(80,80,225)" /></View>
  
    return (
      <View>
        <Text style={styles.title}>{'Vous avez cliqué ' + count + ' fois'}</Text>
        <CustomButton onPress={() => onChangeCount(count + 1)} text={'click me !'} icon={icon} />
      </View>
      )
}

export default Exo11;