import {StyleSheet} from 'react-native';


const styles=StyleSheet.create({
text:{
   
    color:'#303535',
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    marginLeft: 19,
   marginTop: 50,
   

},
recovery:{
  color:'#6A6F7D',
  fontFamily: 'Poppins-Regular',
  fontSize:11  ,
  marginLeft:225,
  marginTop: 4,
},
textin:{
    flex:1,
color:'black',
fontFamily: 'Poppins-Regular',

},

view:{ backgroundColor: '#175CA4', padding: 10, borderRadius: 20,marginTop:20},
buttonText: {
    color: '#ffffff',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    lineHeight:18,
    textAlign: 'center',
  },
  buttonview:{ width:330,marginLeft:18, marginTop:20,height:150},
texta:{
  fontFamily: 'Poppins-Regular',
  color: '#303535',
 marginTop: 30,
 fontSize:16,
 marginLeft: 18,
  
  },
  errorText:{fontSize: 12,padding: 10,color:'red',marginLeft:18,  fontFamily: 'Poppins-Regular',
},
loadingContainer: {
  position: 'absolute',
  top: 0,
  bottom: 70,
  left: 0,
  right: 0,
  justifyContent: 'center',
  alignItems: 'center',
},
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},

})

export default styles;