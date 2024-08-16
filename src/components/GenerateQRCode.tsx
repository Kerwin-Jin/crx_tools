import { Button, Input } from '@arco-design/web-react'
import { useRef, useState } from 'react'
import QRCode from 'qrcode'

export default function GenerateQRCode() {


  const [inputValue, setInputValue] = useState('')
  const imgRef = useRef<HTMLImageElement>(null)

  const generate = ()=>{
    if(!inputValue) return
    QRCode.toDataURL(inputValue)
    .then((url:string) => {
      (imgRef.current as HTMLImageElement).src = url
    })
    .catch(() => {
      console.error('出错了')
    })
  }
  
  return (
    <div>
      <Input.TextArea value={inputValue} onChange={setInputValue}/>
      <Button type='primary' onClick={generate} className={'my-4'}>创建二维码</Button>
      <img src="" ref={imgRef} className='border border-red-300'/>
    </div>
  )
}
