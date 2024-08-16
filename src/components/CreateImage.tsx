import { Button, ColorPicker, Form, Input, InputNumber } from '@arco-design/web-react'
import { useRef, useState } from 'react'

const FormItem = Form.Item

export default function CreateImage() {

  const [form] = Form.useForm()
  const [imgDataUrl, setImgDataUrl] = useState<string>('')
  const imgRef = useRef<HTMLImageElement>(null)


  const createImage = ()=>{
    const values = form.getFieldsValue()
    const canvas = document.createElement('canvas')
    canvas.width = values.width
    canvas.height = values.height
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    ctx.fillStyle = values.color
    ctx.fillRect(0, 0, values.width, values.height)
    ctx.font = '20px sans-serif'
    ctx.fillStyle = '#ffffff'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(values.text, values.width / 2, values.height / 2)
    const image = canvas.toDataURL('image/png');
    (imgRef.current as HTMLImageElement).src = image;
    setImgDataUrl(image)
  }

  const downloadImage = ()=>{
    const image = imgDataUrl
    if(image){
      const a = document.createElement('a')
      a.href = image
      a.download = `image-${Date.now()}.png`
      a.click()
    }
  }
  return (
    <div>
      <Form labelAlign="left" labelCol={{span:3}} layout='inline' form={form}>
        <FormItem label='图片宽度' field={'width'} initialValue={200}>
          <InputNumber max={600}/>
        </FormItem>
        <FormItem label='图片高度' field={'height'} initialValue={200}>
          <InputNumber max={600}/>
        </FormItem>
        <FormItem label='图片颜色' field={'color'} initialValue={'#000000'}>
          <ColorPicker defaultValue={'#165DFF'} showText  className={"w-[182px]"}/>
        </FormItem>
        <FormItem label='图片文字' field={'text'} initialValue={'image'}>
          <Input/>
        </FormItem>
        <FormItem >
          <Button type='primary' onClick={createImage}>创建</Button>{ imgDataUrl && <span className='ml-2 text-gray-500'>点击图片下载</span>}
        </FormItem>
      </Form>
      <div >
        
        <img ref={imgRef} onClick={downloadImage} className='cursor-pointer'/>
      </div>
    </div>
  )
}
