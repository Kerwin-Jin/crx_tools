import {Tabs} from "@arco-design/web-react"
import "@arco-design/web-react/dist/css/arco.css";
import CreateImage from './components/CreateImage';
import DailySentence from './components/DailySentence';
import GenerateQRCode from "./components/GenerateQRCode";
import GoldRank from "./components/GoldRank";

const TabPane = Tabs.TabPane;
function App() {
  
  return (
    <div className='w-[614px] p-4 bg-white border'>
      <Tabs defaultActiveTab='1'>
      <TabPane key='1' title='图片创建'>
        <CreateImage/>
      </TabPane>
      <TabPane key='2' title='二维码'>
        <GenerateQRCode/>
      </TabPane>
      <TabPane key='3' title='每日一句'>
        <DailySentence/>
      </TabPane>
      <TabPane key='4' title='奥运奖牌榜🏅️'>
        <GoldRank/>
      </TabPane>
    </Tabs>
    </div>
  )
}

export default App
