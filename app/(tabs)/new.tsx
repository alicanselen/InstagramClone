import { useEffect, useState } from 'react';
import { StyleSheet, Text, View  , Image, TextInput, Pressable} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Button from '~/components/buttons';
import {upload} from "cloudinary-react-native"
import { cld } from '~/lib/cloudinary';
import {UploadApiResponse} from 'cloudinary-react-native/lib/typescript/src/api/upload/model/params/upload-params'
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
      quality: 0.5,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const uploadImage = async()=>{

          
    if(!image){
      return;
    }

    const options = {
      upload_preset: 'Default',
      unsigned: true,
  }

    return new Promise<UploadApiResponse>(async(resolve , reject)=>{
  
      await upload(cld, {
        file: image , 
        options: options, 
        callback: (error: any, response: any) => {
          if(error || !response){
            reject(error);
          }else{
            resolve(response);
          }
          //.. handle response
      }});
    });
    //resimler media alanina yuklenir(Cloudinary)


  }

  const createPost= async ()=>{
    //resimler cloudinarye yuklenecek
    const response = await uploadImage();

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

