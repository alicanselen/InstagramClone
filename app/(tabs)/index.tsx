import { Stack } from 'expo-router';
import { FlatList } from 'react-native';
import posts from '~/assets/data/post.json'
import {Ionicons , AntDesign , Feather} from '@expo/vector-icons'
import PostListItem from '~/components/PostListItem';


export default function Home() {

  return (
    <FlatList
    data={posts}
    contentContainerStyle={{gap:12}}
    renderItem={({item})=><PostListItem post={item} />}/>
  );
}