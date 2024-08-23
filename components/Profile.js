import {View, Text, Linking,TouchableOpacity,Modal,Image,TextInput,ScrollView,StyleSheet} from 'react-native'
import withObservables from '@nozbe/watermelondb/node_modules/@nozbe/with-observables'
import QRCode from 'react-native-qrcode-svg';
import {useState} from 'react';

const Profile=({profile})=>{
    console.log(profile);
    const [modalVisible,setModalVisibility]=useState(false);
    const [editMode,setEditMode]=useState(false);
    return(
    <View>
        <Modal visible={modalVisible} transparent animationType='slide' onRequestClose={()=>setModalVisibility(false)}>
            <View style={styles.modalCont}>
            <ScrollView contentContainerStyle={styles.modalScroll}>
                {editMode?<TextInput defaultValue={profile.name || profile.user_id} style={styles.heading}/>:<Text style={styles.heading}>{profile.name || profile.user_id}</Text>}
                <Text style={styles.modalField}>Company</Text>
                {editMode?<View style={styles.modalInput}><TextInput style={{color:'white',paddingBottom:0}}/></View>:<Text style={styles.modalVal}>{profile.company?'You work at'+profile.company+'!':'Not found'}</Text>}
                <Text style={styles.modalField}>Email</Text>
                {editMode?<View style={styles.modalInput}><TextInput style={{color:'white',paddingBottom:0}}/></View>:<Text style={styles.modalVal}>{profile.email_id || 'Not found'}</Text>}
                <Text style={styles.modalField}>Position</Text>
                {editMode?<View style={styles.modalInput}><TextInput style={{color:'white',paddingBottom:0}}/></View>:<Text style={styles.modalVal}>{profile.position || 'Not found'}</Text>}
                <Text style={styles.modalField}>Domain(s)</Text>
                {editMode?<View style={styles.modalInput}><TextInput style={{color:'white',paddingBottom:0}}/></View>:<Text style={styles.modalVal}>{profile.domain || 'None'}</Text>}
                <Text style={styles.modalField}>Note</Text>
                {editMode?<TextInput multiline style={styles.noteBox}/>:<Text style={styles.noteBox}>{profile.note || 'None'}</Text>}
                <TouchableOpacity onPress={()=>setModalVisibility(false)} style={styles.goBack}>
                    <Text style={{color:'#ff1616',fontWeight:'bold'}}>{editMode?'Cancel':'Close'}</Text>
                </TouchableOpacity>
                {editMode
                ?<TouchableOpacity onPress={()=>setEditMode(prev=>!prev)} style={[styles.editButton,{borderColor:'green'}]}>
                    <Text style={{color:'green',fontWeight:'bold'}}>Save</Text>
                </TouchableOpacity>
                :<TouchableOpacity onPress={()=>setEditMode(prev=>!prev)} style={styles.editButton}>
                    <Text style={{color:'#5e61e6',fontWeight:'bold'}}>Edit</Text>
                </TouchableOpacity>}
                <TouchableOpacity onPress={()=>(profile.linkedin_url && Linking.openurl(profile.linkedin_url))} style={styles.visitLinkedIn}>
                    <Image source={require('../assets/go.png')} style={{width:75,height:75}}/>
                    <Text style={{color:'#5e61e6',fontWeight:'bold'}}>View LinkedIn profile</Text>
                </TouchableOpacity>
            </ScrollView>
            </View>
        </Modal>
        <TouchableOpacity onPress={()=>setModalVisibility(true)} style={styles.profileCont}>
            <Text style={styles.profile}>{profile.name}</Text>
        </TouchableOpacity>
    </View>
    )
};

const makeObservable=withObservables(['profile'],({profile})=>({
    profile
}));

export default ObservedProfile=makeObservable(Profile);

const styles=StyleSheet.create({
    profile:{
        color:'white',
        fontSize:20,
    },
    profileCont:{
        borderWidth:2,
        padding:10,
        borderColor:'#5ce1e6',
        borderRadius:15,
        marginBottom:10,
    },
    modalCont:{
        position:'absolute',
        top:25,
        left:20,
        right:20,
        bottom:60,
        padding:15,
        paddingTop:5,
        borderRadius:15,
        borderColor:'grey',
        borderWidth:4,
        backgroundColor:'black',
    },
    modalScroll:{
        justifyContent:'flex-start',
        alignItems:'flex-start',
    },
    modalField:{
        color:'#5ce1e6',
        padding:5,
        paddingLeft:10,
        fontSize:15,
        fontWeight:'bold',
        borderLeftColor:'#5ce1e6',
        borderWidth:2,
    },
    modalVal:{
        color:'white',
        margin:10,
        marginLeft:20,
        marginBottom:15,
    },
    modalInput:{
        borderColor:'#5e61e6',
        borderBottomWidth:2,
        width:'90%',
        marginTop:-5,
        marginBottom:20,
        marginLeft:10,
    },
    noteBox:{
        width:'80%',
        height:50,
        backgroundColor:'white',
        borderColor:'#5e61e6',
        borderWidth:3,
        margin:10,
        marginLeft:15,
        marginTop:15,
        padding: 10,
        borderRadius:10,
    },
    goBack:{
        position:'absolute',
        top:20,
        right:20,
        borderWidth:2,
        borderColor:'#ff1616',
        padding:5,
        paddingHorizontal:10,
        borderRadius:10
    },
    editButton:{
        position:'absolute',
        top:20,
        right:90,
        borderWidth:2,
        padding:5,
        borderColor:'#5e61e6',
        paddingHorizontal:10,
        borderRadius:10
    },
    heading:{
        fontSize:30,
        color:'#5ce1e6',
        marginTop:15,
        marginBottom:25,
        paddingBottom:10,
        fontWeight:'bold',
        borderWidth:2,
        borderBottomColor:'grey',
        width:'90%',
    },
    visitLinkedIn:{
        flex:1,
        alignSelf:'center',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        margin:10,
    },
});