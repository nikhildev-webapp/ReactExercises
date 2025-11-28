import './App.css'
import UserCard from './components/UserCard/UserCard'

function App() {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>ReactMiniExercises</h1>
      <UserCard name='Nikhil' age='20' profession='Softwaredeveloper'/>
      <UserCard name='Harsh' age='21' profession='Data Analyst'/>
      <UserCard name='InderJeet' age='21' profession='Electronic Engineer'/>
    </>
  )
}

export default App
