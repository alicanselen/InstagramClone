
import { Image, StyleSheet, Text, View } from 'react-native';
import posts from '~/assets/data/post.json'
import {Ionicons , AntDesign , Feather} from '@expo/vector-icons'


export default function PostListItem({post}){
    return(
        <View className='bg-white'>
        <View className='p-2 flex-row items-center gap-2 p-3'>
          <Image source={{uri: post.user.image_url}}
          className='w-14 aspect-square rounded-full'
          />
          <Text className='font-semibold '>{post.user.username}</Text>
        </View>
        <Image 
        source={{uri: post.image_url}} 
        className='w-full aspect-[4/3]'
        />
        <View className='flex-row gap-3 p-3'>
        <AntDesign name="hearto" size={20} />
      <Ionicons name="chatbubble-outline" size={20} />
      <Feather name="send" size={20} />
  
      <Feather name="bookmark" size={20} className="ml-auto" />
        </View>
      </View>
    );
}