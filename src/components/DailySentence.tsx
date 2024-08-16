import { Card, Message } from '@arco-design/web-react'
import { IconThumbUp, IconShareInternal, IconRefresh, IconCopy } from '@arco-design/web-react/icon';
import { useEffect, useState } from 'react'

export default function DailySentence() {

  const [sentence, setSentence] = useState('');

  async function getSentence() {
    const res = await fetch('https://api.oick.cn/dutang/api.php', {
      method: 'GET'
    })
    const nextSentence = await res.json()
    setSentence(nextSentence)
  }


  const handleCopy = ()=>{
    navigator.clipboard.writeText(sentence)
    Message.success('复制成功')
  }


  useEffect(()=>{
    getSentence()
  },[])
  
  return (
    <Card 
        actions={[
          <span className='icon-hover'>
            <IconRefresh  onClick={getSentence}/>
          </span>,
          <span className='icon-hover'>
            <IconThumbUp />
          </span>,
          <span className='icon-hover'>
            <IconShareInternal />
          </span>,
          <span className='icon-hover'>
            <IconCopy onClick={handleCopy}/>
          </span>,
        ]}
      >
        <p className='min-h-[60px]'>{ sentence }</p>
      </Card>
  )
}
