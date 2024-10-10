import { Stack } from 'expo-router';
import { Alert, FlatList } from 'react-native';
import posts from '~/assets/data/post.json'
import {Ionicons , AntDesign , Feather} from '@expo/vector-icons'
import PostListItem from '~/components/PostListItem';
import { useEffect, useState } from 'react';
import { supabase } from '~/lib/supabase';


export default function Home() {

  const [posts , setPost] = useState([]);

  useEffect(()=>{
    fetchPosts();
  }, []);

  const fetchPosts = async ()=>{

let { data, error } = await supabase
.from('posts')
.select('* ,user:profiles(*');

if(error){
  Alert.alert('Bir Seyler Ters Gitti');
}
setPost(data);
        
  }

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