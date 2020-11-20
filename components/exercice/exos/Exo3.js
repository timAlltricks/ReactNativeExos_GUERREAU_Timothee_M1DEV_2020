function Exo3({ onPress, text, icon }) {
    icon = icon ? icon : null
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{ flexDirection: 'row', alignItems: 'center',  justifyContent: 'center', padding: 15, backgroundColor: 'rgb(80,80,225)', borderRadius: 5}}>
          <Text style={{color: '#fff', fontFamily: 'Montserrat-Bold'}}>{text}</Text>
          {icon}
      </TouchableOpacity>
    )
}

export default Exo3;