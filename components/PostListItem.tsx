
import { Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import posts from '~/assets/data/post.json'
import {Ionicons , AntDesign , Feather} from '@expo/vector-icons'
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from 'cloudinary-react-native';

// Import required actions and qualifiers.
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";
import { cld } from '~/lib/cloudinary';




export default function PostListItem({post}){
  const {width} = useWindowDimensions();    
  
  // cld.image returns a CloudinaryImage with the configuration set.
      const image = cld.image(post.image);
          // Apply the transformation.
    image.resize(thumbnail().width(width).height(width));   // Round the corners.
    
    const avatar = cld.image(post.user.avatar_url);
    // Apply the transformation.
    avatar.resize(thumbnail().width(48).height(48).gravity(focusOn(FocusOn.face())));   // Round the corners.
    
    return(

        <View className='bg-white'>
          {/* Hader*/}
        <View className='p-2 flex-row items-center gap-2 p-3'>
          <AdvancedImage 
          cldImg={avatar}
          className='w-14 aspect-square rounded-full'
          />
          <Text className='font-semibold '>{post.user.username}</Text>
        </View>

        {/* Icerik */}

        <AdvancedImage cldImg={image} className='w-full aspect-[4/3]'/>

        {/* Ikonlar */}
        <View className='flex-row gap-3 p-3'>
        <AntDesign name="hearto" size={20} />
      <Ionicons name="chatbubble-outline" size={20} />
      <Feather name="send" size={20} />
  
      <Feather name="bookmark" size={20} className="ml-auto" />
        </View>
      </View>
    );
}