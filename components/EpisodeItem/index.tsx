import React from "react";
import { Text, View, Image, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';
import { Episode } from '../../types';

interface EpisodeItemProps {
    episode: Episode,
    onPress: (eppisode: Episode) => {}
}
const EpisodeItem = (props: EpisodeItemProps) => {
    const { episode, onPress } = props;
    return (
        <Pressable style={{ margin: 10 }} onPress={() => onPress(episode)}>
            <View style={styles.row}>
                <Image style={styles.image} source={{ uri: episode.poster }} />

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{episode.title}</Text>
                    <Text style={styles.duration}>{episode.duration}</Text>
                </View>
                <AntDesign name="download" size={16} color="black" />
            </View>
            <Text style={styles.plot}>
                {episode.plot}
            </Text>
        </Pressable>
    )
}
export default EpisodeItem;