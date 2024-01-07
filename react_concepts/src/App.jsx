import React from 'react'
import ChildA from './components/HigherOrderComponenet/ChildA'
import ChildB from './components/HigherOrderComponenet/ChildB'
import Debouncing from './components/Debouncing/Debouncing'
import PureComponent from './components/purecomponent/PureComponent'
import ForWardRefExample from './components/forwardRef/ForWardRefExample'
import ChatJs from './components/chartjs/ChatJs'
import ButtonTextCopy from './components/ButtonTextCopy/ButtonTextCopy'
import Clipboard from './components/ButtonTextCopy/ClipBoardCopy'
import GetLocation from './components/GetLocation/GetLocation'
import PdfDownload from './components/PdfDownload/PdfDownload'
import Todo from './components/Todo/Todos'
const App = () => {
  return (
    <>
      <Todo></Todo>

    <Debouncing></Debouncing>
      <ChildA></ChildA>
      <ChildB></ChildB>
      <PureComponent/>
      <ForWardRefExample/>
      <ChatJs></ChatJs>
      <ButtonTextCopy/>
      <Clipboard/>
      <GetLocation/>
      <PdfDownload/>

    </>

  )
}

export default App