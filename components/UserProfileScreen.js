import {View, Text,TouchableOpacity,Modal,TextInput} from 'react-native';
import Profile from './Profile';
import {useState,useContext} from 'react';
import DbContext from '../DbContext';
import QRCode from 'react-native-qrcode-svg';
import database from '../db/Database';

const UserProfileScreen=({navigation})=>{
    const profiles= database.get('profiles').query();
    console.log(profiles);
    const myProfile=async()=>{await database.localStorage.get("user_details");}
    myProfile()
    const editProfile=()=>{return};
    return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Profile profile={profiles}/>
        <Button title="Edit Profile" onPress={editProfile}/>
    </View>
    );
}

const MyProfile=({navigation})=>{
    const [modalVisible,changeModalVisibility]=useState(false);
    const [profile,setProfile]=useState(
    {name:'',company:'',email_id:'',position:'',domain:'',linkedin_url:'',note:''});
    const getProfile=async()=>{
        name_val=await database.localStorage.get('name');
        company_val=await database.localStorage.get('company');
        email_id_val=await database.localStorage.get('email_id');
        position_val=await database.localStorage.get('position');
        domain_val=await database.localStorage.get('domain');
        linkedin_url_val=await database.localStorage.get('linkedin_url');
        note_val=await database.localStorage.get('note');
        setProfile({name:name_val,company:company_val,email_id:email_id_val,position:position_val,domain:domain_val,linkedin_url:linkedin_url_val,note:note_val});
    };
    const editProfile=async(key,value)=>{
        await database.localStorage.set(key,value);
    };
    return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>This is the your Profile!</Text>
        <Text>Name: {profile.name?'You are '+profile.name+' !':'Not found'}</Text>
        <Text>Company: {profile.company?'You work at '+profile.company+' !':'Not found'}</Text>
        <Text>Email: {profile.email_id || 'Not found'}</Text>
        <Text>Position: {profile.position || 'Not found'}</Text>
        <Text>Domain(s): {profile.domain || 'None'}</Text>
        <Text onPress={()=>(profile.linkedin_url && Linking.openurl(profile.linkedin_url))}>LinkedIn profile: {profile.linkedin_url || 'LinkedIn profile URL not found'}</Text>
        <Text>Note:{'\n'}{profile.note || 'None'}</Text>
        <Text>Your profile QR Code</Text>
        <QRCode value={JSON.stringify(profile)}/>
        <TouchableOpacity onPress={()=>changeModalVisibility(true)}>
            <Text>Edit profile!</Text>
        </TouchableOpacity>
        <Modal visible={modalVisible} animationType='slide' onRequestClose={()=>{getProfile();changeModalVisibility(false);}}>
            <TextInput defaultValue={profile.name} placeholder='You are' onSubmitEditing={(event)=>editProfile('name',event.nativeEvent.text)}/>
            <TextInput defaultValue={profile.company} placeholder='You work at' onSubmitEditing={(event)=>editProfile('company',event.nativeEvent.text)}/>
            <TextInput defaultValue={profile.email_id} placeholder='Your email' onSubmitEditing={(event)=>editProfile('email_id',event.nativeEvent.text)}/>
            <TextInput defaultValue={profile.position} placeholder='Your position in the company' onSubmitEditing={(event)=>editProfile('position',event.nativeEvent.text)}/>
            <TextInput defaultValue={profile.domain} placeholder='Your domain(s)' onSubmitEditing={(event)=>editProfile('domain',event.nativeEvent.text)}/>
            <TextInput defaultValue={profile.linkedin_url} placeholder='Your LinkedIn profile URL' onSubmitEditing={(event)=>editProfile('linkedin_url',event.nativeEvent.text)}/>
            <TextInput defaultValue={profile.note} multiline={true} placeholder='Your Notes' returnKeyType='done' onSubmitEditing={(event)=>editProfile('note',event.nativeEvent.text)}/>
        </Modal>
    </View>
    );
}

export default MyProfile;