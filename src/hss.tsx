/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';

function App() {
  const [names, setNames] = useState([
    'John',
    'Jane',
    'Alice',
    'Bob',
    'Charlie',
    'David',
  ]);

  const [search, setSearch] = useState('');

  const filteredNames = names.filter(name =>
    name.toLowerCase().includes(search.toLowerCase())
    /* eslint-disable react-native/no-inline-styles */
    
    
    import { View, StyleSheet, Image, TouchableOpacity, Text, ScrollView, Button, TextInput,  } from 'react-native';
    import React from 'react';
    import { FlatList } from 'react-native';
    
    
    
    const DATA  = [
      { id: '1', imageSource: require('./assests/123.png'),
        name: 'Ore no Koto ga\nDaikirai na Imouto ga  \n Kowai' },
      { id: '2', imageSource: require('./assests/1234.png'),
      name: 'Solo leveling' },
      { id: '3', imageSource: require('./assests/121345.png'),
      name: 'Some Crazy Hoe' },
      { id: '4', imageSource: require('./assests/123.png'),
        name: 'Ore no Koto ga\nDaikirai na Imouto ga  \n Kowai' },
      { id: '5', imageSource: require('./assests/1234.png'),
      name: 'Solo leveling' },
      { id: '6', imageSource: require('./assests/121345.png'),
      name: 'Some Crazy Hoe' },
    ];
    
    const handleImagePress = () => {
      // Add your logic to handle the image press event here
      console.log('Image pressed');
    };
    
    
    
    const renderItem = ({ item }) => {
        return (
        <View style={styles.item}>
         <TouchableOpacity><Image source={item.imageSource} style={styles.image} />
         </TouchableOpacity>
          <Text style={styles.flattext} >{item.name}</Text>
        </View>
      );
        };
    
    
        // const [names, setNames] = useState([
        //   'John',
        //   'Jane',
        //   'Alice',
        //   'Bob',
        //   'Charlie',
        //   'David',
        // ]);
    
        // const [search, setSearch] = useState('');
    
        // const filteredNames = names.filter(name =>
        //   name.toLowerCase().includes(search.toLowerCase())
        // );
                // MODALLLL
    
          // const [show, setShow] = useState(false);
    
    
    const App = () => {
    
    
      return (
        // MAIN CONTAINTER
        <ScrollView>
        <View style={styles.maincontainer}>
    
    
            {/* main image */}
    
           <View>
      <Image source={require('./assests/anime.jpg')} style={styles.imagemain} />
      </View>
    
            {/* SEARCH BAR?NAV */}
    
      <View style={styles.searchbarview}>
    
      <TouchableOpacity>
      <Image source={require('./assests/Path.png')} style={styles.threedot}  />
      </TouchableOpacity>
      <Image source={require('./assests/profile.png')} style={styles.prflpic} />
      <Image source={require('./assests/MangaShio.png')} style={styles.mngtxt} />
    
      {/* onPress={() =>setShow(true)} */}
      <TouchableOpacity onPress={handleImagePress}>
            <Image
              source={require('./assests/magnifyingglass.png')}
              style={styles.srchbr}
            />
          </TouchableOpacity>
    
    
    
    
        {/* // onPress={() => setModalVisible(true)} />
        // <Modal */}
        {/* //     animationType="slide" // You can change the animation type (e.g., "fade", "none")
        //     transparent={true}
        //     visible={modalVisible}
        //     onRequestClose={() => { */}
           {/* setModalVisible(false);
             }}
          > */}
            {/* <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalText}>This is a modal</Text>
                <Button
                  title="Close Modal"
                  onPress={() => setModalVisible(false)}
                />
              </View>
          //   </View> */}
          {/* // </Modal> */}
    
    
    
    
      <Image source={require('./assests/users.png')} style={styles.usrpng} />
    
      </View>
    
    
    
                  {/* OSHI NO TEXT */}
                  {/* BUTTON   */}
    
      <View style={styles.oshcontainer}>
      <Text style={styles.oshinotxt} >Oshi no Ko</Text>
      <TouchableOpacity style={styles.myButton}>
      <Text style={{justifyContent:'center', alignItems:'center', color:'white'}}> Read Now</Text>
          </TouchableOpacity>
           <Image source={require('./assests/chevronleft.png')} style={styles.backleft} />
          <Image source={require('./assests/chevronright.png')} style={styles.rightleft} />
        </View>
    
    
                  {/* POPULAR TEXTT */}
    
        <View style={styles.itempo}>
        <Text style={styles.itemTxt}>Popular</Text>
        <Image style={styles.arrowleft} source={require('./assests/arrowright.png')} />
        </View>
    
                  {/* IMAGES  FLATLISSTST */}
    
        <View>
              <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.key}
            horizontal={true}
          />
          </View>
    
                  {/* LATEST UPDATE TEXTT */}
          <View style={styles.itempo}>
        <Text style={styles.itemTxt}>Latest Updates</Text>
        <Image style={styles.arrowleft} source={require('./assests/arrowright.png')} />
        </View>
    
    
    
        <View>
              <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.key}
            horizontal={true}
          />
          </View>
    
             {/* RECENTLY ADDED TEXTT */}
             <View style={styles.itempo}>
        <Text style={styles.itemTxt}>Recently Added</Text>
        <Image style={styles.arrowleft} source={require('./assests/arrowright.png')} />
        </View>
    
    
        <View>
              <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.key}
            horizontal={true}
          />
          </View>
    </View>
    
    
    
              {/* MODAAAAAALLLLLLLL */}
    
      <View  style={styles.modalbodyview}>
      <TextInput
            style={{
              height: 40,
              borderColor: 'red',
              borderWidth: 1,
              marginBottom: 10,
              paddingLeft: 8,
            }}
            placeholder="Search names"
            // value={search}
            // onChangeText={(text) => setSearch(text)}
    
          />
      <Text>TEXTXTTTXTTTXTTXTXTXTXT txTXXXXXXXXXXXXXXX TFXXXXXXXX
        </Text>
        <Button title="Close"  />
        {/* <FlatList
            data={filteredNames}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <Text style={{ fontSize: 16, marginBottom: 10 }}>{item}</Text>
            )}
          /> */}
        </View>
        {/* onPress={() =>setShow(false)} */}
    
    
    
    </ScrollView>
    
      );
    };
    
    
    
    const styles = StyleSheet.create({
    maincontainer:{
      flex: 1,
      backgroundColor: '#242423',
    
    },
    imagemain:{
      height: 260,
      width: '100%',
    },
    searchbarview:{
      flexDirection:'row',
      position:'absolute',
      padding: 10,
      margin: 10,
    },
    srchbr:{
    marginLeft: '61%',
    },
    usrpng:{
      marginLeft: -58,
    },
    prflpic:{
      marginLeft: 16,
      marginTop: -7,
    },
    mngtxt:{
      marginLeft: 10,
    },
    
    oshinotxt:{
      fontSize: 40,
      color:'white',
      justifyContent:'center',
      textAlign:'center',
      marginTop: -180,
      fontWeight:'700',
      padding:10,
    },
    myButton: {
      backgroundColor: 'blue',
      height:30,
      width: 100,
      borderRadius: 4,
      justifyContent:'center',
      alignItems:'center',
      marginLeft: '40%',
    },
    button: {
      marginTop: 10,
    },
    backleft:{
    marginRight: '90%',
    marginTop: 25,
    },
    rightleft:{
    marginLeft: '89%',
    marginTop: -25,
      },
      itempo:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal: 15,
        marginBottom: 10,
      },
    itemLeft:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap',
    },
    itemTxt:{
        fontSize: 20,
        color:'white',
        marginTop: 10,
    
    },
    itemContainer: {
      margin: 10,
    },
    image: {
      width: 125,
      height: 180,
      marginLeft: 10,
      borderRadius: 10,
    },
    flattext:{
      fontSize: 12,
      color: 'white',
      marginLeft: 16,
    },
    
    
    modalview:{
      // flex: 1,
      // backgroundColor: 'red',
    },
    modalbodyview:{
      backgroundColor:'grey',
      height: '50%',
      width: '90%',
      position:'absolute',
      marginLeft: 20,
      marginTop: 60,
      // alignItems:'center',
      justifyContent:'center',
      padding: 20,
      borderRadius: 10,
    },
    
    
    
    
    });
    
    export default App;
    
  );

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          paddingLeft: 8,
        }}
        placeholder="Search names"
        value={search}
        onChangeText={(text) => setSearch(text)}
      />
      <FlatList
        data={filteredNames}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Text style={{ fontSize: 16, marginBottom: 10 }}>{item}</Text>
        )}
      />
    </View>
  );
}

export default App;
