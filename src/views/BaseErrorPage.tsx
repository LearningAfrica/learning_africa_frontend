
// type Props = {}

import { useRouteError } from "react-router-dom"

export default function BaseErrorPage() {
	const error = useRouteError() as unknown 
  return (
	<div>
		<h1>BaseErrorPage</h1>
		<pre>{JSON.stringify(error, null, 2)}</pre>
	</div>
  )
}
