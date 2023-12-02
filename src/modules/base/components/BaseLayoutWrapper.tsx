import React from 'react'

type BaseLayoutWrapperProps = {
	children: React.ReactNode
}

export default function BaseLayoutWrapper({children}:BaseLayoutWrapperProps) {
  return (
	<div>
		{children}
	</div>
  )
}
