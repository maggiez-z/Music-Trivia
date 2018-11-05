'use strict';
/*
 * Copyright 2018 Amazon.com, Inc. and its affiliates. All Rights Reserved.
 * Licensed under the Amazon Software License (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 * http://aws.amazon.com/asl/
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */


/**
 * Questions library
 *
 * Use this file to create your own set of questions.
 *
 * Object properties:
 *      index:          The index of the question in this list
 *      question:       The question you want Alexa to ask
 *      answers:        The list of available answers
 *      correct_answer: The correct answer to the question
 *
 * When adding or updating questions and answers, you must take the list of all values
 * in each of the 'answers' arrays for all questions and add them to a custom slot
 * in your skill called 'answers'.
 *
 * The 'answers' custom slot is be mapped to a couple of intents in the interaction model.
 * One intent, named 'AnswerOnlyIntent', contains only the slot, by itself, in order
 * to maximize the accuracy of the model.
 *
 * For example:
 *      AnswerOnlyIntent {answers}
 *
 * The other intent, 'AnswerQuestionIntent', provides more complex speech patterns
 * to match other utternaces users may include with their answers.
 *
 * For example:
 *      AnswerQuestionIntent is it {answers}
 *      AnswerQuestionIntent it is {answers}
 *      AnswerQuestionIntent the answer is {answers}
 *      AnswerQuestionIntent I think the answer is {answers}
 *
 * See model file at models/en-US.json for a complete example.
 */
module.exports = Object.freeze({
    questions_en_US: [
        {
            index: 1,
            question: 'What does the musical term accelerando mean?',
            answers: ['accelerate', 'get slower', 'fast', 'get softer'],
            correct_answer: 'accelerate'
        },
        {
          index: 2,
          question: 'If the music says ah tempo what do you do?',
          answers: ['go to the end', 'go to the beginning', 'play the original tempo', 'slur'],
          correct_answer: 'play the original tempo'
        },
        {
            index: 3,
            question: 'What does the musical term adagio mean?',
            answers: ['fast', 'sweetly', 'hurried', 'slow'],
            correct_answer: 'slow'
        },
        {
            index: 4,
            question: 'What speed is presto?',
            answers: ['fast', 'slow'],
            correct_answer: 'fast'
        },
        {
            index: 5,
            question: 'What musical term means decrease in volume?',
            answers: ['decrescendo', 'crescendo', 'molto'],
            correct_answer: 'decrescendo'
        },
        {
            index: 6,
            question: 'How many players does a quartet have?',
            answers: ['five', 'two', 'four', 'one'],
            correct_answer: 'four'
        },
        {
            index: 7,
            question: 'Which of the following instruments is a woodwind?',
            answers: ['trumpet', 'bass', 'clarinet'],
            correct_answer: 'clarinet'
        },
        {
            index: 8,
            question: 'How many lines does the music staff have?',
            answers: ['five', 'six', 'four', 'seven'],
            correct_answer: 'five'
        },
        {
            index: 9,
            question: 'What raises a note one half step?',
            answers: ['a flat', 'a sharp', 'stairs', 'double flat'],
            correct_answer: 'a sharp'
        },
        {
            index: 10,
            question: 'What is another name for the musical staff?',
            answers: ['music lines', 'stave', 'notation paper'],
            correct_answer: 'stave'
        },
        {
            index: 11,
            question: 'Can note stems go up or down or both?',
            answers: ['up', 'down', 'both'],
            correct_answer: 'both'
        },
        {
            index: 12,
            question: 'What does a flag added to a note do?',
            answers: ['half it', 'double it', 'triple it'],
            correct_answer: 'half it'
        },

    ],
    questions_en_GB: [
        {
            index: 1,
            question: 'What does the musical term accelerando mean?',
            answers: ['accelerate', 'get slower', 'fast', 'get softer'],
            correct_answer: 'accelerate'
        },
        {
          index: 2,
          question: 'If the music says ah tempo what do you do?',
          answers: ['go to the end', 'go to the beginning', 'play the original tempo', 'slur'],
          correct_answer: 'play the original tempo'
        },
        {
            index: 3,
            question: 'What does the musical term adagio mean?',
            answers: ['fast', 'sweetly', 'hurried', 'slow'],
            correct_answer: 'slow'
        },
        {
            index: 4,
            question: 'What speed is presto?',
            answers: ['fast', 'slow'],
            correct_answer: 'fast'
        },
        {
            index: 5,
            question: 'What musical term means decrease in volume?',
            answers: ['decrescendo', 'crescendo', 'molto'],
            correct_answer: 'decrescendo'
        },
        {
            index: 6,
            question: 'How many players does a quartet have?',
            answers: ['five', 'two', 'four', 'one'],
            correct_answer: 'four'
        },
        {
            index: 7,
            question: 'Which of the following instruments is a woodwind?',
            answers: ['trumpet', 'bass', 'clarinet'],
            correct_answer: 'clarinet'
        },
        {
            index: 8,
            question: 'How many lines does the music staff have?',
            answers: ['five', 'six', 'four', 'seven'],
            correct_answer: 'five'
        },
        {
            index: 9,
            question: 'What raises a note one half step?',
            answers: ['a flat', 'a sharp', 'stairs', 'double flat'],
            correct_answer: 'a sharp'
        },
        {
            index: 10,
            question: 'What is another name for the musical staff?',
            answers: ['music lines', 'stave', 'notation paper'],
            correct_answer: 'stave'
        },
        {
            index: 11,
            question: 'Can note stems go up or down or both?',
            answers: ['up', 'down', 'both'],
            correct_answer: 'both'
        },
        {
            index: 12,
            question: 'What does a flag added to a note do?',
            answers: ['half it', 'double it', 'triple it'],
            correct_answer: 'half it'
        },
  ],
  questions_de_DE: [
    {
        index: 1,
        question: 'Wie wird eine Gruppe von Löwen genannt?',
        answers: ['Rotte', 'Rudel', 'Schule', 'Meute'],
        correct_answer: 'Rudel'
    },
    {
        index: 2,
        question: 'Welches ist die einzige aus Südamerika stammende Bärenart?',
        answers: ['Braunbär', 'Kodiakbär', 'Riesenpanda', 'Brillenbär'],
        correct_answer: 'Brillenbär'
    },
    {
        index: 3,
        question: 'Was für eine Art Tier ist ein Seepferdchen?',
        answers: ['Krustentier', 'Spinnentier', 'Fisch', 'Muschel'],
        correct_answer: 'Fisch'
    },
    {
        index: 4,
        question: 'Welche Farbe haben Zebras?',
        answers: ['Weiß mit schwarzen Streifen', 'Schwarz mit weißen Streifen'],
        correct_answer: 'Schwarz mit weißen Streifen'
    },
    {
        index: 5,
        question: 'Was ist das schnellste Wassertier?',
        answers: ['Schweinswal', 'Fächerfisch', 'Fliegender Fisch', 'Thunfisch'],
        correct_answer: 'Fächerfisch'
    },
    {
        index: 6,
        question: 'Welches ist die einzige giftige Schlange in Großbritannien?',
        answers: ['Kobra', 'Korallenschlange', 'Mokassinschlange', 'Kreuzotter'],
        correct_answer: 'Kreuzotter'
    },
    {
        index: 7,
        question: 'Was ist der Name eines berühmten männlichen Eisbären?',
        answers: ['Sven', 'Knut', 'Olaf'],
        correct_answer: 'Knut'
    },
    {
        index: 8,
        question: 'Welches Landsäugetier hat abgesehen vom Menschen die längste Lebensdauer?',
        answers: ['Blauwal', 'Delfin', 'Elefant', 'Orang-Utan'],
        correct_answer: 'Elefant'
    },
    {
        index: 9,
        question: 'Welches Tier bezeichnen die Eskimos als Nanook?',
        answers: ['Pinguin', 'Narwal', 'Eisbär', 'Karibu'],
        correct_answer: 'Eisbär'
    },
    {
        index: 10,
        question: 'Lupus ist der lateinische Name für welches Tier?',
        answers: ['Hund', 'Katze', 'Wolf', 'Fuchs'],
        correct_answer: 'Wolf'
    }
]
});
