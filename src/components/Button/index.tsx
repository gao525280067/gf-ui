import React, { useState, useMemo, useEffect } from 'react'
import './index.less'

export interface IEmptyLineProps {
  height?: number
}

const Button = ({ height = 20 }: IEmptyLineProps) => {
  const [test, setTest] = useState('1111')

  useEffect(() => {
    setTest('2222')
  }, [])

  return useMemo(
    () => (
      <div className="empty-line" style={{ height }}>
        {test}
      </div>
    ),
    [test, height]
  )
}

export default Button
