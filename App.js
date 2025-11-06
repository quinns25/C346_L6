import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Alert, Image, ToastAndroid, ScrollView, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';



const MyApp = () => {
    // State to hold the answers for each question
    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');
    const [answer3, setAnswer3] = useState('');

    // Correct answers for validation
    const correctAnswers = ['Golden Retriever', 'Cow', 'Panda'];

    // Function to check answers and show the result
    const checkAnswers = () => {
        let score = 0;
        if (answer1 === correctAnswers[0]) score++;
        if (answer2 === correctAnswers[1]) score++;
        if (answer3 === correctAnswers[2]) score++;

        if (score === 1) {
            Alert.alert(`Good try.. You got ${score} out of 3 correct!`);
        } else {
            Alert.alert(`Well done! You got ${score} out of 3 correct!`);
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.quizContainer}>

                {/* Title */}
                <Text style={styles.title}>Animal Quiz🐾</Text>

                {/* Question 1 */}
                <Text style={styles.questionText}>Question 1: What animal is this?</Text>
                <Picker
                    selectedValue={answer1}
                    onValueChange={(value) => setAnswer1(value)}
                    style={styles.picker}
                >
                    <Picker.Item label="Golden Retriever" value="Golden Retriever" />
                    <Picker.Item label="Cow" value="Cow" />
                    <Picker.Item label="Panda" value="Panda" />
                    <Picker.Item label="Hippo" value="Hippo" />
                </Picker>

                <Image
                    source={{ uri: 'https://tse4.mm.bing.net/th/id/OIP.qFarbz8aOLXIBZrHn9Q8UQHaE8?pid=Api&P=0&h=180' }}
                    style={styles.image}
                />

                {/* Question 2 */}
                <Text style={styles.questionText}>Question 2: What animal is this?</Text>
                <Picker
                    selectedValue={answer2}
                    onValueChange={(value) => setAnswer2(value)}
                    style={styles.picker}
                >
                   <Picker.Item label="Golden Retriever" value="Golden Retriever" />
                   <Picker.Item label="Cow" value="Cow" />
                   <Picker.Item label="Panda" value="Panda" />
                   <Picker.Item label="Hippo" value="Hippo" />

                </Picker>

                <Image
                    source={{ uri: 'https://wallpaperaccess.com/full/1137850.jpg' }}
                    style={styles.image}
                />

                {/* Question 3 */}
                <Text style={styles.questionText}>Question 3: What animal is this?</Text>
                <Picker
                    selectedValue={answer3}
                    onValueChange={(value) => setAnswer3(value)}
                    style={styles.picker}
                >
                  <Picker.Item label="Golden Retriever" value="Golden Retriever" />
                  <Picker.Item label="Cow" value="Cow" />
                  <Picker.Item label="Panda" value="Panda" />
                  <Picker.Item label="Hippo" value="Hippo" />

                </Picker>

                <Image
                    source={{ uri: 'https://tse3.mm.bing.net/th/id/OIP.f0tSXyu8ws8HjSAnjunaaAHaEO?pid=Api&P=0&h=180' }}
                    style={styles.image}
                />

                {/* Submit Button */}
                <Button title="Submit Answers" onPress={checkAnswers} color="#4CAF50" />
            </View>
        </ScrollView>
    );
};

// Styling
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDF6EC',
    },
    quizContainer: {
        padding: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'purple',
        marginVertical: 20,
        textAlign: 'center',
    },
    questionText: {
        fontSize: 18,
        fontWeight: '600',
        marginVertical: 10,
        textAlign: 'center',
    },
    picker: {
        width: '90%',
        backgroundColor: '#FFF',
        borderColor: '#CCC',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
    },
    image: {
        width: 300,
        height: 200,
        borderRadius: 10,
        marginBottom: 20,
    },
});

export default MyApp;




