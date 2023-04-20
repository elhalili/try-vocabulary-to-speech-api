import React, {useEffect, useState} from "react";
import Input from "./Input";

const Convert: React.FC = ({  }) => {
  const styles = {
    width: '20ch',
    minHeight: '1em',
    border: '1px solid black'
  }

  const [arr, setArr] = useState<JSX.Element[][]>([]);

  return (
    <div className='w-full flex justify-center items-center'>
      <table className='text-sm text-left text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
          <tr className='flex justify-around'>
            <th className='text-center'>Language 1</th>
            <th className='text-center'>Language 2</th>
          </tr>
        </thead>
        <tbody>
          { arr.map(([a, b], i) => (
            <tr key={i} className='flex justify-between'>
              <td>{ a }</td>
              <td>{ b }</td>
            </tr>
          )) }
        </tbody>
      </table>
      <div onClick={() =>  {
        arr.push([<Input style={styles} />, <Input style={styles} />]);
        setArr(arr);
        console.log("a")
      }}>add</div>
    </div>
  )
}

export default Convert;