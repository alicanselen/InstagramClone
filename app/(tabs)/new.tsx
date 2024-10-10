import { useEffect, useState } from 'react';
import { Text, View  , Image, TextInput, Pressable} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Button from '~/components/buttons';
import {  uploadImage } from '~/lib/cloudinary';
import { supabase } from '~/lib/supabase';
import { useAuth } from '~/Providers/AuthProvider';
import { router } from 'expo-router';


export default function Home() {
  const [caption , setCaption]= useState('');
  const [image , setImage] = useState<string | null>(null);
  const {session} = useAuth();

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
      quality: 0.5,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };


  const createPost= async ()=>{
    if(!image){
      return;
    }
    //resimler cloudinarye yuklenecek
    const response = await uploadImage(image);

    const { data, error } = await supabase
    .from('posts')
    .insert([
      { caption, image: response?.public_id , user_id:session?.user.id },
    ])
    .select()

    router.push('/(tabs)');
            

    console.log("image id" , response?.public_id);

    //post bilgileri veritabanina kayit edilmesi
  }
  return (
    <View className='p-3 items-center flex-1'>
      {/* imagge Picker*/}
      {image ? (<Image
      source={{
        uri: image
      }}
      className='w-52 aspect-[3/4] rounded-lg bg-slate-300'/>
    ):(
    <View className='w-52 aspect-[3/4] rounded-lg bg-slate-300'/>
    )}

      <Text onPress={pickImage} className='text-blue-500 font-semibold m-5'>Change</Text>

      {/* Caption Area*/}

      <TextInput placeholder='Whats on your mind ' 
      className='bg-gray-100 w-full p-3 '
      value={caption}
      onChangeText={(newValue)=> setCaption(newValue)}
      />

      {/* Button*/}
      <View className='mt-auto w-full'>
      <Button title=" paylas" onPress={createPost}/>
      </View>
    </View>
  );
}

