import React, { useRef, useState, useEffect } from "react";
import { View, Button } from 'react-native';
import { Video } from 'expo-av';

import styles from './styles';
import { Episode } from '../../types';
import { Playback } from "expo-av/build/AV";


interface VideoPlayerProps {
    episode: Episode
}

const VideoPlayer = (props: VideoPlayerProps) => {
    const { episode } = props;
    const video = useRef<Playback>(null);
    const [status, setStatus] = useState({});

    useEffect(() => {
        if (!video) {
            return;
        }
        (async () => {
            await video?.current?.unloadAsync()
            await video?.current?.loadAsync(
                { uri: episode.video },
                {},
                false
            )
        })();
    }, [episode])

    return (
        <View>
            <Video
                ref={video}
                style={styles.video}
                source={{
                    uri: episode.video,
                }}
                posterSource={{
                    uri: episode.poster,
                }}
                posterStyle={{
                    resizeMode: 'cover',
                }}
                usePoster
                useNativeControls
                resizeMode="contain"
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}

            />
        </View>
    )
}

export default VideoPlayer;