function Exo8() {

    const DATA = [
      {
        id: 1,
        Nom: 'First',
        Prenom: 'Item'
      },
      {
        id: 2,
        Nom: 'Ricard',
        Prenom: 'Jean'
      },
      {
        id: 3,
        Nom: 'Vodka',
        Prenom: 'Steven'
      },
      {
        id: 4,
        Nom: 'Jager',
        Prenom: 'Philippe'
      },
      {
        id: 5,
        Nom: 'Malibu',
        Prenom: 'Sophie'
      },
      {
        id: 6,
        Nom: 'Old Nick',
        Prenom: 'Emannuel'
      },
      {
        id: 7,
        Nom: 'Stella-Artois',
        Prenom: 'Lisa'
      },
      {
        id: 8,
        Nom: 'Skoll',
        Prenom: 'Tim'
      },
      {
        id: 9,
        Nom: 'Huit-six',
        Prenom: 'Marie'
      },
      {
        id: 10,
        Nom: 'Seize-Quatre',
        Prenom: 'Piotr'
      },
      {
        id: 11,
        Nom: 'Fischer',
        Prenom: 'Brandon'
      },
      {
        id: 12,
        Nom: 'Leffe',
        Prenom: 'Rudy'
      },
      {
        id: 13,
        Nom: 'Iakov',
        Prenom: 'Paul'
      },
      {
        id: 14,
        Nom: 'Gibsons',
        Prenom: 'Roro'
      },
      {
        id: 15,
        Nom: 'Ciroc',
        Prenom: 'Ihab'
      },
      {
        id: 16,
        Nom: 'Caprisun',
        Prenom: 'Vita'
      },
      {
        id: 17,
        Nom: 'Caprisun',
        Prenom: 'Banapple'
      },
      {
        id: 18,
        Nom: 'Camel',
        Prenom: 'Massa'
      },
      {
        id: 19,
        Nom: 'Moula',
        Prenom: 'Enesprit'
      },
      {
        id: 20,
        Nom: 'Tarterets',
        Prenom: 'Malik'
      }
    ];
  
    const Item = ({ title }) => (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  
    const renderItem = ({ item }) => (
      <Item title={item.Prenom + ' ' + item.Nom} />
    );
  
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  
}

export default Exo8;