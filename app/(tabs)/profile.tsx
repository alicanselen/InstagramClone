import { Text, View ,Image, TextInput } from "react-native";
import * as ImagePicker from "expo-image-picker" ; 
import { useEffect, useState } from "react";
import Button from "~/components/buttons";
import { supabase } from "~/lib/supabase";

export default function Profile(){
    const [image , setImage] = useState<string | null>(null);
    const [ username , setUsername] = useState('');
  
    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
  
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    };
    return (
        <View className="flex-1">
            {/* Avatar image Picker*/}
            {image ? (
            <Image
                source={{uri: image}}
                className='w-52 aspect-square self-center rounded-full bg-slate-300'
                />
                ):(
                <View className='w-52 aspect-square self-center rounded-full bg-slate-300'/>
                )}

            <Text onPress={pickImage} className='text-blue-500 self-center font-semibold m-5'>Change</Text>

            {/* Text input alanlari */}
            <Text className="mb-2 text-gray-500 font-semibol">Kullanici Adi</Text>
            <TextInput 
            placeholder="Kullanici Adi"
            value={username}
            onChangeText={setUsername}
            className="border border-gray-400 p-3 rounded-md "
            />
            {/* Footer Button*/}
            <View className="gap-1 mt-auto">
                <Button title="Bilgileri Guncelle"/>
                <Button title="Cikis Yap" onPress={()=> supabase.auth.signOut()}/>
            </View>
        </View>
    );
}