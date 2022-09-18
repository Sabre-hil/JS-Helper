import React, { useState } from 'react';
import {
  Modal, Text, TouchableOpacity, View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors, styles } from '../../../constants';
import { SENDING_SCORE_THUNK } from '../../redux/actions/qestionAction';
import { login } from '../../redux/actions/authAction';
import { useNavigation } from '@react-navigation/native';

function Buttons({ currentQestionId, setCurrentQestionId }) {
  const navigation = useNavigation();
  const { qestionCategory } = useSelector((state) => state);
  const { auth } = useSelector((state) => state);
  const priseQestion = qestionCategory[0]?.Category.price;

  const dispatch = useDispatch();

  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [isOptionDisabled, setIsOptionDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);
  const splitListCateg = qestionCategory[currentQestionId]?.list.split('|');

  const validateAnswer = (selectedOption) => {
    const currentCorrectOption = qestionCategory[currentQestionId]?.answer;

    setCurrentOptionSelected(selectedOption);
    setCorrectOption(currentCorrectOption);
    setIsOptionDisabled(true);

    if (selectedOption === currentCorrectOption) {
      setScore(score + priseQestion);
    }
    setShowNextButton(true);
  };

  const nextHandler = async () => {
    if (currentQestionId === qestionCategory.length - 1) {
      setShowScoreModal(true);
      dispatch(SENDING_SCORE_THUNK(score, auth?.id));
    }
    setCurrentQestionId(currentQestionId + 1);
    setCurrentOptionSelected(null);
    setCorrectOption(null);
    setIsOptionDisabled(false);
    setShowNextButton(false);
  };

  const renderNextButton = () => {
    if (showNextButton) {
      return (
        <TouchableOpacity
          onPress={nextHandler}
          style={{
            marginTop: 20,
            backgroundColor: colors.buttonColor,
            padding: 20,
            borderRadius: 10,
            border: 1,
            borderColor: 'black',
          }}
        >
          <Text
            style={{ fontSize: 20, color: 'black', textAlign: 'center' }}
          >
            Next
          </Text>
        </TouchableOpacity>
      );
    }
    return null;
  };

  return (
    <View>
      { splitListCateg?.map((elem) => (
        <TouchableOpacity
          style={{
            borderWidth: 3,
            borderColor:
            elem === correctOption ? 'green'
              : elem === currentOptionSelected ? 'red'
                : 'grey' + '20',
            height: 60,
            borderRadius: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            marginVertical: 10,
            backgroundColor: colors.buttonColor,
          }}
          onPress={() => validateAnswer(elem)}
          key={elem}
        >
          {/* QESTION BUTTON */}
          <Text
            style={{ fontSize: 20 }}
          >
            {elem}
          </Text>

          {/* PART OF CHECK THE CORRECT OR WRONG BUTTON ICON */}

          {
            // eslint-disable-next-line no-nested-ternary
            elem === correctOption ? (
              <View style={{
                width: 30,
                height: 30,
                borderRadius: 30 / 2,
                backgroundColor: 'green',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              >
                <MaterialCommunityIcons
                  name="check"
                  style={{
                    color: 'white',
                    fontSize: 20,
                  }}
                />
              </View>
            ) : elem === currentOptionSelected ? (
              <View style={{
                width: 30,
                height: 30,
                borderRadius: 30 / 2,
                backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              >
                <MaterialCommunityIcons
                  name="close"
                  style={{
                    color: 'white',
                    fontSize: 20,
                  }}
                />
              </View>
            ) : null
          }
        </TouchableOpacity>
      ))}

      {/* BUTTON NEXT */}
      {renderNextButton()}

      {/* SCORE MODAL */}
      <Modal
        animationType="slide"
        transparent
        visible={showScoreModal}
      >
        <View style={{
          flex: 1,
          backgroundColor: '#E1CC4F',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        >
          <View style={{
            backgroundColor: 'white',
            // width: '90%',  <===========
            borderRadius: 20,
            padding: 20,
            alignItems: 'center',
          }}
          >
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
              { score > (qestionCategory.length / 2) ? 'Поздравляем!' : 'Ооой!' }
            </Text>

            <View style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginVertical: 20,
            }}
            >
              <Text style={{
                fontSize: 30,
                color: score > (qestionCategory.length / 2) ? 'green' : 'red',
              }}
              >
                {score}
              </Text>
              <Text style={{
                fontSize: 20, color: 'black',
              }}
              >
                /
                { qestionCategory.length * priseQestion}

              </Text>
            </View>
          </View>
          {/* RETURN TO MAIN BUTTON */}
          <TouchableOpacity
            onPress={() => navigation.navigate('Category')}
            style={{
              backgroundColor: 'blue',
              padding: 20,
              margin: 20,
              // width: '100%', <===========
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                textAlign: 'center', color: 'white', fontSize: 20,
              }}
            >
              Return
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

export default Buttons;
