function Exo4() {
    const [num, onChangeNum] = React.useState(0);
    let icon = <View style={{padding: 10, borderRadius: 100, backgroundColor: '#fff', marginLeft: 15}}><AntDesign name="plus" size={24} color="rgb(80,80,225)" /></View>
  
    return (
      <View>
        <Text style={styles.title}>Vous avez cliqué {num} fois</Text>
        <Exo3 onPress={() => onChangeNum(num + 1)} text={"Incrémenter le compteur"} icon={icon} />
      </View>
    )
}

export default Exo4;