import { Stack } from 'expo-router';
import { FlatList } from 'react-native';
import posts from '~/assets/data/post.json'
import {Ionicons , AntDesign , Feather} from '@expo/vector-icons'
import PostListItem from '~/components/PostListItem';


export default function Home() {

  return (
    <FlatList
    data={posts}
    renderItem={({item})=><PostListItem post={item} />}
    contentContainerStyle={{
      gap:10,
      maxWidth: 512,
      alignSelf:'center',
      width:'100%'
    }}
    showsVerticalScrollIndicator={false}
    />
  );
}