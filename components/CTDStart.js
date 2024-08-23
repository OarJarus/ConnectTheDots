import {View, Text, Pressable} from 'react-native';
import Video from 'react-native-video';
import {useState} from 'react';

import video from './../assets/ConnectTheDots.mp4';

export default CTDStart=({navigation})=>{
    const [tapVisible,changeTapVisibility]=useState(false);
    return(
        <View style={{flex: 1,alignItems: 'center', justifyContent: 'center', backgroundColor:'black'}}>
            <Pressable onPress={()=>navigation.navigate('Tabs')}>
                <Video source={video}
                    resizeMode='cover'
                    paused={false}
                    onEnd={()=>changeTapVisibility(true)}
                    style={{width: 500, height: 500}}
                />
            </Pressable>
            {tapVisible && <Text style={{fontStyle: 'italic', color: 'white'}}>Tap....</Text>}
        </View>
    );
}