import  { useEffect, useState } from 'react'

interface IData{
  rank: number,
  flagUrl: string,
  description: string,
  gold: number,
  silver: number,
  bronze: number
  total: number
}


export default function GoldRank() {

  const [data, setData] = useState<IData[]>([])
  const fetchData = ()=>{
    fetch('https://60s.viki.moe/olympic')
    .then(res=>res.json())
    .then(res=>{
      setData(res.data)
    })
  }

  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div>
      <table className='w-full h-[200px] overflow-y-scroll'>
        <thead>
          <tr className='text-gray-400 font-normal'>
            <th>排名</th>
            <th>国家</th>
            <th>金牌数</th>
            <th>银牌数</th>
            <th>铜牌数</th>
            <th>总计</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item,index)=>{
              return (
                <tr key={index} className='border-t-[0.5px] text-center h-10 hover:bg-yellow-200'>
                  <td className={`${[1,2,3].includes(item.rank)?'text-red-500':''}`}>{item.rank}</td>
                  <td className='flex pl-[40px] items-center h-full'>
                    <span className='ml-[20px]'>
                      <img src={item.flagUrl} alt=""  className='w-[40px]'/>
                    </span>
                    <span className='ml-2'>
                      {item.description}
                    </span>
                  </td>
                  <td>{item.gold}</td>
                  <td>{item.silver}</td>
                  <td>{item.bronze}</td>
                  <td className='font-bold'>{item.total}</td>
                </tr>
                )})
          }
        </tbody>
      </table>
    </div>
  )
}
