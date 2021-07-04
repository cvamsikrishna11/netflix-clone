import * as React from 'react';
import { MaterialIcons, Entypo, AntDesign, Ionicons, Feather, FontAwesome } from '@expo/vector-icons';
import { Image, Pressable, ScrollView, SafeAreaView } from 'react-native';
import { Text, View } from '../../components/Themed';
import styles from './styles';
import movie from '../../assets/data/movie';

const firstEpisode = movie.seasons.items[0].episodes.items[0];

const MovieDetailsScreen = () => {

    return (
        <View>
            <SafeAreaView>
                <ScrollView>
                    <Image style={styles.image} source={{ uri: firstEpisode.poster }} />
                    <View style={{ padding: 12 }}>
                        <Text style={styles.title}>{movie.title}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.match}>98% match</Text>
                            <Text style={styles.year}>{movie.year}</Text>
                            <View style={styles.ageContainer}>
                                <Text style={styles.age}>12+</Text>
                            </View>
                            <Text style={styles.year}>{movie.numberOfSeasons} Seasons</Text>
                            <MaterialIcons name="hd" size={24} color="black" />
                        </View>
                        {/* Play button */}
                        <Pressable onPress={() => console.warn('Play')} style={styles.playButton}>
                            <Text style={styles.playButtonText}>
                                <Entypo name="controller-play" size={16} color="black" />
                                Play
                            </Text>
                        </Pressable>

                        {/* Download button */}
                        <Pressable onPress={() => console.warn('Download')} style={styles.downloadButton}>
                            <Text style={styles.downloadButtonText}>
                                <AntDesign name="download" size={16} color="white" />
                                {' '}
                                Download
                            </Text>
                        </Pressable>
                        <Text style={{ marginVertical: 10 }}>{movie.plot}</Text>
                        <Text style={styles.year}>Cast: {movie.cast}</Text>
                        <Text style={styles.year}>Creator: {movie.creator}</Text>

                        {/*Row with icon buttons*/}

                        <View style={{ flexDirection: 'row', marginTop: 10 }}>

                            <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                                <AntDesign name="plus" size={24} color={'black'} />
                                <Text style={{ color: 'darkgrey', marginTop: 5 }}>My List</Text>
                            </View>

                            <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                                <Feather name="thumbs-up" size={24} color="black" />
                                <Text style={{ color: 'darkgrey', marginTop: 5 }}>Rate</Text>
                            </View>

                            <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                                <FontAwesome name="share-alt" size={24} color="black" />
                                <Text style={{ color: 'darkgrey', marginTop: 5 }}>Share</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}


export default MovieDetailsScreen;