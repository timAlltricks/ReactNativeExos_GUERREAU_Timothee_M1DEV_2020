function Exo5() {
    return (
      <View style={[styles.container, {width: '100%', flexDirection: 'row', justifyContent: 'space-around'}]}>
        <View style={[styles.square, {backgroundColor: 'rgb(80,80,225)'}]}><Text>First</Text></View>
        <View style={[styles.square, {backgroundColor: 'rgb(80,225,80)'}]}><Text>Second</Text></View>
        <View style={[styles.square, {backgroundColor: 'rgb(225,80,80)'}]}><Text>Third</Text></View>
      </View>
    )
}

export default Exo5;