import React from 'react';
import {Link} from 'react-router-native';
import {Image, StyleSheet, View, Text} from 'react-native';
// import {BackButton} from 'react-router-native';


const Header = () => {

  return (
    <>
      <Image
        source={require('../../assets/img/bg-secondary.png')}
        style={styles.bgMain}
      />

      <Image
        source={require('../../assets/img/logo-secondary.png')}
        style={styles.Logo}
      />
      <View style={styles.returnHandler}>
        <Link to={'/'}>
          <Text style={styles.returnHandlerText}> {'<'} </Text>
        </Link>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  bgMain: {
    position: 'absolute',
    width: '100%',
    flex: 1,
    zIndex: 80,
  },
  Logo: {
    zIndex: 90,
    alignItems: 'flex-end',
    width: '100%',
    marginTop: -40,
  },
  returnHandler: {
    position: 'absolute',
    zIndex: 100,
    left: '5%',
    top: '3%',
    width: 20,
    height: 28,
  },
  returnHandlerText: {
    fontWeight: '900',
    fontSize: 25,
    color: '#7A4ED9',
  },
});

export default Header;
