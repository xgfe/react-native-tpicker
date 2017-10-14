/**
 * 依赖引用
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    TouchableWithoutFeedback,
    TextInput,
    Animated,
    Platform,
    PickerIOS,
    StatusBar,
    Modal,
    Image,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './outerStyle';


/**
 * 组件扩展
 */
class InputOuter extends Component {

  /**
   * 类型约束
   * @type {{data: Requireable<any>, visible: Requireable<any>, transparent: Requireable<any>, animationType: Requireable<any>, enable: Requireable<any>, inputValue: Requireable<any>}}
     */
  static propTypes = {
    //传递的数据
    data: PropTypes.array,
    iconSource: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  };

  /**
   * 构造函数
   * @param props {object} 继承的属性
   * @param context 上下文
     */
  constructor(props, context){
    super(props, context);

  }


  /**
   * 渲染函数
   * @returns {XML}
     */
  render(){
    return (
          <TouchableWithoutFeedback style={[styles.outerInput, !this.props.enable && {backgroundColor: '#888'}, this.props.inputStyle]} onPress={() => {this.props.onPress();}}>
            <View style={[styles.outerInput, !this.props.enable && {backgroundColor: '#ccc'}, this.props.inputStyle, {marginLeft: 0}]}>
              <View style={[styles.textInput]}
                placeholder={this.props.placeholder}
              >
                <Text style={[styles.inputLabel, this.props.textStyle]}>{this.props.placeholder}</Text>
              </View>
              {this.props.iconSource ?
                <Image
                  style={[styles.icon, this.props.iconStyle]}
                  source={this.props.iconSource}
                />
                :
                null
              }
            </View>
           </TouchableWithoutFeedback>
    );
  }}

export default InputOuter;
