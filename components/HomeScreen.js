import {Button, View, Text,TextInput,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import {useState,useEffect} from 'react';
import Video from 'react-native-video';
import Profile from './Profile';
import db from '../db/Database';

const HomeScreen=({route,navigation})=>{
    //const db=useContext(DbContext);
    //console.log(db.collections.get('profiles').query());
    //console.log(db.get('profiles').query())
    const [profiles,setProfiles]=useState([]);
    const getProfiles=async()=>{
        const data=await db.get('employees').query().fetch();
        console.log(data);
        data.concat(await db.get('freelancers').query().fetch());
        data.concat(await db.get('others').query().fetch());
        console.log(data)
        setProfiles(data);
        setDummy(prev=>!prev);
    };
    useEffect(()=>{
        getProfiles().catch(e=>console.log(e));
    },[]);
    const Profiles=[
    {
        "profile_id":'1',
        "name":"rirani",
        "jobTitleName":"Developer",
        "firstName":"Romin",
        "lastName":"Irani",
        "preferredFullName":"Romin Irani",
        "employeeCode":"E1",
        "region":"CA",
        "phoneNumber":"408-1234567",
        "emailAddress":"romin.k.irani@gmail.com"
    },
    {
        "user_id":"nirani",
        "jobTitleName":"Developer",
        "firstName":"Neil",
        "lastName":"Irani",
        "preferredFullName":"Neil Irani",
        "employeeCode":"E2",
        "region":"CA",
        "phoneNumber":"408-1111111",
        "emailAddress":"neilrirani@gmail.com"
    },
    {
        "user_id":"thanks",
        "jobTitleName":"Program Directory",
        "firstName":"Tom",
        "lastName":"Hanks",
        "preferredFullName":"Tom Hanks",
        "employeeCode":"E3",
        "region":"CA",
        "phoneNumber":"408-2222222",
        "emailAddress":"tomhanks@gmail.com"
    },
    ];
    const [query,setQuery]=useState('');
    const [dummy,setDummy]=useState(true);
    const handleQuery=(event)=>{
        setQuery(event.nativeEvent.text);
    };
    const updateProfile=()=>{
    const p=async()=>{
        await db.write(async()=>{
            const newProfile=await db.get('employees').find('slae2hmg0abl7k6w');
            console.log(newProfile);
            await newProfile.update(()=>{
                newProfile.name='John Doe';
            });
            console.log(newProfile);
            return newProfile;
        })};
        p().catch(e=>console.log(e));
    };
    const handleAdd=()=>{
        const newProfile=addProfile();
        //profiles.push(newProfile);
        console.log(newProfile);
        setDummy(prev=>!prev);
    };
    const addProfile=async()=>{
    await db.write(async()=>{
        const newProfile=await db.get('employees').create(profile=>{
            profile.name=Profiles[0]['name'];
            profile.profileId=Profiles[0]['profile_id'];
        });
        console.log(newProfile);
        return newProfile;
    })};
    return(
        <View style={{flex: 1,alignItems: 'center', justifyContent: 'flex-start', backgroundColor:'black'}}>
            <View style={styles.searchBar}>
                <TextInput placeholder='' onSubmitEditing={handleQuery} style={styles.searchBox}/>
                <TouchableOpacity style={styles.searchCont}>
                    <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>Search</Text>
                </TouchableOpacity>
            </View>
            <FlatList style={styles.profileList} data={profiles} renderItem={({item})=><Profile profile={item}/>} keyExtractor={(item)=>item.profile_id}/>
            <TouchableOpacity onPress={updateProfile} style={styles.addButtonCont}>
                <Text style={styles.addButton}>+</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles=StyleSheet.create({
    addButton:{
        color:'white',
        fontSize:30,
    },
    addButtonCont:{
        justifyContent:'center',
        alignItems:'center',
        width:50,
        height:50,
        borderRadius:25,
        backgroundColor:'#5e61e6',
        position:'absolute',
        bottom:20,
        right:20,
    },
    searchBox:{
        color:'white',
        width:'75%',
    },
    searchBar:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        borderColor:'grey',
        borderWidth:2,
        width:'95%',
        borderRadius:20,
        margin:20,
    },
    searchCont:{
        justifyContent:'center',
        alignItems:'center',
        width:70,
        height:38,
        backgroundColor:'#5ce1e6',
        borderRadius:15,
    },
    profileList:{
        flex:1,
        width:'90%'
    },
});

export default HomeScreen;