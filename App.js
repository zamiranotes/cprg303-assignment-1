import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.headerInfo}>
      <Text style={styles.headerTopInfo}>OOTD_EVERYDAY</Text>
      <Text style={styles.headerSubInfo}>Posts</Text>
    </View>
    <View style={styles.postInfo}>
      <Text style={styles.headerTag}>ootd_everyday</Text>
      <Text style={styles.viaUser}>via frenchie_fry39</Text>
    </View>
    <Image
    source={require('./assets/centerpicture.jpg')}
    style={styles.centerImage}
    />
    <View style={styles.bottomIconsRow}>
      <View style={styles.leftIcons}>
        <Feather name="heart" size={24} color="black" style={styles.spaceBetween} />
        <Feather name="message-circle" size={24} color="black" style={styles.spaceBetween} />
        <Feather name="send" size={22} color="black" />
        </View>
        <Feather name="bookmark" size={24} color="black" />
      </View>
    <View style={styles.userActivities}>
      <Text>Liked by <Text style={styles.likedByUser}>paisley.print.48</Text> and <Text style={styles.andOthers}>7 others.</Text>
      </Text>
      <Text>
        <Text style={styles.userAccount}>frenchie_fry39 </Text>Fresh shot on sunny day!☀️
      </Text>
      <Text style={styles.viewComments}>View all 12 comments.</Text>
      <Text>
        <Text style={styles.userOneComment}>lil_wyatt838</Text> Awesome tones
      </Text>
      <Text>
        <Text style={styles.userTwoComment}>pia.in.a.pod</Text> Gorg. Love it!❤️
      </Text>
      <Text style={styles.postedDate}>1 day ago</Text>
    </View>
    <Button
      title="Alert"
      onPress={() => Alert.alert('Alert Button pressed')}
    />
    <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerInfo: {
    alignItems: 'center',
    paddingBottom: 30,
  },
  headerTopInfo: {
    color: '#d3d3d3',
  },
  headerSubInfo: {
    fontWeight: 'bold'
  },
  postInfo: {
    width: '100%',
    alignItems: 'flex-start',
    paddingHorizontal: 60
  },
  headerTag: {
    fontWeight: 'bold'
  },
  centerImage: {
    width: 385,
    height: 400
  },
  bottomIconsRow: {
  width: '100%',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 14,
  paddingVertical: 12,
},
leftIcons: {
  flexDirection: 'row',
  alignItems: 'center',
},
spaceBetween: {
  marginRight: 10,
},
  userActivities: {
    width: '100%',
    alignItems: 'flex-start',
    paddingHorizontal: 12,
  },
  likedByUser: {
    fontWeight: 'bold',
  },
  andOthers: {
    fontWeight: 'bold'
  },
  userAccount: {
    fontWeight: 'bold'
  },
  viewComments: {
    color: '#d3d3d3',
  },
  userOneComment: {
    fontWeight: 'bold'
  },
  userTwoComment: {
    fontWeight: 'bold',
  },
  postedDate: {
    color: '#d3d3d3',
  },
});
