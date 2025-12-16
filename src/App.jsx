import './App.css'
import ProfileCard from './components/ProfileCard/ProfileCard'
function App() {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>ReactMiniExercises</h1>
      <ProfileCard avatar="👨‍💻" name='Nikhil' role='Developer'/>
      <ProfileCard avatar="👨‍💻" name='Harsh' role='Data Scientist'/>
      <ProfileCard avatar="👨‍💻" name='Nikhil' role='Electronic Engineer'/>
    </>
  )
}

export default App
