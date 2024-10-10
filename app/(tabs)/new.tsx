import { Stack } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, View  , Image, TextInput, Pressable} from 'react-native';

import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  const [caption , setCaption]= useState('');
  return (
    <View className='p-3 items-center flex-1'>
      {/* imagge Picker*/}
      <Image
      source={{
        uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg'
      }}
      className='w-52 aspect-[3/4] rounded-lg bg-slate-300'/>

      <Text onPress={()=>{}} className='text-blue-500 font-semibold m-5'>Change</Text>

      {/* Caption Area*/}

      <TextInput placeholder='Whats on your mind ' 
      className='bg-gray-100 w-full p-3 '
      value={caption}
      onChangeText={(newValue)=> setCaption(newValue)}
      />

      {/* Button*/}
      <View className='mt-auto w-full'>
      <Pressable className='bg-blue-500 w-full p-3 items-center rounded-md'>
        <Text className='text-white font-semibold'>Paylas</Text>
      </Pressable>
      </View>
    </View>
  );
}

