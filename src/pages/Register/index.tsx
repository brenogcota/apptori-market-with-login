import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Swiper from 'react-native-web-swiper';
import {InfoPersonal} from './InfoPersonal';
import {Address} from './Address';
import {Password} from './Password';
import {TouchableOpacity} from 'react-native-gesture-handler';

export interface RegisterProps {}

function changeIndex(index: any) {
  console.log(index);
}

export function DotsCustom(props: any) {
  console.log(props);
  return (
    <TouchableOpacity
      style={[style.circle, props.isActive ? {backgroundColor: '#FF0000'} : {}]}
      {...props}></TouchableOpacity>
  );
}

export function Register(props: RegisterProps) {
  const [state, setstate] = React.useState(0);
  const swiperRef = React.useRef(null);

  function slideNext(index: number) {
    swiperRef.current.goTo(index);
  }
  return (
    <View style={style.container}>
      <Swiper
        onIndexChanged={changeIndex}
        ref={swiperRef}
        controlsProps={{
          dotsTouchable: true,
          dotsPos: 'top-right',
          dotsWrapperStyle: style.containeCircle,
          prevTitleStyle: {display: 'none'},
          nextTitleStyle: {display: 'none'},
          DotComponent: ({index, isActive, onPress}: any) => (
            <DotsCustom
              index={index}
              isActive={isActive}
              onPress={() => swiperRef.current.goTo(index)}
            />
          ),
        }}>
        <View style={style.slideContainer}>
          <InfoPersonal slideNext={slideNext}></InfoPersonal>
        </View>
        <View style={style.slideContainer}>
          <Address slideNext={slideNext}></Address>
        </View>
        <View style={style.slideContainer}>
          <Password></Password>
        </View>
      </Swiper>
    </View>
  );
}

const style = StyleSheet.create({
  container: {flex: 1},
  slideContainer: {
    flex: 1,
  },

  containeCircle: {
    width: 70,
    marginTop: 30,
    justifyContent: 'space-between',
  },
  circle: {
    height: 15,
    width: 15,
    borderRadius: 100,
    backgroundColor: '#8B8B8B',
  },

  controlsWrapperStyle: {
    backgroundColor: '#000000',
    alignSelf: 'flex-start',
  },
});
