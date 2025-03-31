import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, ScrollView, Modal, Button, TouchableHighlight } from 'react-native';

const App = () => {
    const [modalVisibleplaya, setModalVisibleplaya] = useState(false);

    return (
        <ScrollView>
            <>
                <Modal
                    transparent={true}
                    animationType="slide"
                    visible={modalVisibleplaya}
                    onRequestClose={() => {
                        alert('Modal has been closed.');
                    }}
                >
                    <View style={styles.vistaModal}>
                        <View style={styles.Modal}>
                            <Text style={styles.subtitulo}>Ir a la playa</Text>
                            <Text>El Salvador cuenta con hermosas playas a nivel Centroamérica.</Text>
                            <Button title="Cerrar" onPress={() => setModalVisibleplaya(!modalVisibleplaya)} />
                        </View>
                    </View>
                </Modal>

                <View style={{ flexDirection: 'row' }}>
                    <Image
                        style={styles.banner}
                        source={require('./src/img/bg.jpg')}
                    />
                </View>

                <View style={styles.contenedor}>
                    <Text style={styles.titulo}>Qué hacer en El Salvador</Text>

                    <ScrollView horizontal>
                        <View>
                            <TouchableHighlight
                                onPress={() => setModalVisibleplaya(!modalVisibleplaya)}
                            >
                                <Image
                                    style={styles.ciudad}
                                    source={require('./src/img/actividad1.jpg')}
                                />
                            </TouchableHighlight>
                        </View>
                        <View>
                            <Image
                                style={styles.ciudad}
                                source={require('./src/img/actividad2.jpg')}
                            />
                        </View>
                        <View>
                            <Image
                                style={styles.ciudad}
                                source={require('./src/img/actividad3.jpg')}
                            />
                        </View>
                        <View>
                            <Image
                                style={styles.ciudad}
                                source={require('./src/img/actividad4.jpg')}
                            />
                        </View>
                        <View>
                            <Image
                                style={styles.ciudad}
                                source={require('./src/img/actividad5.jpg')}
                            />
                        </View>
                    </ScrollView>

                    <Text style={styles.titulo}>Platillos Salvadoreños</Text>

                    <View style={styles.listado}>
                        <View>
                            <Image
                                style={styles.mejores}
                                source={require('./src/img/mejores1.jpg')}
                            />
                        </View>
                        <View>
                            <Image
                                style={styles.mejores}
                                source={require('./src/img/mejores2.jpg')}
                            />
                        </View>
                        <View>
                            <Image
                                style={styles.mejores}
                                source={require('./src/img/mejores3.jpg')}
                            />
                        </View>
                    </View>

                  
                    <Text style={styles.titulo}>Rutas turísticas</Text>

                    <View style={styles.listado}>
                        <View>
                            <Image
                                style={styles.mejores}
                                source={require('./src/img/ruta1.jpg')}
                            />
                        </View>
                        <View>
                            <Image
                                style={styles.mejores}
                                source={require('./src/img/ruta2.jpg')}
                            />
                        </View>
                        <View>
                            <Image
                                style={styles.mejores}
                                source={require('./src/img/ruta3.jpg')}
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Derechos a Adriel Montano</Text>
                </View>
            </>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    banner: {
        height: 250,
        flex: 1,
    },
    contenedor: {
        alignItems: 'flex-start',
        marginTop: 10,
        marginHorizontal: 10,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginVertical: 10,
        alignSelf: 'flex-start',
    },
    ciudad: {
        width: 250,
        height: 300,
        marginRight: 10,
    },
    mejores: {
        flexBasis: '40%',
        height: 200,
        marginVertical: 5,
    },
    listado: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    vistaModal: {
        backgroundColor: '#000000aa',
        flex: 1,
        justifyContent: 'center',
    },
    Modal: {
        backgroundColor: '#fff',
        margin: 50,
        padding: 40,
        borderRadius: 10,
        flex: 1,
    },
    subtitulo: {
        fontWeight: 'bold',
        fontSize: 14,
        justifyContent: 'center',
    },
    footer: {
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: '#f0f0f0',
    },
    footerText: {
        fontSize: 16,
        color: '#333',
    },
});

export default App;