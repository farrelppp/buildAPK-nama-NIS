import react from 'react';
import {View, Text, Image, StyleSheet, Button, Linking, SafeAreaView, ScrollView, Alert} from 'react-native';

const Press1 = () => alert('Terima Kasih')

const Press = () => {
  const url = 'https://wa.me/6281243815090'
  Linking.openURL(url);

}

const App = () => {
  return (
    <ScrollView>
    <View style={{backgroundColor:'silver', flex:1}}>
      <View style={{alignItems:'center', marginTop:20}}>
        <Image style={{width:160, height:160, borderRadius:30}} source={require('./assets/proyek1.jpg')} />    
      </View>

      <Text style={styles.textsty1}>Farrel Aidan Setiawan</Text>

      <Text style={styles.textsty}>Halo Nama Saya Farrel Aidan Setiawan Saya Bersekolah Di SMK Telkom Purwokerto dan mengambil jurusan RPL</Text>
       
      
      <View style={{marginTop:5}}>
      <View
        style={styles.fixToText}
      >
        <Button
          title="Contact Me!"
          color="blue"
          onPress={Press}
        />
      </View>      
      </View>


      <Text style={{fontWeight:'bold', fontSize:25, textAlign:'center', marginBottom:0, marginTop:60}}>My Project</Text>
      <View style={styles.imgview}>
      <Image style={styles.imgproyek} source={require('./assets/proyek2.png')}/>
      </View>
      
      <Text style={styles.textsty}>Proyek membuat desain aplikasi buku saku dengan figma</Text>
      <View
        style={styles.fixToText}
      >
        <Button
          title="Open"
          color="blue"
          onPress={Press1}
        />
      </View>


      <View style={styles.imgview}>
      <Image style={styles.imgproyek} source={require('./assets/proyek4.png')}/>
      </View>
      
      <Text style={styles.textsty}>Proyek membuat desain aplikasi pariwisata dengan figma</Text>
      <View
        style={styles.fixToText}
      >
        <Button
          title="Open"
          color="blue"
          onPress={Press1}
        />
      </View>


      <View style={styles.imgview}>
      <Image style={styles.imgproyek} source={require('./assets/proyek3.png')}/>
      </View>
      
      <Text style={styles.textsty}>Proyek membuat desain aplikasi techno care dengan figma</Text>
      <View
        style={styles.fixToText}
      >
        <Button
          title="Open"
          color="blue"
          onPress={Press1}
        />
      </View>
      <Text style={{opacity:0.4, textAlign:'center', marginTop:20, marginBottom:20}}>Powered By expo</Text>

      
    </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  
  fixToText: {
    borderRadius: 15, // Menambahkan border radius
    marginTop: 10,
    marginBottom:0,
    width: 150,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  imgproyek: {
    width:250, 
    height:250,
    marginTop:-60
    
  },
  imgview: {
    alignItems:'center', 
    marginTop:'100px'
  },
  textsty: {
    fontWeight:'light', 
    textAlign:'center', 
    marginTop:20,
    marginLeft:20,
    marginRight:20,
  },
  textsty1: {
    fontWeight:'bold', 
    fontSize:25, 
    textAlign:'center', 
    marginTop:20
  }
});
export default App;