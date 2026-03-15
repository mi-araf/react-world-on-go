import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries/Countries'

const countiresPromise = fetch("https://openapi.programming-hero.com/api/all")
	.then(res => res.json())
function App() {
	return (
		<>
			<Suspense fallback={<h3>Countries bhai loading...</h3>}>
				<Countries countiresPromise={countiresPromise} />
			</Suspense>
		</>
	)
}

export default App
