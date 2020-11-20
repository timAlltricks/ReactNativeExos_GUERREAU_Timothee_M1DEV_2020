function Exo9(){
  
    const [data, onChangeData] = React.useState('');
  
    React.useLayoutEffect(() => {
      axios.get(`https://randomuser.me/api/?results=100&inc=name`)
      .then(res => {
        onChangeData(res.data.results);
      })
      .catch(error => {
        console.log(error)
      });
    }, [data]);
  
    const Item = ({ data }) => (
      <View style={styles.item}>
        <Text style={styles.title}>{data.title + ' ' + data.first + ' ' + data.last}</Text>
      </View>
    );
  
    const renderItem = ({ item }) => (
      <Item data={item.name} />
    );
   
    return data !== '' ? (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index}
        />
      </SafeAreaView>
    ) : (
      <Text>Aucune donnée à afficher</Text>
    );
  
}

export default Exo9;