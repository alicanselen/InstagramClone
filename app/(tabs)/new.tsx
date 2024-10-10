import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View  , Image, TextInput, Pressable} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  const [caption , setCaption]= useState('');
  const [image , setImage] = useState<string | null>(null);

  useEffect(()=>{
    if(!image){
      pickImage();
    }
  } , [image]);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <View className='p-3 items-center flex-1'>
      {/* imagge Picker*/}
      {image ? (<Image
      source={{
        uri: image
      }}
      className='w-52 aspect-[3/4] rounded-lg bg-slate-300'/>
    ):(<View className='w-52 aspect-[3/4] rounded-lg bg-slate-300'/>)}

      <Text onPress={pickImage} className='text-blue-500 font-semibold m-5'>Change</Text>

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

